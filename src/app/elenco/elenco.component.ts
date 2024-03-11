import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Libro } from '../domain/Libro';
import { Observable, Subject } from 'rxjs';
import { JsonService } from '../service/json.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrl: './elenco.component.css'
})

export class ElencoComponent implements OnInit {
  // @Output() modificaLibro = new EventEmitter<Libro>()

  json$: Observable<Libro[]>;
  cancellato$: Subject<boolean>;
  
  constructor( public jsonService : JsonService) {
    this.cancellato$ = jsonService.cancellato$
  }
  ngOnInit(){
    this.json$ = this.jsonService.getJson();
    this.cancellato$.subscribe(ris=>{
        this.json$ = this.jsonService.getJson();
      })
  }

  
  
  // editLibro(libro:Libro){
  //   this.modificaLibro.emit(libro);
  //   console.log(libro);
  // }

}