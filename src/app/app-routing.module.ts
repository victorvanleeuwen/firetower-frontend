import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AlertsComponent} from './alerts/alerts.component';
import {ServersComponent} from './servers/servers.component';
import { Authentication } from './app-routing-guards';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";


const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: 'alerts', component: AlertsComponent,canActivate: [Authentication] },
  { path: 'servers', component: ServersComponent ,canActivate: [Authentication] },
  { path: "register", component: RegisterComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
