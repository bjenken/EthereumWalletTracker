import { Wallet } from './wallet.data';
import { Injectable } from '@angular/core';
declare var firebase: any;
@Injectable()
export class FireBaseService {
  walletsRef = 'wallets';
  saveWallet(wallet: Wallet){
    firebase.database().ref(this.walletsRef + "/" + wallet.address).set(wallet);
  }

  deleteWallet(wallet: Wallet){
    firebase.database().ref(this.walletsRef + "/" + wallet.address).remove();
  }

  getAllWallets() : Promise<any>{
    var walletsRef = firebase.database().ref(this.walletsRef);
    var promise = new Promise( (resolve, reject) => {
      walletsRef.on('value', (snapshot) => {
        resolve(snapshot.val());
      })
    });

    return promise;
  }

}
