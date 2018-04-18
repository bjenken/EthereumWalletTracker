import { WalletService } from './../wallet.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, Injectable } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wallet-add',
  templateUrl: './wallet-add.component.html',
  styleUrls: ['./wallet-add.component.css']
})

@Injectable()
export class WalletAddComponent implements OnInit {
  modalReference : NgbModalRef;
  constructor(private walletService: WalletService, private modalService: NgbModal, private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  onAddWallet(f: NgForm){
    const value = f.value;
    this.walletService.addWallet(value.name, value.address);
    this.modalReference.close();
  }

  open(content) {
    this.modalReference = this.modalService.open(content, { centered: true });
  }


}
