import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailBreedService } from './services/detail-breed.service';
import { LoadingService } from '../../../../core/services/loading.service';

@Component({
  selector: 'app-detail',
  templateUrl: './breed-detail.component.html',
  styleUrl: './breed-detail.component.css',
})
export class BreedDetailComponenet {
  breedName!: any;
  breedImage!: string;
  title: any;

  constructor(
    private dogService: DetailBreedService,
    private route: ActivatedRoute,
    private router: Router,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.breedName = params.get('breed');
      this.getRandomImageByBreed(this.breedName);
    });
  }

  getRandomImageByBreed(breed: string): void {
    this.dogService.getRandomImageByBreed(breed).subscribe((data: any) => {
      this.breedName = data.breed;
      this.breedImage = data.message;
      this.title = data.message.split('/')[4];
      this.loadingService.setMainLoading(false);
    });
  }
  onBack() {
    this.router.navigate(['/dog-breed']);
  }
}
