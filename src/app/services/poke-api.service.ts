import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  poke = [];
  url = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getList() {
  return this.http.get(this.url+`?limit=100000&offset=0`);
  }

  getData(name: string) {
    return this.http.get(this.url+`/${name}`)
  }
}
