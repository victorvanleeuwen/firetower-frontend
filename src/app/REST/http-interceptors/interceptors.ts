import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "./jwt-interceptor";

export const httpInterceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
];
