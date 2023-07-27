import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  getNoticias(): Observable<any>{
    const URL= 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f2ca0ea584ad4120b0a20aa3ed558bd0'

          return this.http.get(URL);
  }
}
