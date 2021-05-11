import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RootObject } from '../models/quotes.model';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private baseUrl = 'https://quotes.rest';

  constructor(private httpClient: HttpClient) { }

  public getQuote(): Observable<RootObject> {
    var params = new HttpParams();
    params.append('category', 'inspire');
    params.append('language', 'en');

    return this.httpClient.get<RootObject>(
      `${this.baseUrl}/qod`,
      {
        params: params
      });
  }
}
