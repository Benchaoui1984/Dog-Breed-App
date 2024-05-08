import { Component } from '@angular/core';
import { Observable, Subject, filter, merge, takeUntil, tap } from 'rxjs';
import { LoadingService } from './core/services/loading.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopPupComponent } from './shared/pop-pup/pop-pup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  closepopup() {
    throw new Error('Method not implemented.');
  }
  loading$!: Observable<boolean>;
  title = 'fronend-dog-app';
  private destroySubject = new Subject<void>();

  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    this.loading$ = this.loadingService.mainLoading;
  }

  ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
}
