import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services';

@Component({
  selector: 'app-product-container',
  template: `
    <p>
      product works!
    </p>
  `,

})
export class ProductContainer implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts();
  }

}
