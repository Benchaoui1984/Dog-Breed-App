import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DogBreedApisService {
  private dogBreedsUrl = 'https://dog.ceo/api/breeds/image/random/5';
  private baseUrl = 'https://dog.ceo/api/';

  constructor(private http: HttpClient) {}

  getAllBreeds(): Observable<{
    status: string;
    breeds: { name: string; index: number }[];
  }> {
    return this.http
      .get<{ message: { [key: string]: string[] }; status: string }>(
        `${this.baseUrl}breeds/list/all`
      )
      .pipe(
        map((response) => {
          const breedsArray: { name: string; index: number }[] = [];
          Object.keys(response.message).forEach((name, index) => {
            breedsArray.push({ name, index });
          });
          return { status: response.status, breeds: breedsArray };
        })
      );
  }
}
