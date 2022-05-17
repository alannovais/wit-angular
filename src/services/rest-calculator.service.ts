import { Result } from './../app/models/result';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RestCalculatorService {
  url = 'http://localhost:9001/api/';

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getSumValues(a: Number, b: Number): Observable<Result> {
    let params = new HttpParams();
    params = params.append('a', a.toString());
    params = params.append('b', b.toString());
    return this.httpClient
      .get<Result>(`${this.url}sum`, { params: params })
      .pipe(retry(2), catchError(this.handleError));
  }

  getSubValues(a: Number, b: Number): Observable<Result> {
    let params = new HttpParams();
    params = params.append('a', a.toString());
    params = params.append('b', b.toString());
    return this.httpClient
      .get<Result>(`${this.url}sub`, { params: params })
      .pipe(retry(2), catchError(this.handleError));
  }

  getMultValues(a: Number, b: Number): Observable<Result> {
    let params = new HttpParams();
    params = params.append('a', a.toString());
    params = params.append('b', b.toString());
    return this.httpClient
      .get<Result>(`${this.url}mult`, { params: params })
      .pipe(retry(2), catchError(this.handleError));
  }

  getDivValues(a: Number, b: Number): Observable<Result> {
    let params = new HttpParams();
    params = params.append('a', a.toString());
    params = params.append('b', b.toString());
    return this.httpClient
      .get<Result>(`${this.url}div`, { params: params })
      .pipe(retry(2), catchError(this.handleError));
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
