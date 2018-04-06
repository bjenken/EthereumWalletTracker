import { EtherScanService } from './ether-scan.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WalletSearchComponent } from './wallet-search/wallet-search.component';
import { WalletListComponent } from './wallet-list/wallet-list.component';
import { WalletService } from './wallet.service';


@NgModule({
  declarations: [
    AppComponent,
    WalletSearchComponent,
    WalletListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EtherScanService, WalletService],
  bootstrap: [AppComponent]
})
export class AppModule { }
