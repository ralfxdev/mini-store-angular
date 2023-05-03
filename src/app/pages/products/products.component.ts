import { Component, inject } from '@angular/core';
import { ProductComponent } from 'src/app/components/product/product.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product.model';


@Component({
  standalone: true,
  imports: [ProductComponent, CommonModule, NgOptimizedImage],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  http = inject(HttpClient);
  products: Product[] = [];


  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.products = data;
      });
  }

}
