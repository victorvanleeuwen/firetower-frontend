export class Alert{
  constructor(obj: AlertData = {} as Alert){
    const{
      id = 0,
      message = "",
      date = null,
      alertSeverity = "",
      serverId = 0,
    } = obj;

    this.id = id;
    this.message = message;
    this.date = date;
    this.alertSeverity = alertSeverity;
    this.serverId = serverId;
  }
  id: number;
  message: string;
  date: Date;
  alertSeverity: string;
  serverId: number;
}

export interface AlertData {
  id: number;
  message: string;
  date: Date;
  alertSeverity: string;
  serverId: number;
}
