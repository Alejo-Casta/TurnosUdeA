import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public API = 'https://lis.udea.edu.co/api/test/validarusuariooidxcn';

  constructor(
    private http: HttpClient
  ) { }

  login(car: any): Observable<any> {
    let result: Observable<Object>;
    result = this.http.post(this.API, car);
    return result;
  }


}
