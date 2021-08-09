import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  apiUrl = "https://bencini.familyds.com/alessandro-bencini_api/api/works/";

  constructor(private http: HttpClient) {}

  getWorks() {
    return this.http.get(this.apiUrl);
  }

  getSingleWork(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
