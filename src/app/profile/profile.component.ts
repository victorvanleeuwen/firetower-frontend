import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';
import {User} from '../domain/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User = null

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.getuser()
  }

  getuser(){

    const url = AppConfig.ApiBaseURL + AppConfig.ApiUrls.CURRENT;
    this.http.get(url).subscribe((user : User) =>{

      console.log(user)
      this.user = user
    });

  }
  delete(user: User){

    if (confirm("Are you shure you want to delete your account? There is no going back")){
      const url = AppConfig.ApiBaseURL + AppConfig.ApiUrls.DELETEUSER + '?id=' + user.id
      this.http.delete(url).subscribe((response : Object) =>{});
      this.router.navigate(['/login'])
    }
  }
}
