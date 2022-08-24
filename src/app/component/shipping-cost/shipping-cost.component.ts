import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { range } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shipping-cost',
  templateUrl: './shipping-cost.component.html',
  styleUrls: ['./shipping-cost.component.scss']
})
export class ShippingCostComponent implements OnInit {

  from_numbers: Array<any> = [];
  to_numbers: Array<any> = [];
  shipping_cost: string = '0'

  url: string = 'https://administrator.goodyellowco.com/api/u/vendor/create/product/shipping/cost?token='
  disabled: boolean = false
  token: string | null = localStorage.getItem('token')
  uid: string | null = ''

  shipping_cost_from_quantity: string = ''
  shipping_cost_to_quantity: string = ''

  pid: any;
  data: any = []

  data_url: string = 'https://administrator.goodyellowco.com/api/vendor/create/product/shipping/cost/get/data/'
  delete_url: string = 'https://administrator.goodyellowco.com/api/vendor/create/product/shipping/cost/delete/'

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.from_numbers = Array.from({length:500},(v,k)=>k+1);
    this.to_numbers = Array.from({length:500},(v,k)=>k+1);
  }

  ngOnInit() {
    this.uid = localStorage.getItem('u_id');
    this.pid = this.route.snapshot.paramMap.get('id')

    this.getData()
  }

  getData() {
    this.http.get(this.data_url + this.uid + '/' + this.pid).subscribe(res => {
      this.data = res
    })
  }

  add_more() {

    if(this.shipping_cost_from_quantity != '' && this.shipping_cost_to_quantity != '' && this.shipping_cost != '') {
      this.disabled = true

      const myheader = new HttpHeaders();
      //myheader.set('Access-Control-Allow-Origin', '*');
      myheader.set('Content-Type', 'application/x-www-form-urlencoded');

      const formData = new FormData();
      formData.append('min', this.shipping_cost_from_quantity)
      formData.append('max', this.shipping_cost_to_quantity)
      formData.append('cost', this.shipping_cost)
      formData.append('user_id', this.uid ?? '')
      formData.append('product_id', this.pid)


      this.http.post<any>(this.url + this.token, formData, {
        headers: myheader
      }).subscribe(response => {

         this.disabled = false

         if(response.id) {
          this.getData();
         } else {
          Swal.fire({
            html: `<p>${response.min[0]}</p><p>${response.max[0]}</p><p>${response.cost[0]}</p>`,
            icon: 'error'
          })

         }




      });
    } else {
      Swal.fire({
        text: 'Please choose Min & Max quantity and cost',
        icon: 'warning'
      })
    }
  }

  next() {
    this.router.navigate(['create-product-attributes', this.pid])
  }

  delete(id: number) {
    this.http.get(this.delete_url + id).subscribe(res => {
      this.getData()
    })
  }

}
