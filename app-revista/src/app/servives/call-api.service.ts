import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  constructor(private http: HttpClient) { }

  googleSearch(param){
    return this.http.get(environment.apiUrl+'googleScholar/'+param);
  }

  universidades(param){
    return this.http.get(environment.apiUrl+'universidades/'+param);
  }
}
