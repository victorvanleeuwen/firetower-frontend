import { Component, OnInit } from '@angular/core';
import {Server} from "../models/server.model"
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';
import { Alert } from '../models/Alert.model'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  alerts: Alert[] = [];
  idlist: number[] = [];
  servers: Server[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getServers()
  }


  getServers(){
    const url = AppConfig.ApiBaseURL + AppConfig.ApiUrls.GETSERVERS
    this.http.get(url).subscribe((res: Server[])=>{
      console.log(res)
      this.servers = res
      this.loadIdList()
    })
  }

  loadIdList(){
    this.servers.forEach(element => {
      this.idlist.push(element.id)
    });
    console.log(this.idlist)
    this.getAlerts()
  }

  getAlerts(){
    const url = AppConfig.ApiBaseURL+ AppConfig.ApiUrls.GETALERTS
    this.http.post(url,this.idlist).subscribe((res: Alert[])=>{
    this.alerts = res
    console.log(this.alerts)
    })
  }

  getServerName(id:number): string{
    var found = "Server name unknown";
    this.servers.forEach(element =>{
      if(element.id == id){
        console.log("Expected result: " + element.name)
        found = element.name
      }
    })
    return found
  }
}
