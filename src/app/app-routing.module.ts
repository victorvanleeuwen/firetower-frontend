import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AlertsComponent} from './alerts/alerts.component';
import {ServersComponent} from './servers/servers.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'alerts', component: AlertsComponent},
  { path: 'servers', component: ServersComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
