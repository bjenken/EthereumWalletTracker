import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { NgbModal, NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FireBaseService } from './fire-base.service';
import { WalletListItemComponent } from './wallet-list-item/wallet-list-item.component';
import { EthplorerService } from './ethplorer.service';
import { UtilityService } from './utility.service';
import { EtherScanService } from './ether-scan.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { WalletSearchComponent } from './wallet-search/wallet-search.component';
import { WalletListComponent } from './wallet-list/wallet-list.component';
import { WalletService } from './wallet.service';
import { WalletTotalsComponent } from './wallet-totals/wallet-totals.component';
import { WalletAddComponent } from './wallet-add/wallet-add.component';
import { WalletRemoveComponent } from './wallet-remove/wallet-remove.component';
import { WalletDetailsComponent } from './wallet-details/wallet-details.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    WalletSearchComponent,
    WalletListComponent,
    WalletTotalsComponent,
    WalletAddComponent,
    WalletRemoveComponent,
    WalletListItemComponent,
    WalletDetailsComponent,
    SignupComponent,
    NavbarComponent,
    SigninComponent, 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule, 
    NgbModule.forRoot(), 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireAuthModule,
  ],
  providers: [EtherScanService, WalletService, UtilityService, EthplorerService, FireBaseService, NgbModal, NgbActiveModal, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
