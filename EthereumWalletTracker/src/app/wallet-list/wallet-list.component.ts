import { Wallet } from './../wallet.data';
import { WalletService } from './../wallet.service';
import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.css']
})
@Injectable()
export class WalletListComponent implements OnInit, OnDestroy {
  walletSubscription : Subscription;
  wallets: Wallet[];

  constructor(private walletService: WalletService) {
  }

  ngOnInit() {
    this.wallets = this.walletService.getWallets();
    this.walletSubscription = this.walletService.updateWallets()
        .subscribe( 
          (wallets: Wallet[]) => {
          this.wallets = wallets;
    });
  }

  ngOnDestroy(){
    this.walletSubscription.unsubscribe();
  }

}
