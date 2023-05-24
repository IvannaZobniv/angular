import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import { MainLayoutsComponent } from './layouts/main-layouts/main-layouts.component';
import { HeaderComponent } from './layouts/main-layouts/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDialogModule} from "@angular/material/dialog";
import {MainInterceptor} from "./main.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
