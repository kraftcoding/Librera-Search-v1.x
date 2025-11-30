import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibreraSearchsListComponent } from './components/LibreraSearch-list/LibreraSearch-list.component';
import { LibreraSearchDetailsComponent } from './components/LibreraSearch-details/LibreraSearch-details.component';
import { AddLibreraSearchComponent } from './components/add-LibreraSearch/add-LibreraSearch.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { AuthService } from './auth/auth.service';
import { inject } from '@angular/core';

export const routes: Routes = [
  { path: '',  component: LoginComponent   },
  { path: 'LibreraSearch', component: LibreraSearchsListComponent,
    canActivate: [
          () => inject(AuthService).isLoggedIn
        ]
   },
  { path: 'LibreraSearch/:id', component: LibreraSearchDetailsComponent,
    canActivate: [
          () => inject(AuthService).isLoggedIn
        ]
   },
  { path: 'add', component: AddLibreraSearchComponent,
    canActivate: [
          () => inject(AuthService).isLoggedIn
        ]
   },   
  { path: 'login',
        component: LoginComponent,        
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
