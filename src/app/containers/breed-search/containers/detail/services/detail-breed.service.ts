import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailBreedService {
  private baseUrl = 'https://dog.ceo/api/';

  constructor(private http: HttpClient) {}

  getRandomImageByBreed(breed: string): Observable<any> {
    return this.http
      .get<{ breed: string; image: string }>(
        `${this.baseUrl}breed/${breed}/images/random`
      )
      .pipe(map((response) => response));
  }
}
