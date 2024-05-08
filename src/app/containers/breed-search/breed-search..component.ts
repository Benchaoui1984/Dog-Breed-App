import { Component, OnInit } from '@angular/core';

import { DogBreedApisService } from './services/dog-breed-apis.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Breed } from './models/breed.mode';
import {
  BehaviorSubject,
  Observable,
  Subject,
  filter,
  merge,
  takeUntil,
  tap,
} from 'rxjs';
import { TableConfig } from '../../shared/table/models/table-config.model';
import { TableColumn } from '../../shared/table/models/table-column.model';
import { TableAction } from '../../shared/table/models/table-action.model';
import { TABLE_ACTION } from '../../shared/table/enums/table-action.enum';
import { LoadingService } from '../../core/services/loading.service';

@Component({
  selector: 'app-customers',
  templateUrl: './breed-search.component.html',
  styleUrls: ['./breed-search..component.scss'],
})
export class BreedSearchComponent implements OnInit {
  tableColumns: TableColumn[] = [];
  tableConfig: TableConfig = {
    isSelectable: false,
    isPaginable: true,
    showActions: true,
    showFilter: true,
  };

  private destroySubject = new Subject<void>();
  private dataSubject = new BehaviorSubject<any>([]);
  tableData$: Observable<any> | undefined;
  loading: boolean = false;
  breedDogsList: any;

  constructor(
    private dogBreedApisService: DogBreedApisService,
    private route: ActivatedRoute,
    private router: Router,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.setTableColumns();

    this.tableData$ = this.dataSubject.asObservable();

    merge(this.onGetAllBreeds())
      .pipe(takeUntil(this.destroySubject))
      .subscribe();
  }

  onSelect(data: any) {
    console.log(data);
  }

  onTableAction(tableAction: TableAction) {
    switch (tableAction.action) {
      case TABLE_ACTION.VIEW:
        this.onView(tableAction.row);
        break;
    }
  }

  onView(breed: Breed) {
    this.router.navigate([breed.name], {
      relativeTo: this.route,
    });
  }

  private onGetAllBreeds(): Observable<any> {
    return this.dogBreedApisService.getAllBreeds().pipe(
      filter((data) => data.breeds.length > 0),
      tap((data) => this.dataSubject.next(data.breeds)),
      tap(() => this.loadingService.setMainLoading(false))
    );
  }

  private setTableColumns() {
    this.tableColumns = [
      { label: 'Index', def: 'index', dataKey: 'index' },
      { label: 'Name', def: 'name', dataKey: 'name' },
    ];
  }
}
