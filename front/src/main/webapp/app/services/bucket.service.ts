

import { HttpClient, HttpRequest } from '@angular/common/http';
import { ArrayType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { empty } from 'rxjs';
import *  as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class BucketService {
  buckets: any
  order = {
    custmer: {

    },
    ordrer: {}

  }
  constructor(private http: HttpClient) { }
  loadBucket(): void {
    const bucket = JSON.parse(localStorage.getItem('bucket')!);
    if (bucket !== undefined && bucket !== null) {
      this.buckets = bucket;
    }
    else {
      this.buckets = [];
    }
  }

  getProducts(): any {
    this.loadBucket();
    return this.buckets;
  }

  addOrder(a: any): void {
    this.loadBucket();
    const orderItem: any = a;
    let changed = false;
    if (this.buckets.length > 0) {

      this.buckets.forEach((b: any) => {
        if (a.id === b.id) {
          b.quantity = Number(b.quantity) + 1
          changed = true;
        }
      });
      if (!changed) {
        orderItem.quantity = 1
        this.buckets.push(orderItem)
      }
    }
    else {
      orderItem.quantity = 1
      this.buckets.push(orderItem)
    }


    
    this.saveBucket();


  }

  saveBucket(): void {
    localStorage.setItem('bucket', JSON.stringify(this.buckets));
  }
  deleteBucket(e: any): void {
    this.loadBucket();
    this.buckets = this.buckets.filter(function (value: any) {
      return value.id !== e.id;
    });
    this.saveBucket()
  }

  getPrice(): number {
    this.loadBucket();
    let price = 0
    this.buckets.forEach((p: any) => {
      price += p.price * p.quantity;
    });

    console.log(`Total Price ${parseFloat(price.toFixed(3))}`)
    return parseFloat(price.toFixed(3));
  }


  getNbrProduct(): any {
    this.loadBucket()
    return this.buckets.length
  }


  changeQuantity = (id: number, nbr: number): void => {
    this.loadBucket();
    this.buckets.forEach((b: any) => {
      if (id === b.id) {
        b.quantity += nbr
        if (b.quantity === 0) {
          this.deleteBucket(b);
        }
      }
    });
    this.saveBucket();
  }

  parsePrice(price: number): number {
    return parseFloat(price.toFixed(3))
  }

  validateCommand(o: any): any {
    this.loadBucket();
    console.log(this.buckets)
    o.orders = this.buckets.map((s: any) => _.pick(s, ["id", "title", "description", "price"]))
    console.log(o)

    return this.http.post('/order/command', o);
    // const req = new HttpRequest('POST', +"/products/"+product, formData, {
    //   reportProgress: true,
    //   responseType: 'json'
    // });

    // return this.http.request(req);
    // // this.http.post()

  }

}
