import { Component, OnInit } from '@angular/core';
import { User } from '../domain/User';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../REST/authentication.service';
import { Router } from '@angular/router';
import { AppConfig } from '../app.config';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  name: string;
  email: string;
  password: string;
  privacyConfirm: string;

  newuser: User;

  passwordConfirm: string;

  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
  }

  register(): void {
      this.newuser = new User(this.name,this.email, this.password);
      if (this.privacyConfirm == null){
        alert('Please read and accept the privacy policy!');
      }
      else{
        if (this.password === this.passwordConfirm) {

          const url = AppConfig.ApiBaseURL + AppConfig.ApiUrls.REGISTER
          this.http.post(url,this.newuser).subscribe((res: object)=>{
            console.log(Object)
          })
          this.router.navigate(['/login'])
        }
        else {
          alert('Make sure passwords match.');
        }
      }
  }
}

