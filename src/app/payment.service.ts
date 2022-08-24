import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private elementRef:ElementRef,
  ) { }

  async ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://sandbox.web.squarecdn.com/v1/square.js";
    this.elementRef.nativeElement.appendChild(s);

  }
}
