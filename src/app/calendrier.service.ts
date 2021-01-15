import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Calendrier } from './calendrier';

@Injectable({
  providedIn: 'root'
})
export class CalendrierService {
  private calendrierURL="http://localhost:8080/calendriers";
  constructor(private httpClient: HttpClient) {}

  createReservation(Calendreir:Calendrier) : Observable<Object>{
    return this.httpClient.post(`${this.calendrierURL}`,Calendreir)
  }
}
