import { Component, OnInit } from '@angular/core';
import {Server} from "../models/server.model";
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';
import { Alert } from '../models/Alert.model';
import {Metric} from '../models/metric.model';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  metrics: Metric[] = [];
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
    this.getAlerts()
  }

  getAlerts(){
    const url = AppConfig.ApiBaseURL+ AppConfig.ApiUrls.GETALERTS
    this.http.post(url,this.idlist).subscribe((res: Alert[])=>{
    this.alerts = res
    })
  }

  delete(alert: Alert){

    if(confirm("Are you shure you wan to delete this Alert?")){

      const url = AppConfig.ApiBaseURL + AppConfig.ApiUrls.DELETEALERTS +"?id=" + alert.id
      this.http.delete(url).subscribe((res: object)=>{
        const index = this.alerts.indexOf(alert,0)
        if(index > -1){
          this.alerts.splice(index,1);
        }
      })
    }
  }
  getServerName(id:number): string{
    var found = "Server name unknown";
    this.servers.forEach(element =>{
      if(element.id == id){
        found = element.name
      }
    })
    return found
  }

}
