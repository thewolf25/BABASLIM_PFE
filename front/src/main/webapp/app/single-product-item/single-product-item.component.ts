import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'app/models/product.model';
import { BucketService } from 'app/services/bucket.service';

@Component({
  selector: 'jhi-single-product-item',
  templateUrl: './single-product-item.component.html',
  styleUrls: ['./single-product-item.component.scss']
})
export class SingleProductItemComponent implements OnInit {
  @Input() product!:Product;
  id=0
  constructor(private bucketService:BucketService) { 
    this.id=1
    console.log(this.product)
  }

  ngOnInit(): void {
    this.id=1
  }
  addToBucket():void{
    this.bucketService.addOrder(this.product)
  }

  getImage():string{
    if(this.product.image !== ""){
      console.log(this.product.image)
      return `url(../../content/images/${this.product.image} )`
    }
    else{
      return `url(../../content/images/orangina.png)`
    }
  }

}
