import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ElencoComponent } from './elenco/elenco.component';
import { ModComponent } from './mod/mod.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { RicercaComponent } from './ricerca/ricerca.component';
import { LibroComponent } from './libro/libro.component';
// import { elenco } from './elenco/elenco.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ElencoComponent,
    ModComponent,
    RicercaComponent,
    LibroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
