import { Component, Input } from '@angular/core';
import { Libro } from './domain/Libro';
import { JsonService } from './service/json.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Libri';
  idJson : number = 1;
  active: boolean = true;

  visualizzaFormElenco : boolean = true;

  json$: Observable<Libro[]>;

  // dependency injection di json service
  constructor( public jsonService : JsonService) {
    this.json$ = this.jsonService.getJson();
  }

  getJsonById(){
    this.jsonService.getJsonById(this.idJson).subscribe(
      data => {
        console.log(data);
      }
    )
  }

  cambiaVisualizzazione() {
    this.visualizzaFormElenco = !this.visualizzaFormElenco
  }

  inserisciLibro(libro : Libro) {
    this.cambiaVisualizzazione()
  }

  id: number = 0;
  titolo: string ="";
  autore: string = "";
  tipo: string = "";
  mostraMod :boolean =false;
  modificaLibro(libro:Libro){
    this.mostraMod = !this.mostraMod;
    this.titolo=libro.titolo;
    this.tipo= libro.tipo;
    this.id = libro.id;
    this.autore = libro.autore;
  }

  mostraModi(inn:boolean){
    this.mostraMod=!this.mostraMod;
  }
}
