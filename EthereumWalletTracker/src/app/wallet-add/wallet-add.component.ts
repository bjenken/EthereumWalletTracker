import { WalletService } from './../wallet.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet-add',
  templateUrl: './wallet-add.component.html',
  styleUrls: ['./wallet-add.component.css']
})

@Injectable()
export class WalletAddComponent implements OnInit {

  constructor(private walletService: WalletService, private router: Router) { }

  ngOnInit() {
  }

  onAddWallet(f: NgForm){
    const value = f.value;
    this.walletService.addWallet(value.name, value.address);
    this.router.navigate(['/']);
  }

}
