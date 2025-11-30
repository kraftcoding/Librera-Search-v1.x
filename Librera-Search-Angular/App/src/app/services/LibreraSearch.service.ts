import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LibreraSearch } from '../models/LibreraSearch.model';

const baseUrl = 'http://localhost:5000/api/LibreraSearch';

@Injectable({
  providedIn: 'root',
})

export class LibreraSearchService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<LibreraSearch[]> {
    return this.http.get<LibreraSearch[]>(baseUrl);
  }

  get(id: any): Observable<LibreraSearch> {
    return this.http.get<LibreraSearch>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<LibreraSearch[]> {
    return this.http.get<LibreraSearch[]>(`${baseUrl}/title?title=${title}`);
  }
}
