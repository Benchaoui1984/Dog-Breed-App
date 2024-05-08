import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedSearchComponent } from './breed-search..component';
import { BreedDetailComponenet } from './containers/detail/breed-detail.component';
import { detailBreedResolver } from './containers/detail/resolver/purchase-line-form.resolver';

const routes: Routes = [
  {
    path: '',
    component: BreedSearchComponent,
  },
  {
    path: ':breed',
    component: BreedDetailComponenet,
    resolve: { detailBreedResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogBreedRoutingModule {}
