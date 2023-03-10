import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }
  btnClicked(){     //javascript
    alert("Please try to login again")
  }

  ngOnInit() {
  }

}
