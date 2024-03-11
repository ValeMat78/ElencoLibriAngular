import { Component, EventEmitter, Output } from '@angular/core';
import { JsonService } from '../service/json.service';
import { Libro } from '../domain/Libro';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css'
})
export class LibroComponent {

  libro :Libro;
  cancellato$: Subject<boolean>;

  constructor(private route: ActivatedRoute, public jsonService: JsonService, public router: Router) {
    
  }
  ngOnInit(): void {
    this.cancellato$ = this.jsonService.cancellato$;
    this.route.params.subscribe(params=>{
      this.jsonService.getJsonById(params['id']).subscribe(data=>{
        this.libro=data;
      })
    });
    
  }

  deleteLibro(id:number){
    // this.jsonService.getJsonById(id).subscribe(
    //   data => {
    //     console.log(data);
    //   });

    this.jsonService.deleteJsonById(id).subscribe(
      data => {
        // console.log("cancellato il libro. "+ id);
        // alert("cancellato il libro N: "+id+" \n")
        this.router.navigate(['/elenco'])
        this.cancellato$.next(true);
        // window.location.reload()
        });
      

  }
}
