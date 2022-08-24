import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { map, delay, retry } from "rxjs/operators";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  address: string = ''
  phone: string = '+1 '
  email: string = ''
  card_no: string = ''
  card_exp_month: string = ''
  card_exp_year: string = ''
  card_cvv: string = ''
  full_name: string = ''

  url: string = 'https://administrator.goodyellowco.com/api/buyer/checkout'
  uid: string | null = ''

  getUrl: string = 'https://administrator.goodyellowco.com/api/buyer/checkout/brand/info/'
  brands: any = []

  disabled: boolean = false
  outofstock: any = []

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {
    this.uid = this.route.snapshot.paramMap.get('uid')

    await this.getData()
  }

  async getData() {
    await this.http.get(this.getUrl + this.uid + '/' + localStorage.getItem('b_u_id')).pipe(delay(250), retry(4)).toPromise().then((res: any) => {

      if(res.status == 0) {
        this.disabled = true
        Swal.fire({
          text: 'Out Of Stock!',
          html: `<h4>${res.msg}</h4> <h2 class="fw-bold fs-5 text-info">Product</h2> <h5 class="text-danger fs-6">${res.p_name} , ${res.size ?? ''}, ${res.color ?? ''}</h5>`,
          icon: 'error'
        }).then(() => {
          this.router.navigate(['/u/cart'])
        })
      }
      this.brands = res

      this.address = res.ship_addr.address
      this.full_name = res.ship_addr.full_name
      this.phone = res.ship_addr.phone
      this.email = res.ship_addr.email
    });
  }

  checkout() {
    this.disabled = true

    if(localStorage.getItem('b_u_id') != '' && this.uid != '') {
      if(this.address != '' && this.phone != '' && this.email != '' && this.full_name != '') {
        const myheader = new HttpHeaders();
        //myheader.set('Access-Control-Allow-Origin', '*');
        myheader.set('Content-Type', 'application/x-www-form-urlencoded');

        const formData = new FormData();
        formData.append('full_name', this.full_name);
        formData.append('address', this.address);
        formData.append('phone', this.phone);
        formData.append('email', this.email);
        formData.append('card_no', this.card_no);
        formData.append('card_exp_month', this.card_exp_month);
        formData.append('card_exp_year', this.card_exp_year);
        formData.append('card_cvv', this.card_cvv);

        formData.append('user_id', this.uid ?? '');
        formData.append('buyer_id', localStorage.getItem('b_u_id')!);


        this.http.post<any>(this.url, formData, {
          headers: myheader
        }).subscribe(response => {

          if(response.succ) {
            Swal.fire({
              title: 'Success',
              html: "<h4>Your order has been placed successfully.</h4> <p>Order No: " + response.order + "</p>",
              icon: 'success'
            }).then(() => {
              this.router.navigate(['/u/cart'])
            })
          } else {
            Swal.fire({
              title: 'Error!',
              text: response.err,
              icon: 'error'
            })
            this.disabled = false
          }



        }, (err) => {
          Swal.fire({
            title: 'Error!',
            text: err.message,
            icon: 'error'
          })
          this.disabled = false
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Please add your proper shipping details.',
          icon: 'error'
        })
        this.disabled = false
      }

    } else {
      alert('Something is wrong. Please try again later.')
      this.disabled = false
    }

  }

}
