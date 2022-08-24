import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  @Output() fireIsLoggedIn: EventEmitter<any> = new EventEmitter<any>();
  url: string = 'https://administrator.goodyellowco.com/api/vendor/signin'
  signup_url: string = 'https://administrator.goodyellowco.com/api/vendor/signup'

  buyerUrl: string = 'https://administrator.goodyellowco.com/api/buyer/signin'
  buyerSignupUrl: string = 'https://administrator.goodyellowco.com/api/buyer/signup'

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  // …
  loginUser(username: string, password: string) {
    // first logging out buyer login
    localStorage.clear()
    // send event emit
    var customData = {}
    this.fireIsLoggedIn.emit(customData);
    // end brand login out

    const myheader = new HttpHeaders();
    //myheader.set('Access-Control-Allow-Origin', '*');
    myheader.set('Content-Type', 'application/x-www-form-urlencoded');

    const formData = new FormData();
    formData.append('email', username);
    formData.append('password', password);

     this.http.post<any>(this.url, formData, {
      headers: myheader
    }).subscribe(response => {
      if(response.data) {
        localStorage.setItem("token", response.data[0].remember_token)
        localStorage.setItem("email", response.data[0].email);
        localStorage.setItem("company", response.data[0].company);
        localStorage.setItem("u_id", response.data[0].id);

        // send event emit
        var customData = {
          'token': response.data[0].remember_token,
          'company': response.data[0].company
        }
        this.fireIsLoggedIn.emit(customData);

        //localStorage.setItem("goodyellow_step", '2');

        //this.router.navigate(['vendor-signup-create-leaderboard'])
        let step: string | null = localStorage.getItem('goodyellow_step')
        if(step) {
          this.router.navigate(['vendor-step-' + step])
          //window.location.href = '/#/vendor-step-' + step
        } else {
          this.router.navigate(['vendor-storefront'])
          //window.location.href = '/#/vendor-storefront'
        }
      } else {
        Swal.fire({
          text: 'Please check your email or password.',
          icon: 'error'
        })
      }


    });
  }

  getEmitter() {
    return this.fireIsLoggedIn;
  }

  logout() {
    localStorage.clear()
    // send event emit
      var customData = {}
      this.fireIsLoggedIn.emit(customData);
      this.router.navigate(['login'])
  }

  windowLoad() {
    let token = localStorage.getItem("token")
    let comp =  localStorage.getItem("company");

    let customData = {}

    if(token) {
       customData = {
        'token': token,
        'company': comp
      }
    }
      console.log(customData)
      this.fireIsLoggedIn.emit(customData);
  }

  registerUser(fname: string,lname: string,email: string,c_pass: string,company: string) {

    // first logging out buyer login
    localStorage.clear()
    // send event emit
    var customData = {}
    this.fireIsLoggedIn.emit(customData);
    // end brand login out

    const myheader = new HttpHeaders();
      //myheader.set('Access-Control-Allow-Origin', '*');
      myheader.set('Content-Type', 'application/x-www-form-urlencoded');

      const formData = new FormData();
      formData.append('name', fname +  ' ' + lname);
      formData.append('email', email);
      formData.append('password', c_pass);
      formData.append('company', company);

      this.http.post<any>(this.signup_url, formData, {
        headers: myheader
      }).subscribe(response => {

        if(response[0].id) {
          localStorage.setItem("token", response[0].token)
          localStorage.setItem("email", response[0].email);
          localStorage.setItem("company", response[0].company);
          localStorage.setItem("u_id", response[0].id);

          // send event emit
        var customData = {
          'token': response[0].token,
          'company': response[0].company
        }
        this.fireIsLoggedIn.emit(customData);


          this.router.navigate(['vendor-signup-create-leaderboard'])
        } else {
          Swal.fire({
            text: response[0].msg,
            icon: 'error'
          })
        }


      });
  }

  //--------------------- Buyer Auth -------------------------//

  registerBuyerUser(fname: string,lname: string,email: string,c_pass: string,street: string, city: string, state: string, zip: string, phone: string, promo: string) {

    // first logging out buyer login
    localStorage.clear()
    // send event emit
    var customData = {}
    this.fireIsLoggedIn.emit(customData);
    // end brand login out

    const myheader = new HttpHeaders();
      //myheader.set('Access-Control-Allow-Origin', '*');
      myheader.set('Content-Type', 'application/x-www-form-urlencoded');

      const formData = new FormData();
      formData.append('fname', fname);
      formData.append('lname', lname);
      formData.append('email', email);
      formData.append('password', c_pass);
      formData.append('street', street);
      formData.append('city', city);
      formData.append('state', state);
      formData.append('zip', zip);
      formData.append('phone', phone);
      formData.append('promo', promo);

      this.http.post<any>(this.buyerSignupUrl, formData, {
        headers: myheader
      }).subscribe(response => {


        if(response.id) {
          localStorage.setItem("b_token", response.token)
          localStorage.setItem("b_email", response.email);
          localStorage.setItem("b_u_id", response.id);

          // send event emit
          var customData = {
            'buyer_token': response.token,
          }
          this.fireIsLoggedIn.emit(customData);

          this.router.navigate(['/u'])
        } else if(response.err) {
          Swal.fire({
            text: response.err,
            icon: 'error'
          })
        } else {
          Swal.fire({
          title: 'Please correct below error.',
          color: 'red',
          html: `<p>${response.fname ? response.fname[0] : ''}</p> <p>${response.lname ? response.lname[0] : ''}</p> <p>${response.email ? response.email[0] : ''}</p> <p>${response.password ? response.password[0] : ''}</p> <p>${response.street ? response.street[0] : ''}</p> <p>${response.city ? response.city[0] : ''}</p> <p>${response.state ? response.state[0] : ''}</p> <p>${response.zip ? response.zip[0] : ''}</p> <p>${response.phone ? response.phone[0] : ''}</p>`,

        })
        }


      });
  }

  loginBuyerUser(username: string, password: string) {
    // first logging out brand login
    localStorage.clear()
    // send event emit
    var customData = {}
    this.fireIsLoggedIn.emit(customData);
    // end brand login out


    const myheader = new HttpHeaders();
    //myheader.set('Access-Control-Allow-Origin', '*');
    myheader.set('Content-Type', 'application/x-www-form-urlencoded');

    const formData = new FormData();
    formData.append('email', username);
    formData.append('password', password);

     this.http.post<any>(this.buyerUrl, formData, {
      headers: myheader
    }).subscribe(response => {
      if(response.data) {
        localStorage.setItem("b_token", response.data[0].token)
        localStorage.setItem("b_email", response.data[0].email);
        localStorage.setItem("b_u_id", response.data[0].id);

        // send event emit
        var customData = {
          'buyer_token': response.data[0].token,
        }
        this.fireIsLoggedIn.emit(customData);

        this.router.navigate(['/u'])

      } else {
        Swal.fire({
          text: 'Please check your email or password.',
          icon: 'error'
        })
      }


    });
  }

  logoutBuyer() {
    localStorage.clear()
    // send event emit
      var customData = {}
      this.fireIsLoggedIn.emit(customData);
      this.router.navigate(['/u/login'])
  }
}
