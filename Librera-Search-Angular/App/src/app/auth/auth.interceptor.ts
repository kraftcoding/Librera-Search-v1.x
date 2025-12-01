/*import { HttpInterceptorFn } from "@angular/common/http";
import { Inject, inject, Injector } from "@angular/core";
import { tap } from "rxjs";
import { AuthService } from "./auth.service";

export const authInterceptor: HttpInterceptorFn = (req, next) => {  
  
  console.log('request', req.method, req.url);
 
  if (req.url.startsWith(inject(AuthService).Apiurl)) {    
    const authService=inject(AuthService)
    const authToken = authService.getToken();    
    console.log("Token in interceptor: ", authToken);
    // Setting a dummy token for demonstration
    const headers = req.headers.set('Authorization', `Bearer ${authToken}`);
    req = req.clone({headers});
  }
 
  return next(req).pipe(
    tap(resp => console.log('response', resp))
  );
}*/

import { HttpInterceptorFn } from "@angular/common/http";
import { Inject, inject, Injector } from "@angular/core";
import { tap } from "rxjs";
import { AuthService } from "./auth.service";

export const authInterceptor: HttpInterceptorFn = (req, next) => {  
  
 console.log('request', req.method, req.url);
 
 const token = localStorage.getItem('access_token');
    if (token) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next(authReq);
    } else { 
      return next(req);
    }    
}