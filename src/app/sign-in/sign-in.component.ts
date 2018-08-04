import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  username = "OLO";


  log(x) {
    console.log(x);
  }

  constructor() { }

  ngOnInit() {
  }

}
