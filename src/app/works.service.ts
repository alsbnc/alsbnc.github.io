import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WorksService {
  apiUrl = 'https://alessandro-bencini.herokuapp.com/api/works';
  //apiUrl = 'http://localhost:3000/api/works';

  constructor(private http: HttpClient) {}

  getWorks() {
    return this.http.get(this.apiUrl);
  }

  getSingleWork(_id: string) {
    return this.http.get(`${this.apiUrl}/${_id}`);
  }
}
