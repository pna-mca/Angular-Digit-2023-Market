import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/angular-material.module';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';
import { PriceValidatorDirective } from './directives/price-validator.directive';
import { RouterModule } from '@angular/router';
import { productGuard } from './guards/product-guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CreateProductComponent,
    EditProductComponent,
    PriceValidatorDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'products/:id/edit', component: EditProductComponent, canActivate: [productGuard] },
      { path: 'products/create', component: CreateProductComponent },
      { path: 'products/:id', component: ProductDetailsComponent, canActivate: [productGuard] },
      { path: 'products', component: ProductsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
