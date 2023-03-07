import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productsJSON } from 'src/api/products/products';
import { IProduct } from '../../models';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  public product: IProduct | undefined;
  public products: IProduct[] = JSON.parse(productsJSON);

  public constructor(private route: ActivatedRoute) {

    console.log(route.snapshot.paramMap.get('id'));
    this.product = this.products.find(x => x.id === Number(route.snapshot.paramMap.get('id')));

  }
}
