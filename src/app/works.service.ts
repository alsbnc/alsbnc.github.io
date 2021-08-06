import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  apiUrl = "https://bencini.familyds.com/alessandro-bencini_api/api/post/";

  constructor(private http: HttpClient) {}

  getWorks() {
    return this.http.get(`${this.apiUrl}read.php`);
  }

  getSingleWork(id: string) {
    return this.http.get(`${this.apiUrl}read_single.php?id=${id}`);
  }
}
