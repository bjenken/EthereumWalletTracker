import { EtherScanService } from './ether-scan.service';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UtilityService } from './utility.service';

@Injectable()
export class WalletService{
  totalSubject = new Subject<number>();
  total: number = 0;
  walletSubject = new Subject<any[]>();
  wallets : any[];

  constructor(private esService: EtherScanService, private utilityService: UtilityService) { 
    this.wallets = [
        {
          name: "Test 1",
          address: "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a"
        },
        {
          name: "Test 2",
          address: "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121b"
        }
      ];
    this.refreshWalletBalances();
  }

  refreshWalletBalances(){
    let walletAddresses = [];
    for (var i in this.wallets){
      walletAddresses.push(this.wallets[i].address);
    }
    this.esService.getBalanceForEtherWallets(walletAddresses)
    .subscribe(
      (data) => {
        let results = data["result"];
        this.total = 0;
        for (var i in results){
          this.wallets[i].ethBalance = this.utilityService.convertWeiToEth(results[i].balance);
          this.total += this.wallets[i].ethBalance; 
        }
        this.totalSubject.next(this.total);
        this.walletSubject.next(this.wallets);
      });
  }

  getWallets() : any[]{
    return this.wallets.slice();
  }

  updateWallets() : Subject<any[]>{
    return this.walletSubject;
  }

  updateTotal() : Subject<number>{
    return this.totalSubject;
  }

  getTotal() : number{
    return this.total;
  }

  addWallet(name: string, address: string){
      this.wallets.push({name: name, address: address});
      this.refreshWalletBalances();
  }

  removeWallet(index: number){
    this.wallets.splice(index);
    this.refreshWalletBalances();
  }

}
