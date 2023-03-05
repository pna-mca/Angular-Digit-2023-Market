import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { productsJSON } from '../../../api/products/products';
import { IProduct } from '../../models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public products: IProduct[] = JSON.parse(productsJSON);
  public  displayedColumns: string[] = ['category', 'brand', 'title', 'description', 'price'];
  public dataSource = new MatTableDataSource<IProduct>(this.products);
}
