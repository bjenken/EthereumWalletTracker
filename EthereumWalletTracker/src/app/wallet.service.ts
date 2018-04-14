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

  constructor(private ethplorerService: EthplorerService, private utilityService: UtilityService) {
    this.wallets = [new Wallet("Test 1", "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a"), 
                    new Wallet("Test 2", "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121b")];
     
    this.refreshWalletBalances();
  }

  refreshWalletBalances() {
    this.total = 0;
    if (this.wallets.length > 0) {
      var observables = [];
      for (var i in this.wallets) {
        observables.push(this.ethplorerService.getEtherWalletBalance(this.wallets[i].address));
      }
      Observable.forkJoin(observables)
        .subscribe((result) => {
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
          console.log(this.wallets);
          this.totalSubject.next(this.total);
          this.walletSubject.next(this.wallets);
        });
    } else {
      this.totalSubject.next(this.total = 0);
      this.walletSubject.next(this.wallets);
    }
  }

  getWallets(): any[] {
    return this.wallets.slice();
  }

  getWallet(index: number){
    return (this.wallets.slice())[index];
  }

  updateWallets(): Subject<any[]> {
    return this.walletSubject;
  }

  updateTotal(): Subject<number> {
    return this.totalSubject;
  }

  getTotal(): number {
    return this.total;
  }

  addWallet(name: string, address: string) {
    this.wallets.push(new Wallet(name, address));
    this.refreshWalletBalances();
  }

  removeWallet(index: number) {
    this.wallets.splice(index, 1);
    this.refreshWalletBalances();
  }

}
