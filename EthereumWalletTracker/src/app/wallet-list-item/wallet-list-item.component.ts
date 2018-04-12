import { Wallet } from './../wallet.data';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wallet-list-item',
  templateUrl: './wallet-list-item.component.html',
  styleUrls: ['./wallet-list-item.component.css']
})
export class WalletListItemComponent implements OnInit {
  @Input() wallet : Wallet;

  ngOnInit() {
  }

}
