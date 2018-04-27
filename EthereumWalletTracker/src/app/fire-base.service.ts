import { AuthService } from './auth.service';
import { Wallet } from './wallet.data';
import { Injectable } from '@angular/core';
declare var firebase: any;
@Injectable()
export class FireBaseService {
  constructor(private authService : AuthService) {
  }
  walletsRef = 'wallets';
  saveWallet(wallet: Wallet){
    firebase.database().ref( this.authService.getUid() + "/" + this.walletsRef + "/" + wallet.address).set(wallet);
  }

  deleteWallet(wallet: Wallet){
    firebase.database().ref( this.authService.getUid() + "/" +this.walletsRef + "/" + wallet.address).remove();
  }

  getAllWallets() : Promise<any>{
    console.log(this.authService.getUserEmail());
    console.log(this.authService.getUid());
    var walletsRef = firebase.database().ref().child(this.authService.getUid() + "/" + this.walletsRef);
    // walletsRef.once('value', (snapshot) => {
    //   console.log(snapshot.val());
    // });
    var promise = new Promise( (resolve, reject) => {
      walletsRef.on('value', (snapshot) => {
        console.log(snapshot);
        resolve(snapshot.val());
      })
    });

    return promise;
  }

}
