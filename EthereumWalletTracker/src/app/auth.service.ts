import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
  token: string;
  userEmail: string;
  uid: string;
  loggedIn = new Subject<boolean>();
  authState: any = null;

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  signupUser(email:string, password:string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
        // this.updateUserData()
      })
      .catch(error => console.log(error));
  }

  signinUser(email:string, password:string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        // this.updateUserData()
      })
      .catch(error => console.log(error));
  }

  logout(): any {
    return this.afAuth.auth.signOut().then( (data) => {
      this.authState = null;
    });
  }

  getLoginSubscription(): any {
    return this.afAuth.authState;
  }

  getUid(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  getUserEmail(){
    return this.authenticated ? this.authState.userEmail : '';
  }

  isAuthenticated() {
    return this.authState !== null;
  }
}
