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


@NgModule({
  declarations: [
    AppComponent,
    WalletSearchComponent,
    WalletListComponent,
    WalletTotalsComponent,
    WalletAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [EtherScanService, WalletService, UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
