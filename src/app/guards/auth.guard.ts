import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate} from '@angular/router'; 
import { CanDeactivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate , CanDeactivate {
  component: Object;
  route: ActivatedRouteSnapshot;

  //this.authService.isLoggedIn();
  canActivate(){
    return true;
  }
  
  canDeactivate()
  {
    return true;
  }
}
