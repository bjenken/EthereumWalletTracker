import { EtherScanService } from './ether-scan.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent implements OnInit{
  title = 'app';
  result : string;
  constructor(){ }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAGCUnu2fOnPWoKS9_dAhnnP3atZkG7okc",
      authDomain: "eth-wallet-tracker.firebaseapp.com",
    });
  }
  convertWeiToEth(weiBalance){
    //1ETH = 10^18 Wei
    return weiBalance / (1000000000000000000);
  }
}
