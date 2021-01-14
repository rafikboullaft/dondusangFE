import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Paquet } from './paquet';
@Injectable({
  providedIn: 'root'
})
export class PaquetService {
  private paquetURL="http://localhost:8080/stock";

  constructor(private httpClient: HttpClient) { }
  getPaquetList(): Observable<Paquet[]>{
    return this.httpClient.get<Paquet[]>(`${this.paquetURL}`);
  }
  createPaquet(paquet: Paquet) : Observable<Object>{
    return this.httpClient.post(`${this.paquetURL}`,paquet);
  }
  getPaquetById(id:Number):Observable<Paquet>{
    return this.httpClient.get<Paquet>(`${this.paquetURL}/id/${id}`);
  }
  updatePaquet(id:number, paquet:Paquet){
    return this.httpClient.put(`${this.paquetURL}/${id}`,paquet);
  }
  deletePaquet(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.paquetURL}/${id}`);
  }
  // statistique par type et groupes sanguin
  nombredepaquet(type:string,gs:string){
    return this.httpClient.get<Paquet[]>(`${this.paquetURL}/${type}/${gs}`);
  }
   // statistique par type 
   nombrePaquetsParType(type:string){
    return this.httpClient.get<Paquet[]>(`${this.paquetURL}/${type}`);
  }
  

}
