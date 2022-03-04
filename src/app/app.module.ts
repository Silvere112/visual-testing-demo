import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import PageComponent from "src/app/page/page.component";
import HeaderComponent from "src/app/header/header.component";
import ButtonComponent from "src/app/button/button.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
