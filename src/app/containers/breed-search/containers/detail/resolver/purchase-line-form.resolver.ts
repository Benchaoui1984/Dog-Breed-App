import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailBreedService } from '../services/detail-breed.service';

@Injectable({ providedIn: 'root' })
export class detailBreedResolver implements Resolve<any> {
  constructor(private detailBreedService: DetailBreedService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.detailBreedService.getRandomImageByBreed(route.params['breed']);
  }
}
