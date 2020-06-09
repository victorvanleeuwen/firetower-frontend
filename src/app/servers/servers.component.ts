import { Component, OnInit } from '@angular/core';
import {Server} from "../models/server.model"
import { Metric } from "../models/metric.model"
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { element } from 'protractor';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  servers: Server[] = [];
  idlist: number[] = [];
  metrics: Metric[] = [];
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
    this.retrieveMetrics()
  }
  retrieveMetrics(){
    const url = AppConfig.ApiBaseURL+ AppConfig.ApiUrls.GETRECENTMETRICS
    this.http.post(url,this.idlist).subscribe((res: Metric[])=>{
    this.metrics = res
    console.log(this.metrics)
    })

  }
  getCpu(id:number): number{

    var result = 0
    this.metrics.forEach(element =>{
      if(element.serverId == id && element.metricType =="CPU"){
        result = element.value;
      }
    })
    return result
  }
  getRam(id:number): number{

    var result = 0
    this.metrics.forEach(element =>{
      if(element.serverId == id && element.metricType =="RAM"){
        result = element.value;
      }
    })
    return result
  }
  getNetworkUp(id:number): number{

    var result = 0
    this.metrics.forEach(element =>{
      if(element.serverId == id && element.metricType =="NETWORK_UP"){
        result = element.value;
      }
    })
    return result
  }
  getNetworkDown(id:number): number{

    var result = 0
    this.metrics.forEach(element =>{
      if(element.serverId == id && element.metricType =="NETWORK_DOWN"){
        result = element.value;
      }
    })
    return result
  }
  getHarddrive(id:number): number{

    var result = 0
    this.metrics.forEach(element =>{
      if(element.serverId == id && element.metricType =="HARDDRIVE_USAGE"){
        result = element.value;
      }
    })
    return result
  }

  deleteServer(server:Server){
    if(confirm("Are you shure you want to delete this server?")){
      const url = AppConfig.ApiBaseURL + AppConfig.ApiUrls.DELETESERVER +"?id=" + server.id
      this.http.delete(url).subscribe((res: object)=>{
        const index = this.servers.indexOf(server,0)
        if(index > -1){
          this.servers.splice(index,1);
        }
      })
    }

  }

}
