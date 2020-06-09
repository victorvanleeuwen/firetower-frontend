export class Metric{
  constructor(obj: MetricData = {} as Metric){
    const{
      id = 0,
      value = 0,
      date = null,
      operatingSystemType = "",
      metricType = "",
      serverId = 0,
      used = false,
    } = obj;

    this.id = id;
    this.value = value;
    this.date = date;
    this.operatingSystemType = operatingSystemType;
    this.serverId = serverId;
    this.metricType = metricType;
    this.used = used
  }

  id: number;
  date: Date;
  value: number;
  operatingSystemType: string;
  metricType: string;
  serverId: number;
  used: boolean;
}

export interface MetricData {
  id: number;
  value: number;
  date: Date;
  operatingSystemType: string;
  metricType: string;
  serverId: number;
  used: boolean;
}
