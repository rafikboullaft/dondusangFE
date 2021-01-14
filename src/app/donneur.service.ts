import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Donneur } from './donneur';

@Injectable({
  providedIn: 'root'
})
export class DonneurService {
  private donneurURL="http://localhost:8080/donneurs";

  constructor(private httpClient: HttpClient) { }

  getDonneurList(): Observable<Donneur[]>{
    return this.httpClient.get<Donneur[]>(`${this.donneurURL}`);
  }
  rechercheDonneur(si7ati:string){
    return this.httpClient.get<Donneur>(`${this.donneurURL}/cin/${si7ati}`);
  }
}
