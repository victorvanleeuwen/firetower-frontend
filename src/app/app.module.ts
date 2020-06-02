import { BrowserModule }            from "@angular/platform-browser";
import { NgModule }                 from "@angular/core";
import { FormsModule }              from "@angular/forms";
import { HttpClientModule }         from "@angular/common/http";


import { BrowserAnimationsModule }  from "@angular/platform-browser/animations";
import { MatButtonModule }          from "@angular/material/button";
import { MatCheckboxModule }        from "@angular/material/checkbox";
import { MatCardModule }            from "@angular/material/card";
import { MatFormFieldModule }       from "@angular/material/form-field";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatInputModule }           from "@angular/material/input";
import { MatPaginatorModule }       from '@angular/material/paginator';
import { MatSortModule }            from '@angular/material/sort';
import { MatTableModule }           from '@angular/material/table';



import { AppComponent }             from "./app.component";
import { LoginComponent }           from "./login/login.component";
import { RegisterComponent }        from "./register/register.component";
import { AppRoutingModule }         from "./app-routing.module";
import { RouterModule }             from "@angular/router";
import { CookieService }            from "ngx-cookie-service"
import {AlertsComponent}            from './alerts/alerts.component';
import {ServersComponent}           from './servers/servers.component';
import {HomeComponent}              from './home/home.component';

import { ChartsModule }             from "ng2-charts";
import { FontAwesomeModule }        from "@fortawesome/angular-fontawesome";
import { TextinputComponent }       from "./custom-components/textinput/textinput.component";
import { Authentication }           from "./app-routing-guards";
import { httpInterceptors }         from "./REST/http-interceptors/interceptors";

@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent,
    ServersComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TextinputComponent
  ],
  imports: [
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ChartsModule,
    FontAwesomeModule
  ],
  providers: [Authentication, httpInterceptors, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
