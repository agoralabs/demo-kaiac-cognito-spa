// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cognitoConfig } from './config-cognito';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = cognitoConfig.apiUrl; // Remplacez par votre URL d'API

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl+"employee/v1/");
  }
}