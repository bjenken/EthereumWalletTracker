import { EtherScanService } from './../ether-scan.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-wallet-search',
  templateUrl: './wallet-search.component.html',
  styleUrls: ['./wallet-search.component.css']
})
@Injectable()
export class WalletSearchComponent implements OnInit {
  ether : any;
  constructor(private esService: EtherScanService) { }

  ngOnInit() {
  }

  checkWalletBalance(f: NgForm){
    const value = f.value;
    this.esService.getEtherWalletBalance(value.walletAddress)
      .subscribe(
        (data) => {
          this.ether = this.convertWeiToEth(Number(data["result"]));
        });
  }

  convertWeiToEth(weiBalance){
    //1ETH = 10^18 Wei
    return weiBalance / (1000000000000000000);
  }

}
