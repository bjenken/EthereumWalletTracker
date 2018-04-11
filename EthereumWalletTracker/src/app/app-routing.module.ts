import { WalletRemoveComponent } from './wallet-remove/wallet-remove.component';
import { WalletAddComponent } from './wallet-add/wallet-add.component';
import { WalletListComponent } from './wallet-list/wallet-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {path: '', redirectTo: '/wallets', pathMatch: 'full'},
    {path: 'wallets', component: WalletListComponent},
    {path: 'add-wallet', component: WalletAddComponent},
    {path: 'remove-wallet', component: WalletRemoveComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}