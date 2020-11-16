import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public API = 'https://lis.udea.edu.co/api/test/validarusuariooidxcn';
  // public API2 = 'http://localhost/api/list';

  constructor(
    private http: HttpClient,
  ) { }

  login(usuario: any): Observable<any> {
    return this.http.post(this.API, usuario)
      .pipe(catchError(error => error));
  }

  setCookies(data: any){
  }
}
