import { WalletRemoveComponent } from './../wallet-remove/wallet-remove.component';
import { Wallet } from './../wallet.data';
import { WalletService } from './../wallet.service';
import { Component, OnInit, Injectable, OnDestroy, ViewChild } from '@angular/core';
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
  isLoaded:boolean;

  constructor(private walletService: WalletService) {
  }

  ngOnInit() {
    this.isLoaded = false;
    this.walletSubscription = this.walletService.getWalletSubscription()
        .subscribe( 
          (wallets: Wallet[]) => {
          this.wallets = wallets;
          this.isLoaded = true;
    });
    //the refresh will trigger the wallet subject in the case that the wallet service is already initialized
    this.walletService.refreshWallets();
  }

  ngOnDestroy(){
    this.walletSubscription.unsubscribe();
  }

}
