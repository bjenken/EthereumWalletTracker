import { Component, OnInit, Input } from '@angular/core';
import { Wallet } from '../wallet.data';

@Component({
  selector: 'app-wallet-details',
  templateUrl: './wallet-details.component.html',
  styleUrls: ['./wallet-details.component.css']
})
export class WalletDetailsComponent implements OnInit {
  @Input() wallet: Wallet;
  constructor() { }

  ngOnInit() {
  }

}
