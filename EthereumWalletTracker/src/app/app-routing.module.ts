import { AuthGuardService } from './auth-guard.service';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { WalletDetailsComponent } from './wallet-details/wallet-details.component';
import { WalletRemoveComponent } from './wallet-remove/wallet-remove.component';
import { WalletAddComponent } from './wallet-add/wallet-add.component';
import { WalletListComponent } from './wallet-list/wallet-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {path: '', redirectTo: '/wallets', pathMatch: 'full'},
    {path: 'wallets', component: WalletListComponent, canActivate: [AuthGuardService]},
    {path: 'wallet-details/:id', component: WalletDetailsComponent, canActivate: [AuthGuardService]},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}