import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BucketService } from 'app/services/bucket.service';
import { ProductsService } from 'app/services/products.service';

@Component({
  selector: 'jhi-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  product!:any;
  quantity = 1;
  subscription!:any
  private id;

  constructor(private route:ActivatedRoute, private productService:ProductsService,private bucketService:BucketService) { 
    this.id = this.route.snapshot.params.id;
  
  }
  ngOnDestroy(): void {

    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    // this.subscription = this.productService.getSingleProduct(this.id).subscribe(
    //   (s:any)=>{
    //     this.product = s;
    //     console.log(this.product)
  
    //   }
    // );


    this.product = this.productService.getSingleProduct(this.id);
    console.log(this.product)
  }
  addToBucket(product:any):void{
    product.count = this.quantity;
    this.bucketService.addOrder(product);
}
  minusQuantity():void{
    if(this.quantity !== 1){
      this.quantity--;  
    }
  }


  
  parsePrice(price:number ):any{
    if(price !== undefined ){
      return parseFloat( price.toFixed(3) )

    }
  }


  plusQuantity():void{
    this.quantity++;
  }





}
