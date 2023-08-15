import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character, Pages } from '@shared/interface/character.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  searchCharacters(query = '', page = 1) {
    const filter = `${environment.baseUrlApi}/character/?name=${query}&page=${page}`
    return this.http.get<Character[]>(filter);
  }

  getDetails(id: number) {
    return this.http.get<Character>(`${environment.baseUrlApi}/character/${id}`);
  }

  getCharacters(page: number): Observable<Pages> {
    const url = `${environment.baseUrlApi}/character/?page=${page}`;
    return this.http.get<Pages>(url);
  }
}
