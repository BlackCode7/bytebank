import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { ExtratoComponent } from './extrato/extrato.component';

import localePt from '@angular/common/locales/pt'

import * as i0 from "@angular/core";
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';


registerLocaleData(localePt, 'pt');

//const DEFAULT_CURRENCY_CODE: InjectionToken<string>;

@NgModule({
  declarations: [AppComponent, NovaTransferenciaComponent, ExtratoComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt' },
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }//DEFAULT_CURRENCY_CODE
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
