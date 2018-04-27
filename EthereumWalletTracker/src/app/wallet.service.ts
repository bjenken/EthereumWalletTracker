import { AuthService } from './auth.service';
import { FireBaseService } from './fire-base.service';
import { Token } from './token.data';
import { Wallet } from './wallet.data';
import { EthplorerService } from './ethplorer.service';
import { EtherScanService } from './ether-scan.service';
import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { UtilityService } from './utility.service';

@Injectable()
export class WalletService {
  totalSubject = new Subject<number>();
  total: number = 0;
  walletSubject = new Subject<Wallet[]>();
  wallets: Wallet[];
  loginSubscription;

  constructor(private ethplorerService: EthplorerService, private utilityService: UtilityService, private fireBaseService: FireBaseService, private authService: AuthService) {
    // this.wallets = [new Wallet("Test 1", "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a"), 
    //                 new Wallet("Test 2", "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121b")];
    this.wallets = [];
    this.loginSubscription = this.authService.getLoginSubscription()
      .subscribe( (isLoggedIn) => {
        console.log(isLoggedIn);
        if (isLoggedIn == true){
          this._fetchWallets();
        } else {
          this.wallets = [];
          this.total = 0;
        }
    });
    this._fetchWallets();
  }
  _fetchWallets(){
    var walletPromise = this.fireBaseService.getAllWallets();
    walletPromise.then( (wallets) => {
      console.log(wallets);
      for (var id in wallets){
        this.wallets.push(wallets[id]);
      }
      this.refreshWalletBalances();
    });
  }

  refreshWalletBalances() {
    if (this.wallets.length > 0) {
      var observables = [];
      for (var i in this.wallets) {
        observables.push(this.ethplorerService.getEtherWalletBalance(this.wallets[i].address));
      }
      Observable.forkJoin(observables)
        .subscribe((result) => {
          this.total = 0;
          for(var i in result){
            var ethResult = result[i]["ETH"];
            this.wallets[i].ethBalance = ethResult.balance;
            this.total += this.wallets[i].ethBalance;

            if (result[i]["tokens"]){
              var tokens = [];
              for (var j in result[i]["tokens"]){
                var newToken = new Token();
                newToken.name = result[i]["tokens"][j].tokenInfo.name;
                newToken.symbol = result[i]["tokens"][j].tokenInfo.symbol;
                newToken.balance  = result[i]["tokens"][j].balance / Math.pow(10, result[i]["tokens"][j].tokenInfo.decimals);
                tokens.push(newToken);
              }
              this.wallets[i].tokens = tokens;
            }
          }
          this.totalSubject.next(this.total);
          this.walletSubject.next(this.wallets);
        });
    } else {
      this.total = 0;
      this.totalSubject.next(this.total);
      this.walletSubject.next(this.wallets);
    }
  }

  getWallets(): Wallet[] {
    return this.wallets.slice();
  }

  getWallet(index: number){
    return (this.wallets.slice())[index];
  }

  getWalletSubscription(): Observable<Wallet[]> {
    return this.walletSubject;
  }

  refreshWallets(){
    this.refreshWalletBalances();
  }

  updateWallets(){
    this.walletSubject.next(this.wallets);
  }

  updateTotal(): Subject<number> {
    return this.totalSubject;
  }

  getTotal(): number {
    return this.total;
  }

  addWallet(name: string, address: string) {
    var newWallet = new Wallet(name, address);
    this.wallets.push(newWallet);
    this.fireBaseService.saveWallet(newWallet);
    this.refreshWalletBalances();
  }

  removeWallet(index: number) {
    this.fireBaseService.deleteWallet(this.wallets[index]);
    this.wallets.splice(index, 1);
    this.refreshWalletBalances();
  }

}
