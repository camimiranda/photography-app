import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {
  user= [];
  
  constructor() { }

  ngOnInit() {
  }

  login(username:string, password:string){
    console.log(username, password);
  }
}
