import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Fertilizer } from './fertilizer';

@Injectable({
  providedIn: 'root'
})
export class FertilizerService {

  private apiServerUrl = environment.urlBackEnd;

  constructor(private http: HttpClient) { }

  public getFertilizer(insee: string):Observable<Fertilizer[]> {
    return this.http.get<Fertilizer[]>(this.apiServerUrl+'fertilizer/'+insee);

  }

}
