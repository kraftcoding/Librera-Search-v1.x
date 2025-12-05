import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddLibreraSearchComponent } from './components/add-LibreraSearch/add-LibreraSearch.component';
import { LibreraSearchDetailsComponent } from './components/LibreraSearch-details/LibreraSearch-details.component';
import { LibreraSearchsListComponent } from './components/LibreraSearch-list/LibreraSearch-list.component';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth/auth.interceptor';
import {provideClientHydration} from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Route } from '@angular/router';
import { routes } from './app-routing.module';
import { LibreraTextSearchListComponent } from './components/LibreraSearch-contents/LibreraSearch-contents.component';

@NgModule({
  declarations: [
    AppComponent,
    AddLibreraSearchComponent,
    LibreraSearchDetailsComponent,
    LibreraSearchsListComponent,
    LibreraTextSearchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    {provide: 'APIREQRES', useValue:'http://localhost:5000/api/login'},
    provideClientHydration(),
    provideAnimations(),
    provideRouter(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
