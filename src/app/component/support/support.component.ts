import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  disabled: boolean = false
  email: string = ''
  business_name: string = ''
  issue: string = ''

  attachOne: string = ''
  attachTwo: string = ''
  attachThree: string = ''
  attachFour: string = ''
  attachFive: string = ''

  url: string = 'https://administrator.goodyellowco.com/api/support/send'

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  _handleReaderLoaded(readerEvt: any) {
     var binaryString = readerEvt.target.result;
     this.attachOne = btoa(binaryString)
    }

  doFileInput(evt: any) {
    if(evt.target.files[0].size > 1000000) {
      alert('Main Photo size should be less than 1MB.')
      this.disabled = false
      this.attachOne = ''
    } else {
      var files = evt.target.files;
      var file = files[0];
      if (files && file) {
          var reader = new FileReader();
          reader.onload =this._handleReaderLoaded.bind(this);
          reader.readAsBinaryString(file);
      }
    }
  }

  _handleReaderLoaded2(readerEvt: any) {
     var binaryString = readerEvt.target.result;
     this.attachTwo = btoa(binaryString)
    }

  doFileInputTwo(evt: any) {
    if(evt.target.files[0].size > 1000000) {
      alert('Main Photo size should be less than 1MB.')
      this.disabled = false
      this.attachTwo = ''
    } else {
      var files = evt.target.files;
      var file = files[0];
      if (files && file) {
          var reader = new FileReader();
          reader.onload =this._handleReaderLoaded2.bind(this);
          reader.readAsBinaryString(file);
      }
    }
  }

  _handleReaderLoaded3(readerEvt: any) {
     var binaryString = readerEvt.target.result;
     this.attachThree = btoa(binaryString)
    }

  doFileInputThree(evt: any) {
    if(evt.target.files[0].size > 1000000) {
      alert('Main Photo size should be less than 1MB.')
      this.disabled = false
      this.attachThree = ''
    } else {
      var files = evt.target.files;
      var file = files[0];
      if (files && file) {
          var reader = new FileReader();
          reader.onload =this._handleReaderLoaded3.bind(this);
          reader.readAsBinaryString(file);
      }
    }
  }

  _handleReaderLoaded4(readerEvt: any) {
     var binaryString = readerEvt.target.result;
     this.attachFour = btoa(binaryString)
    }

  doFileInputFour(evt: any) {
    if(evt.target.files[0].size > 1000000) {
      alert('Main Photo size should be less than 1MB.')
      this.disabled = false
      this.attachFour = ''
    } else {
      var files = evt.target.files;
      var file = files[0];
      if (files && file) {
          var reader = new FileReader();
          reader.onload =this._handleReaderLoaded4.bind(this);
          reader.readAsBinaryString(file);
      }
    }
  }

  _handleReaderLoaded5(readerEvt: any) {
     var binaryString = readerEvt.target.result;
     this.attachFive = btoa(binaryString)
    }

  doFileInputFive(evt: any) {
    if(evt.target.files[0].size > 1000000) {
      alert('Main Photo size should be less than 1MB.')
      this.disabled = false
      this.attachFive = ''
    } else {
      var files = evt.target.files;
      var file = files[0];
      if (files && file) {
          var reader = new FileReader();
          reader.onload =this._handleReaderLoaded5.bind(this);
          reader.readAsBinaryString(file);
      }
    }
  }


  save() {
    this.disabled = true
      const myheader = new HttpHeaders();
      //myheader.set('Access-Control-Allow-Origin', '*');
      myheader.set('Content-Type', 'application/x-www-form-urlencoded');

      const formData = new FormData();
      formData.append('attachOne', this.attachOne)
      formData.append('attachTwo', this.attachTwo)
      formData.append('attachThree', this.attachThree)
      formData.append('attachFour', this.attachFour)
      formData.append('attachFive', this.attachFive)
      formData.append('email', this.email)
      formData.append('business_name', this.business_name)
      formData.append('issue', this.issue)

      this.http.post<any>(this.url, formData, {
        headers: myheader
      }).subscribe(response => {
        this.disabled = false
        this.attachOne = ''
        this.attachTwo = ''
        this.attachThree = ''
        this.attachFour = ''
        this.attachFive = ''
        this.email = ''
        this.issue = ''
        this.business_name = ''

        if(response) {
          Swal.fire({
            text: response.msg,
            icon: 'info'
          });
        }
      });
  }

}
