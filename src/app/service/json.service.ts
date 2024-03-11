import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, Subscriber } from 'rxjs';
import { Libro } from '../domain/Libro';


// decoupling
//implementazione della dependency injection (!!mi ha fatto una domanda, capire meglio questo aspetto!!)
//singleton
// se non esistesse questo metodo, nelle altre classi dovrei instanziare l'oggetto come new json.service
// 
@Injectable({
  providedIn: 'root'
})
export class JsonService {//pojo
  urls:string="http://localhost:9999/api/libri"
  constructor(public httpClient: HttpClient) { } 
  
  getJson():Observable<Libro[]>{
    return this.httpClient.get<Libro[]>(this.urls)
  }

  getJsonById(id:number):Observable<Libro> {
    return this.httpClient.get<Libro>(this.urls+'/'+id);
  }

  deleteJsonById(id:number):Observable<any> {
    return this.httpClient.delete<any>(this.urls+'/'+id);
  }

  modJson(json: Libro): Observable<Libro>{
    return this.httpClient.post<Libro>(this.urls,json);
  }

  addLibro(json: Libro):  Observable<Libro>{
    return this.httpClient.post<Libro>(this.urls,json)
  }

  cancellato$ = new Subject<boolean>();
}
