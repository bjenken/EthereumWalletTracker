import { EtherScanService } from './ether-scan.service';
import { Component, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  title = 'app';
  result : string;
  constructor(){ }

  convertWeiToEth(weiBalance){
    //1ETH = 10^18 Wei
    return weiBalance / (1000000000000000000);
  }
}
