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



}
