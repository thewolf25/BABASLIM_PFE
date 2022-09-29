import { Component, OnInit } from '@angular/core';
import { Product } from 'app/models/product.model';
import { ProductsService } from 'app/services/products.service';

@Component({
  selector: 'jhi-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pizzaStandart:Array<Product> = [] 
  pizzaFamiliale:Array<Product> = [] 
  pizzaMini:Array<Product> = []
  entry:Array<Product> = [] 
  drinks:Array<Product> = [] 
  constructor(private productService: ProductsService) {
   }

  ngOnInit(): void {
    this.pizzaStandart = this.productService.pizzaStandart
    this.pizzaFamiliale = this.productService.pizzaFamiliale
    this.entry= this.productService.entry
    this.drinks = this.productService.drinks
    this.pizzaMini = this.productService.pizzaMini

  }



}


