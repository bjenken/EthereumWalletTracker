import { WalletService } from './../wallet.service';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-wallet-totals',
  templateUrl: './wallet-totals.component.html',
  styleUrls: ['./wallet-totals.component.css']
})

@Injectable()
export class WalletTotalsComponent implements OnInit {
  totalEth : number;
  constructor(private walletService: WalletService) { }

  ngOnInit() {
    this.walletService.getTotalEth()
      .subscribe(
        (total: number) => {
          this.totalEth = total;
      });
  }

}
