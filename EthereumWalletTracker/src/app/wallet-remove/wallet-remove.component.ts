import { Subscription } from 'rxjs';
import { Component, OnInit, Injectable } from '@angular/core';
import { WalletService } from './../wallet.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons, NgbActiveModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { Wallet } from '../wallet.data';

@Injectable()
@Component({
  selector: 'app-wallet-remove',
  templateUrl: './wallet-remove.component.html',
  styleUrls: ['./wallet-remove.component.css']
})
export class WalletRemoveComponent implements OnInit {
  modalReference : NgbModalRef;
  walletSubscription : Subscription;
  wallets : Wallet[];
  constructor(private walletService: WalletService, private modalService: NgbModal, private activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.wallets = this.walletService.getWallets();
    this.walletSubscription = this.walletService.getWalletSubscription()
    .subscribe( 
      (wallets: Wallet[]) => {
      this.wallets = wallets; 
    });
  }

  onRemoveWallet(f: NgForm){
    const value = f.value;
    this.walletService.removeWallet(f.value.name);
    this.modalReference.close();
  }

  open(content) {
    this.modalReference = this.modalService.open(content, { centered: true });
  }

}

