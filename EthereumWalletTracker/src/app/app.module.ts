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
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule, 
    NgbModule.forRoot()
  ],
  providers: [EtherScanService, WalletService, UtilityService, EthplorerService, FireBaseService, NgbModal, NgbActiveModal, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
