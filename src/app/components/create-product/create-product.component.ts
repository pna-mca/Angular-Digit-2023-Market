import { Component } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  public categories = ['smartphones', 'laptops'];

  public submit(value: any): void {
  }

  public cancel(): void {
  }
}
