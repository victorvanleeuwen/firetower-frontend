export class Log{
  constructor(obj: LogData = {} as Log){
    const{
      id = 0,
      message = "",
      date = null,
      level = "",
    } = obj;

    this.id = id;
    this.message = message;
    this.date = date;
    this.level = level;
  }
  id: number;
  message: string;
  date: Date;
  level: string;

}

export interface LogData {
  id: number;
  message: string;
  date: Date;
  level: string;
}
