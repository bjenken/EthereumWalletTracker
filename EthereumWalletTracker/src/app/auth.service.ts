import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  token: string;
  userEmail: string;
  uid: string;
  loggedIn = new Subject<boolean>();

  constructor(private router: Router) { }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {
          this.signinUser(email, password);
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          this.uid = firebase.auth().currentUser.uid;
          this.userEmail = firebase.auth().currentUser.email;
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => {
                this.token = token;
                console.log("LOGGED IN TRUE");
                this.loggedIn.next(true);
              }
            )
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut()
    .then( response => {
      this.loggedIn.next(false);
      this.token = null;
      this.uid = null;
      this.userEmail = null;
      this.router.navigate(['/']);
    });
  
  }

  getToken() {
    this.uid = firebase.auth().currentUser.uid;
    this.userEmail = firebase.auth().currentUser.email;
    firebase.auth().currentUser.getToken()
      .then(
        (token: string) => {
          this.token = token
        }
      );
    return this.token;
  }

  getLoginSubscription(): Observable<boolean> {
    return this.loggedIn;
  }

  getUserEmail(){
    return this.userEmail;
  }

  getUid(){
    return this.uid;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
