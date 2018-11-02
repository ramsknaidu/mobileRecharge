import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MobilePlan } from './mobile-plan';

@Injectable({
  providedIn: 'root'
})
export class MobileRechargeAPIService {

  baseURL = 'http://localhost:3001/';

  constructor(private http: HttpClient) { }

  findAllMobilePlans(): Observable<MobilePlan[]>{
    const adviseURL = `${this.baseURL}mobilePlans`;
    return this.http.get<MobilePlan[]>(adviseURL);
  }
}
