import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Donneur } from './donneur';

@Injectable({
  providedIn: 'root'
})
export class DonneursService {

  private apiURL = "http://localhost:8080/donneurs";
  private errorHandler;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Donneur[]> {
    return this.httpClient.get<Donneur[]>(this.apiURL)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  create(donneur): Observable<Donneur> {
    return this.httpClient.post<Donneur>(this.apiURL , JSON.stringify(donneur), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  find(id): Observable<Donneur> {
    return this.httpClient.get<Donneur>(this.apiURL +'/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(id, donneur): Observable<Donneur> {
    return this.httpClient.put<Donneur>(this.apiURL +'/'+ id, JSON.stringify(donneur), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id): Observable<Donneur> {
    return this.httpClient.delete(this.apiURL + '/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
}
