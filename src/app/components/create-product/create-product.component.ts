import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  public categories = ['smartphones', 'laptops'];

  public testProperty = 'Test value';

  public constructor(private router: Router) {}

  public submit(value: any): void {

    console.log('create ', value);

    this.router.navigate(['/products']);

  }

  public cancel(): void {
    console.log('cancel');

  }
}
