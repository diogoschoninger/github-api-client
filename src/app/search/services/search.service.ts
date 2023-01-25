import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private httpClient: HttpClient) { }

  search(query: string): any {
    return this.httpClient.get(`https://api.github.com/search/repositories?q=${query}`);
  }
}
