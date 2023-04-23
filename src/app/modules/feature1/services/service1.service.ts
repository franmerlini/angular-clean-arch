import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Service1Service {
  private readonly apiUrl = 'https://some-api.com/api';
  private readonly http = inject(HttpClient);

  public get(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
