import { EtherScanService } from './ether-scan.service';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class WalletService{
  wallets : any[] = [
    {
      name: "Test 1",
      address: "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a",
      description: "test"
    },
    {
      name: "Test 2",
      address: "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121b",
      description: "test"
    },
    {
      name: "Test 3",
      address: "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121c",
      description: "test"
    }, 
    {
      name: "Test 4",
      address: "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121d",
      description: "test"
    },
    {
      name: "Test 5",
      address: "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121e",
      description: "test"
    },
    {
      name: "Test 6",
      address: "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121f",
      description: "test"
    }
  ];
  constructor(private esService: EtherScanService) { 
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
        for (var i in results){
          this.wallets[i].ethBalance = this.convertWeiToEth(results[i].balance);
        }
      });
  }

  convertWeiToEth(weiBalance){
    //1ETH = 10^18 Wei
    return weiBalance / (1000000000000000000);
  }

  getWallets(){
    return this.wallets;
  }

}
