import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character, Pages } from '@shared/interface/character.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  searchLocations(query = '', page = 1) {
    const filter = `${environment.baseUrlApi}/location/?name=${query}&page=${page}`
    return this.http.get<Location[]>(filter);
  }

  getDetails(id: number) {
    return this.http.get<Location>(`${environment.baseUrlApi}/location/${id}`);
  }

  getCharacters(page: number): Observable<Pages> {
    const url = `${environment.baseUrlApi}/location/?page=${page}`;
    return this.http.get<Pages>(url);
  }
}
