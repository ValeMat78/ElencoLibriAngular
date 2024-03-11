import { Component, OnInit } from '@angular/core';
import { JsonService } from '../service/json.service';
import { Observable } from 'rxjs';
import { Libro } from '../domain/Libro';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrl: './ricerca.component.css'
})
export class RicercaComponent {
  id: number = 0;
  json$: Observable<Libro[]>;
  src: FormGroup;

  constructor(public jsonService : JsonService, public route: Router) {
    this.json$ = this.jsonService.getJson();

  }

  ngOnInit(){
    this.src = new FormGroup({
      id: new FormControl('',[Validators.required, Validators.min(1)])
    })
  }

  search(){
    this.id = this.src.get("id").value
    
    this.jsonService.getJsonById(this.id).subscribe(
      data => {
        //console.log(data);
        
        // alert("il libro cercato è: "+ data.titolo + "\nidLibro: "+this.id)
        this.route.navigate(["/ricerca",this.id])
      },
      error=>{
        // alert("libro inesistente")
      });
  }
}
