import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Log} from '../models/log.model' ;
import { AppConfig } from '../app.config';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss']
})
export class MonitoringComponent implements OnInit {

  logs: Log[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadlogs()
  }

  loadlogs(){
    const url = AppConfig.ApiBaseURL + AppConfig.ApiUrls.GETMONITORING
    this.http.get(url).subscribe((res: Log[])=>{
      console.log(res)
      this.logs = res;
    })
  }
}
