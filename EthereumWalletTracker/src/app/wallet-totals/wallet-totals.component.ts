import { Subscription } from 'rxjs';
import { WalletService } from './../wallet.service';
import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-wallet-totals',
  templateUrl: './wallet-totals.component.html',
  styleUrls: ['./wallet-totals.component.css']
})

@Injectable()
export class WalletTotalsComponent implements OnInit, OnDestroy {
  totalEth : number;
  totalEthSubscription : Subscription;
  constructor(private walletService: WalletService) { }

  ngOnInit() {
    this.totalEth = this.walletService.getTotal();
    this.totalEthSubscription = this.walletService.updateTotal()
      .subscribe(
        (total: number) => {
          this.totalEth = total;
      });
  }

  ngOnDestroy(){
    this.totalEthSubscription.unsubscribe();
  }

}
