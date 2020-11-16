import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

import { baseURL } from '../shared/baseurl'
import { Sede } from '../shared/sede'

@Injectable({
  providedIn: 'root'
})
export class SedeService {

  public URL = `${baseURL}/list`;

  constructor(private http: HttpClient) { }

  getSedes(): Observable<Sede[]> {
    return this.http.get<Sede[]>(this.URL).pipe(
      map((res) => {
        return res['sedes'];
      }),catchError(error => error));
  }
  
}
