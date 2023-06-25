import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

  listAll() {
    return this.http
      .get(`${this.url}/clientes/listarClientes`, {
        observe: 'response',
      })
      .pipe(
        map((response: HttpResponse<any>) => {
          const data = response.body;
          return data;
        })
      );
  }

  listarProductos(){
    return this.http
      .get(`${this.url}/productos/listarProductos`, {
        observe: 'response',
      })
      .pipe(
        map((response: HttpResponse<any>) => {
          const data = response.body;
          return data;
        })
      );
  }
}
