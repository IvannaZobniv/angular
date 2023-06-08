import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "../services";
import {inject} from "@angular/core";

export const isAuthGuard: CanActivateFn = (route, state) => {
  const res = !!inject(AuthService).getAccessToken();
  if (!res){
    inject(Router).navigate(['auth','login'])
  }
  return res;
};
