import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { productsJSON } from "src/api/products/products";
import { IProduct, ProductRequest } from "src/app/models";
import { CustomValidators } from "src/app/validators/custom-validators";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  public categories = ['smartphones', 'laptops'];
  public product?: IProduct;
  public testFormGrupa: FormGroup;
  public products: IProduct[] = JSON.parse(productsJSON);

  public constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
    const id = route.snapshot.paramMap.get('id');
    this.product = this.products.find(x => x.id === Number(id));

    this.testFormGrupa = this.formBuilder.group({
      title: [this.product?.title, [Validators.required]],
      description: [this.product?.description, [Validators.maxLength(500)]],
      brand: [this.product?.brand, []],
      category: [this.product?.category, []],
      price: [this.product?.price, [CustomValidators.priceValidator, Validators.required]]
    });
  }

  public submit(): void {

    console.log('create ', this.testFormGrupa.value);

    this.router.navigate(['/products']);
  }

  public cancel(): void {
    console.log('cancel');

    this.testFormGrupa.addControl
  }

}
