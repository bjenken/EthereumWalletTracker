import { WalletService } from './../wallet.service';
import { Component, OnInit, Input } from '@angular/core';
import { Wallet } from '../wallet.data';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-wallet-details',
  templateUrl: './wallet-details.component.html',
  styleUrls: ['./wallet-details.component.css']
})
export class WalletDetailsComponent implements OnInit {
  @Input() walletId: number;
  wallet: Wallet;
  
  constructor(private walletService: WalletService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.walletId= +params['id'];
      this.wallet = this.walletService.getWallet(this.walletId);
    });
    
  }

}
