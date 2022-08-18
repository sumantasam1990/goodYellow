import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  url: string = 'https://administrator.goodyellowco.com/api/level/leaderboard/post';
  urlcause: string = 'https://administrator.goodyellowco.com/api/u/vendor/signup/add/cause?token=';
  urlplanets: string = 'https://administrator.goodyellowco.com/api/u/vendor/signup/add/planets?token=';
  urlpeoples: string = 'https://administrator.goodyellowco.com/api/u/vendor/signup/add/peoples?token=';
  category: string = '';
  uid: string | null = ''
  token: string | null = localStorage.getItem('token')
  categories: any = []
  causes: any = []
  cause: string = ''
  goodPlanet: string = ''
  planets: any = []
  people: string = ''
  peoples: any = []

  categoriesDrop: any = []
  causesDrop: any = []
  planetDrop: any = []
  peopleDrop: any = []

  b_lb_one: string = ''
  b_lb_two: string = ''
  b_lb_three: string = ''

  oneUrl: string = 'https://administrator.goodyellowco.com/api/level/one/'
  twoUrl: string = 'https://administrator.goodyellowco.com/api/level/two/'
  threeUrl: string = 'https://administrator.goodyellowco.com/api/level/three/'
  lbListUrl: string = 'https://administrator.goodyellowco.com/api/level/four/leaderboard/list/'

  dataOne: any = []
  dataTwo: any = []
  dataThree: any = []
  dataLbList: any = []

  threePostAddUrl: string = 'https://administrator.goodyellowco.com/api/level/three/post'
  twoPostAddUrl: string = 'https://administrator.goodyellowco.com/api/level/two/post'


  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  async ngOnInit() {
    this.uid = localStorage.getItem('u_id')

    this.http.get(this.oneUrl + '4').subscribe(res => {
      this.dataOne = res
    });

    await this.getCategories()
    //await this.getCauses()
    //await this.getPlanets()
    //await this.getPeoples()
    //await this.dropdownCategory()
    // await this.dropdownCauses()
    // await this.dropdownPlanet()
    // await this.dropdownPeople()

  }


  select_changeOne() {
    if(this.b_lb_one == 'new_00_one') {
      this.dataTwo = []
      let data = prompt("New Level One", "");
      if (data != null) {

        this.b_lb_one = data
        //this.add_cate()
        this.b_lb_one = ''
      }
    } else {
      this.http.get(this.twoUrl + this.b_lb_one).subscribe(res => {
        this.dataTwo = res
      });
    }
  }

  select_changeTwo() {
    if(this.b_lb_two == 'new_00_two') {
      this.dataThree = []
      let data = prompt("New Level Two", "");
      if (data != null) {

        this.b_lb_two = data
        this.add_cate(2)
        this.b_lb_two = ''
      }
    } else {
      this.http.get(this.threeUrl + this.b_lb_two + '/' + '4').subscribe(res => {
        this.dataThree = res
      });
    }
  }

  select_changeThree() {
    if(this.b_lb_three == 'new_00_three') {
      this.categoriesDrop = []
      let data = prompt("New Level Three", "");
      if (data != null) {

        this.b_lb_three = data
        this.add_cate(3)
        //this.b_lb_three = ''
      }
    } else {
      this.http.get(this.lbListUrl + this.b_lb_three).subscribe(res => {
        this.categoriesDrop = res
      });
    }
  }



  // async dropdownCategory() {
  //   await this.http.get('https://administrator.goodyellowco.com/api/u/vendor/leaderboard/dropdown/Brand?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then(res => {
  //     this.categoriesDrop = res
  //   });
  // }

  // async dropdownCauses() {
  //   await this.http.get('https://administrator.goodyellowco.com/api/u/vendor/leaderboard/dropdown/Causes?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then(res => {
  //     this.causesDrop = res
  //   });
  // }

  // async dropdownPlanet() {
  //   await this.http.get('https://administrator.goodyellowco.com/api/u/vendor/leaderboard/dropdown/Good for planet?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then(res => {
  //     this.planetDrop = res
  //   });
  // }

  // async dropdownPeople() {
  //   await this.http.get('https://administrator.goodyellowco.com/api/u/vendor/leaderboard/dropdown/Good for people?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then(res => {
  //     this.peopleDrop = res
  //   });
  // }

  async getCategories() {
    await this.http.get('https://administrator.goodyellowco.com/api/u/vendor/peoples/' + localStorage.getItem('u_id') + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then(res => {
      this.categories = res
    });
  }

  // async getCauses() {
  //   await this.http.get('https://administrator.goodyellowco.com/api/u/vendor/cause/' + localStorage.getItem('u_id') + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then(res => {
  //     this.causes = res
  //   });
  // }

  // async getPlanets() {
  //   await this.http.get('https://administrator.goodyellowco.com/api/u/vendor/planets/' + localStorage.getItem('u_id') + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then(res => {
  //     this.planets = res
  //   });
  // }

  // async getPeoples() {
  //   await this.http.get('https://administrator.goodyellowco.com/api/u/vendor/peoples/' + localStorage.getItem('u_id') + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then(res => {
  //     this.peoples = res
  //   });
  // }

  // Start insert --------------------------------------------------------
  add_cate(status: number = 0) {
    if(status === 0) {
      if(this.b_lb_three == '' || this.b_lb_three == ' ') {
        alert("Please choose Level three.")
      } else {
        const myheader = new HttpHeaders();
        //myheader.set('Access-Control-Allow-Origin', '*');
        myheader.set('Content-Type', 'application/x-www-form-urlencoded');

        const formData = new FormData();
        formData.append('slug', this.category)
        formData.append('user_id', this.uid ?? '')
        formData.append('category', 'Brand')
        formData.append('three_id', this.b_lb_three)


        this.http.post<any>(this.url, formData, {
          headers: myheader
        }).subscribe(response => {
          if(response.id) {
            this.getCategories()
          }
        });
      }
    } else {
      if(this.b_lb_three == '' || this.b_lb_three == ' ') {
        alert("Please choose Level three.")
      } else {
        const myheader = new HttpHeaders();
        //myheader.set('Access-Control-Allow-Origin', '*');
        myheader.set('Content-Type', 'application/x-www-form-urlencoded');

        const formData = new FormData();
        if(status === 3) {
          formData.append('status', 'three')
          formData.append('lb_name', this.b_lb_three)
          formData.append('category_id', this.b_lb_two)
          formData.append('user_id', this.uid ?? '')
          formData.append('category_id_main', '4')
        }

        if(status === 2) {
          formData.append('status', 'two')
          formData.append('lb_name', this.b_lb_two)
          formData.append('category_id', this.b_lb_one)
        }

        this.http.post<any>(this.url, formData, {
          headers: myheader
        }).subscribe(response => {
          if(response.id) {
            this.getCategories()


            if(status === 2) {
              this.dataTwo = []
              this.http.get(this.twoUrl + this.b_lb_one).subscribe(res => {
                this.dataTwo = res
              });
            }

            if(status === 3) {
              this.dataThree = []
              this.http.get(this.threeUrl + this.b_lb_two + '/' + '4').subscribe(res => {
                this.dataThree = res
              });
            }



          }
        });
      }


    }


  }

  async close(id: number) {
    const conf = confirm('Are you sure?')
    if(conf) {
      await this.http.get('https://administrator.goodyellowco.com/api/u/vendor/level/three/delete/' + id + '/' + localStorage.getItem('u_id') + '?token=' + localStorage.getItem('token')).pipe(delay(250), retry(3)).toPromise().then(() => {
        this.getCategories()
      });
    }
  }

  // async closeCause(id: number) {
  //   await this.http.get('https://administrator.goodyellowco.com/api/u/vendor/cause/delete/' + id + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then(res => {
  //     this.getCauses()
  //   });
  // }

  // async closePlanets(id: number) {
  //   await this.http.get('https://administrator.goodyellowco.com/api/u/vendor/planets/delete/' + id + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then(res => {
  //     this.getPlanets()
  //   });
  // }

  // async closePeople(id: number) {
  //   await this.http.get('https://administrator.goodyellowco.com/api/u/vendor/peoples/delete/' + id + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then(res => {
  //     this.getPeoples()
  //   });
  // }

  add_cause() {
    if(this.cause == '' || this.cause == ' ') {
      alert("You can't add empty field.")
    } else {
      const myheader = new HttpHeaders();
      //myheader.set('Access-Control-Allow-Origin', '*');
      myheader.set('Content-Type', 'application/x-www-form-urlencoded');

      const formData = new FormData();
      formData.append('cause', this.cause)
      formData.append('user_id', this.uid ?? '')

      this.http.post<any>(this.urlcause + this.token, formData, {
        headers: myheader
      }).subscribe(response => {
        if(response.id) {
          //this.getCauses()
        }
      });
    }

  }

  good_planet() {
    if(this.goodPlanet == '' || this.goodPlanet == ' ') {
      alert("You can't add empty field.")
    } else {
      const myheader = new HttpHeaders();
      //myheader.set('Access-Control-Allow-Origin', '*');
      myheader.set('Content-Type', 'application/x-www-form-urlencoded');

      const formData = new FormData();
      formData.append('planet', this.goodPlanet)
      formData.append('user_id', this.uid ?? '')

      this.http.post<any>(this.urlplanets + this.token, formData, {
        headers: myheader
      }).subscribe(response => {
        if(response.id) {
          //this.getPlanets()
        }
      });
    }

  }

  add_people() {
    if(this.people == '' || this.people == ' ') {
      alert("You can't add empty field.")
    } else {
      const myheader = new HttpHeaders();
      //myheader.set('Access-Control-Allow-Origin', '*');
      myheader.set('Content-Type', 'application/x-www-form-urlencoded');

      const formData = new FormData();
      formData.append('people', this.people)
      formData.append('user_id', this.uid ?? '')

      this.http.post<any>(this.urlpeoples + this.token, formData, {
        headers: myheader
      }).subscribe(response => {
        if(response.id) {
          //this.getPeoples()
        }
      });
    }

  }

  next() {
    localStorage.setItem('goodyellow_step', '2')
    this.router.navigate(['vendor-signup-photos'])
  }

  select_change() {
    if(this.category == 'new_00') {
      let data = prompt("Title Of New Leaderboard", "");
      if (data != null) {

        this.category = data
        this.add_cate()
        this.category = ''
      }
    }
}

select_change_cause() {
    if(this.cause == 'new_00') {
      let data = prompt("Title Of New Leaderboard", "");
      if (data != null) {

        this.cause = data
        this.add_cause()
        this.cause = ''
      }
    }
}

select_change_good_planet() {
    if(this.goodPlanet == 'new_00') {
      let data = prompt("Title Of New Leaderboard", "");
      if (data != null) {

        this.goodPlanet = data
        this.good_planet()
        this.goodPlanet = ''
      }
    }
}

select_change_good_people() {
    if(this.people == 'new_00') {
      let data = prompt("Title Of New Leaderboard", "");
      if (data != null) {

        this.people = data
        this.add_people()
        this.people = ''
      }
    }
}

}
