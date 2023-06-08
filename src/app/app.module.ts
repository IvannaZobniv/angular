import { NgModule } from '@angular/core';
import { ChildComponent } from './components/child/child.component';
import { MainComponent } from './components/main/main.component';
import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
