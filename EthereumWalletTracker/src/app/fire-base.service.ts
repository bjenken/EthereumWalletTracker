import { AuthService } from './auth.service';
import { Wallet } from './wallet.data';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class FireBaseService {
  userId: string;
  wallets: AngularFireList<any> = null;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.afAuth.authState
      .subscribe((user) => {
        if(user) {
          this.userId = user.uid;
        }
    });
  }

  saveWallet(wallet: Wallet){
    this.wallets.update(wallet.address, wallet);
  }

  deleteWallet(wallet: Wallet){
    this.wallets.remove(wallet.address);
  }


  getAllWallets() : AngularFireList<any>{
    if (!this.userId){
      return;
    }
    this.wallets = this.db.list(`${this.userId}/wallets`);
    return this.wallets;
  }

}
