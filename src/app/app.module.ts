import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MatDialogModule } from '@angular/material/dialog';

import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; // Importa MatToolbarModule
import { MatIconModule } from '@angular/material/icon';
import {
  MatDrawerContainer,
  MatSidenavModule,
} from '@angular/material/sidenav'; // Importa MatSidenavModule
import { MatListModule } from '@angular/material/list'; // Importa MatListModule
import { MatMenuModule } from '@angular/material/menu'; // Importa MatMenuModule
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatCardTitle, MatCardHeader } from '@angular/material/card';
import { HomeComponent } from './containers/home/home.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PopPupComponent } from './shared/pop-pup/pop-pup.component';
import { HttpConfigInterceptor } from './core/interceptors/http-config.interceptor.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, PopPupComponent],
  imports: [
    BrowserModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDrawerContainer,
    MatMenuModule,
    RouterLink,
    MatCardHeader,
    MatCardTitle,
    MatCardModule,
    MatDialogModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
