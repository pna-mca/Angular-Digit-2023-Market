import { Component } from "@angular/core";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  public categories = ['smartphones', 'laptops'];

  public submit(): void {
  }

  public cancel(): void {
  }

}
