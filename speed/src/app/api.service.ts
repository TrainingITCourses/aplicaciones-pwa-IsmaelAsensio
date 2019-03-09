import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private url = environment.apiUrl + 'pub/items';

  constructor(private http: HttpClient) { }

  postLaunch$ = launch => this.http.post(this.url, launch);
  getLaunch$ = launchId => this.http.get(this.url + '/' + launchId);
}
