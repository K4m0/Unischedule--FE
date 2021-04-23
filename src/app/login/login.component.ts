import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  login(user:string,password:string) {
    console.log(user);
    console.log(password);
    this.router.navigate(['/home']);
    
  }
}
