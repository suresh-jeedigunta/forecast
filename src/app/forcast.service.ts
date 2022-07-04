import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForcastService{

    constructor(private http: HttpClient) { }

    getWeather(lat, lng, apiKey): Observable<any> {
        return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${apiKey}`);
      }    
}
