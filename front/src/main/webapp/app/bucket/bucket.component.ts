import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BucketService } from 'app/services/bucket.service';
@Component({
  selector: 'jhi-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss']
})
export class BucketComponent implements OnInit {
  // private nbr_orders;
  // private order_list;
  bucketItems:any
  shipping = 7;
  taxes = 0.06;
  checkoutForm = new FormGroup({
    name: new FormControl(
      '',
      [
        Validators.required,
      ]

    ),
    email: new FormControl(
      '',
      [Validators.required,
      Validators.email]
    ),
    telephone: new FormControl(
      '',
      [Validators.required]

    ),
    address: new FormControl(
      '', [Validators.required]
    )
  });

  constructor(private bucketService: BucketService) {
    // render(
    //   {
    //     id: "#myPaypalButtons",
    //     currency: "USD",
    //     value: "100.00",
    //     onApprove: (details)=>{
    //       alert("transaction success");
    //     }
    //   }
    //   );
  }

  validateForm(): void {
    if (this.checkoutForm.valid){
      this.bucketService.validateCommand(this.checkoutForm.value).subscribe((s: any) => {
        console.log(s)
      },
        (err: any) => {
          console.log(err)
        }
      )
  }

  }
  add_orders(e: any) :void{
    this.bucketService.addOrder(e);
  }

  delete_orders(e: any):void {
    this.bucketService.deleteBucket(e)
  }

  // update_orders(id: any): void {

  // }

  getProducts(): any {
    this.bucketItems = this.bucketService.getProducts()
    console.log(this.bucketItems)
    return this.bucketItems
  };
  minusQuantity(id: number): void {
    this.bucketService.changeQuantity(id, -1);
  }

  plusQuantity(id: any): void {
    this.bucketService.changeQuantity(id, 1);

  }

  getTotalPrice(): any {
    return this.bucketService.getPrice();
  }


  parsePrice(price: number): any {
    return this.bucketService.parsePrice(price)
  }

  // getPricePerItem():number{
  //     return 
  // }

  getTotalPriceSaled(): any {
    const price = this.getTotalPrice();
    return ( Number(price) + this.shipping + (price * this.taxes))
  }

  ngOnInit(): void {
    console.log(1)
  }


}
