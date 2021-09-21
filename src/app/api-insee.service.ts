import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from './city';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiInseeService {

  constructor(private http: HttpClient) { }


  public getInsee(zip_code: string): Observable<City[]> {
    return this.http.get<City[]>("https://geo.api.gouv.fr/communes?codePostal="+zip_code+"&fields=nom,code&format=json&geometry=centre")
  }
}
