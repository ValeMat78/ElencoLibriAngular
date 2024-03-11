import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElencoComponent } from './elenco/elenco.component';
import { FormComponent } from './form/form.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import { ModComponent } from './mod/mod.component';
import { LibroComponent } from './libro/libro.component';

const routes: Routes = [
  {path : '', redirectTo:"elenco", pathMatch:'full'},
  {path : 'elenco', component:ElencoComponent, children:[
    {path: ':id', component:LibroComponent }
  ]},
  {path : 'form', component:FormComponent},
  {path : 'ricerca', component:RicercaComponent, children:[
    {path: ':id', component:LibroComponent}
  ]},
  {path : 'modifica/:id', component:ModComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
