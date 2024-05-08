import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';

export const routes: Routes = [
  {
    path: 'dog-breed',
    loadChildren: () =>
      import('./containers/breed-search/breed-search..module').then(
        (m) => m.DogBreedModule
      ),
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
