import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;
  user!: User;

  constructor(private router: Router, private service: LoginService) { }

  ngOnInit(): void {
  }


  login(e:Event,user:string,password:string):void {
    this.service.authentication(user, password).subscribe(
      data => {
        if (data)
        {
          this.router.navigate(['/home'],{queryParams: {userId: data.id}});
        }
        else
        {
          
          }
          
      }
    );

    e.preventDefault();
  }


  
}
