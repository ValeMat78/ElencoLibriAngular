import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Libro } from '../domain/Libro';
import { Observable } from 'rxjs';
import { JsonService } from '../service/json.service';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  add: FormGroup;
  @Output() submitEvent = new EventEmitter<Libro>()

  titolo : string = ""
  tipo : string = ""
  autore: string = ""
  json$: Observable<Libro[]>
  id: number = 0;
  
  constructor(private route: ActivatedRoute, public jsonService: JsonService, public router: Router) {
    this.json$ = this.jsonService.getJson();

  }

  ngOnInit(){
    //terzo passo: inizializzare l'oggetto Formgroup
    this.add = new FormGroup({
      autore: new FormControl('',[Validators.required]),
      titolo: new FormControl('',[Validators.required]),
      tipo: new FormControl('',[Validators.required])
    })
  }

  submit() {
    this.autore = this.add.get("autore").value
    this.titolo = this.add.get("titolo").value
    this.tipo = this.add.get("tipo").value
    let libro : Libro = {autore : this.autore, id: 0 ,titolo: this.titolo, tipo: this.tipo}
    this.jsonService.addLibro(libro).subscribe(
      data => {
        // console.log(data);
        // alert("libro aggiunto:\ntitolo: "+ data.titolo + "\nAutore: " + data.autore)
        this.router.navigate(['/elenco'])
        // window.location.reload()
      });
  }

}
