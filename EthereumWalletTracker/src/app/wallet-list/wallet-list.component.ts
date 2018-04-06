import { WalletService } from './../wallet.service';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.css']
})
@Injectable()
export class WalletListComponent implements OnInit {
  constructor(private walletService: WalletService) {
  }
  wallets: any[];

  ngOnInit() {
    this.wallets = this.walletService.getWallets();
  }

}
