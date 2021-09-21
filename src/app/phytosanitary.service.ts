import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Phytosanitary } from './phytosanitary';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhytosanitaryService {

  private apiServerUrl = environment.urlBackEnd;

  constructor(private http: HttpClient) { }


  public getPhytosanitary(insee: string):Observable<Phytosanitary[]> {
    return this.http.get<Phytosanitary[]>(this.apiServerUrl+'phytosanitary/'+insee);

  }
}
