import { Component, EventEmitter, Input, Output, input, OnInit } from '@angular/core';
import { Libro } from '../domain/Libro';
import { JsonService } from '../service/json.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mod',
  templateUrl: './mod.component.html',
  styleUrl: './mod.component.css'
})
export class ModComponent implements OnInit{
  mod: FormGroup;
  // @Input() titolo: string = ""
  // @Input() autore: string = ""
  // @Input() id: number = 0;
  // @Input() tipo: string = "";
  // @Output() visible = new EventEmitter<boolean>();
  titolo: string = ""
  autore: string = ""
  id: number = 0;
  tipo: string = "";
  constructor(private route: ActivatedRoute, public jsonService: JsonService, public router: Router) {

  }

  ngOnInit(){
    //terzo passo: inizializzare l'oggetto Formgroup
    this.mod = new FormGroup({
      autore: new FormControl(this.autore,[Validators.required]),
      titolo: new FormControl(this.titolo,[Validators.required]),
      tipo: new FormControl(this.tipo,[Validators.required]),
      id: new FormControl('')
    })
    this.mod.get('id').disable();
    this.getlibro(this.route.snapshot.params['id'])
  }

  getlibro(id:number){
    return this.jsonService.getJsonById(id).subscribe(
      data => {
        this.mod.get("id").setValue(data.id)
        this.mod.get("autore").setValue(data.autore)  
        this.mod.get("titolo").setValue(data.titolo)
        this.mod.get("tipo").setValue(data.tipo)
        });
  }

  modifica(){
    this.id = this.mod.get("id").value
    this.autore = this.mod.get("autore").value
    this.titolo = this.mod.get("titolo").value
    this.tipo = this.mod.get("tipo").value
    let libro: Libro={titolo:this.titolo, autore:this.autore, id:this.id,tipo:this.tipo}
    this.jsonService.modJson(libro).subscribe(
      data=>{
        // alert("il libro n: "+data.id+" è stato modificato");
        this.router.navigate(['/elenco'])
        // this.visible.emit(false);
      }
    );
    
  }
}
