import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AlertsComponent} from './alerts/alerts.component';
import {ServersComponent} from './servers/servers.component';
import { Authentication } from './app-routing-guards';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import {PrivacyComponent} from "./privacy/privacy.component";
import {ProfileComponent} from "./profile/profile.component";


const routes: Routes = [
  {path: "privacy",component: PrivacyComponent},
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: 'alerts', component: AlertsComponent,canActivate: [Authentication] },
  { path: 'servers', component: ServersComponent ,canActivate: [Authentication] },
  { path: 'home', component: HomeComponent ,canActivate: [Authentication] },
  { path: "register", component: RegisterComponent },
  {path: "profile", component: ProfileComponent,canActivate: [Authentication] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
