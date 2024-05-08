import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogBreedRoutingModule } from './breed-search.-routing.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { UiInputModule } from '../../shared/components/ui-input/ui-input.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BreedSearchComponent } from './breed-search..component';
import { BreedDetailComponenet } from './containers/detail/breed-detail.component';
import { TableModule } from '../../shared/table/table.module';

@NgModule({
  declarations: [BreedSearchComponent, BreedDetailComponenet],
  imports: [
    CommonModule,
    DogBreedRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    TableModule,
    HttpClientModule,
    MatCardModule,
    MatProgressBarModule,
    FormsModule,
  ],
})
export class DogBreedModule {}
