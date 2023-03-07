import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { productsJSON } from "src/api/products/products";
import { IProduct } from "../models";

export const productGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>{
    const id = route.paramMap.get('id');
    const products: IProduct[] = JSON.parse(productsJSON);

    let canLoad = false;
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === Number(id)) {
        canLoad = true;
      }
    }

    if (canLoad === false) {
      inject(Router).navigate(['products']);

      return false;
    }

    return true;
  }
