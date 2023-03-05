import { Component } from '@angular/core';
import { productsJSON } from 'src/api/products/products';
import { IProduct } from '../../models';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  public product?: IProduct;
  public products: IProduct[] = JSON.parse(productsJSON);
}
