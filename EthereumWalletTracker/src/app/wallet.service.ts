import { EtherScanService } from './ether-scan.service';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UtilityService } from './utility.service';

@Injectable()
export class WalletService{
  totalEth = new Subject<number>();
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
        let total = 0;
        for (var i in results){
          this.wallets[i].ethBalance = this.utilityService.convertWeiToEth(results[i].balance);
          total += this.wallets[i].ethBalance; 
        }
        this.totalEth.next(total);
        this.walletSubject.next(this.wallets);
      });
  }

  getWallets() : Subject<any[]>{
    return this.walletSubject;
  }

  getTotalEth() : Subject<number>{
    return this.totalEth;
  }

  addWallet(name: string, address: string){
      this.wallets.push({name: name, address: address});
      this.refreshWalletBalances();
  }

}
