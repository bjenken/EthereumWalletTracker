import { WalletService } from './../wallet.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-wallet-add',
  templateUrl: './wallet-add.component.html',
  styleUrls: ['./wallet-add.component.css']
})

@Injectable()
export class WalletAddComponent implements OnInit {

  constructor(private walletService: WalletService) { }

  ngOnInit() {
  }

  onAddWallet(f: NgForm){
    const value = f.value;
    this.walletService.addWallet(value.name, value.address);
  }

}
