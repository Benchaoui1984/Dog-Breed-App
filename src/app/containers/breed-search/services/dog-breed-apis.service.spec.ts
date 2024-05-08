import { TestBed } from '@angular/core/testing';
import { DogBreedApisService } from './dog-breed-apis.service';
import { HttpClientModule } from '@angular/common/http';

describe('DogBreedApisService', () => {
  let service: DogBreedApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(DogBreedApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('BreedSearchComponent deberia retornar el valor de la API en forma de Observable', (done: DoneFn) => {
    service.getAllBreeds().subscribe((value) => {
      expect(value.breeds.length).toBe(98);
      done();
    });
  });
});
