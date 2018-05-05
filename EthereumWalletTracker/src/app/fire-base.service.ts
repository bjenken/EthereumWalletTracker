import { AuthService } from './auth.service';
import { Wallet } from './wallet.data';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
declare var firebase: any;
@Injectable()
export class FireBaseService {
  userId: string;
  wallets: AngularFireList<any[]> = null;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.afAuth.authState.subscribe(user => {
      
      if(user) {
        console.log(user);
        this.userId = user.uid;
      }
        
    })
  }

  walletsRef = 'wallets';

  saveWallet(wallet: Wallet){
    firebase.database().ref( this.userId + "/" + this.walletsRef + "/" + wallet.address).set(wallet);
  }

  deleteWallet(wallet: Wallet){
    firebase.database().ref( this.userId + "/" +this.walletsRef + "/" + wallet.address).remove();
  }

  // getAllWallets() : Promise<any>{
  //   console.log(this.authService.getUserEmail());
  //   console.log(this.authService.getUid());
  //   var walletsRef = firebase.database().ref().child(this.authService.getUid() + "/" + this.walletsRef);
  //   // walletsRef.once('value', (snapshot) => {
  //   //   console.log(snapshot.val());
  //   // });
  //   var promise = new Promise( (resolve, reject) => {
  //     walletsRef.on('value', (snapshot) => {
  //       console.log(snapshot);
  //       resolve(snapshot.val());
  //     })
  //   });

  //   return promise;
  // }

  getAllWallets() : AngularFireList<any>{
    console.log(this.userId);
    if (!this.userId) 
      return;
    this.wallets = this.db.list(`${this.userId}/wallets`);
    // var walletsRef = firebase.database().ref().child(this.authService.getUid() + "/" + this.walletsRef);
    // walletsRef.once('value', (snapshot) => {
    //   console.log(snapshot.val());
    // });
    // var promise = new Promise( (resolve, reject) => {
    //   walletsRef.on('value', (snapshot) => {
    //     console.log(snapshot);
    //     resolve(snapshot.val());
    //   })
    // });

    return this.wallets;
  }

}
