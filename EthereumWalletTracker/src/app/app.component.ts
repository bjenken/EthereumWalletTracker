import { EtherScanService } from './ether-scan.service';
import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  title = 'app';
  result : string;
  wei : string;
  ether : any;
  constructor(private esService: EtherScanService){ }

  checkWalletBalance(){
    console.log("Balance Checked");
    this.esService.getEtherWalletBalance()
      .subscribe(
        (data) => {
          this.result = data['result'],
          this.wei = this.result,
          this.ether = this.convertWeiToEth(Number(this.result));
        });
  }

  convertWeiToEth(weiBalance){
    //1ETH = 10^18 Wei
    return weiBalance / (1000000000000000000);
  }
}
