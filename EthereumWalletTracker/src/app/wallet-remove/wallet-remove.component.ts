import { Subscription } from 'rxjs';
import { Component, OnInit, Injectable } from '@angular/core';
import { WalletService } from './../wallet.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable()
@Component({
  selector: 'app-wallet-remove',
  templateUrl: './wallet-remove.component.html',
  styleUrls: ['./wallet-remove.component.css']
})
export class WalletRemoveComponent implements OnInit {
  wallets : any[];
  constructor(private walletService: WalletService, private router: Router) { }

  ngOnInit() {
    this.wallets = this.walletService.getWallets();
  }

  onRemoveWallet(f: NgForm){
    const value = f.value;
    this.walletService.removeWallet(f.value.name);
    this.router.navigate(['/']);
  }

}

