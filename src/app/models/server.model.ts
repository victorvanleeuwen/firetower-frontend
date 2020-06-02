export class Server{
  constructor(obj: ServerData = {} as Server){
    const{
      id = 0,
      name = "",
      ip = "",
      userId = 0,
      operatingSystemType = "",
      state = true
    } = obj;

    this.id = id;
    this.name = name;
    this.ip = ip;
    this.userId = userId;
    this.operatingSystemType = operatingSystemType;
    this.state = state;


  }
  id: number;
  name: string;
  ip: string;
  userId: number;
  operatingSystemType: string;
  state: boolean;
}

export interface ServerData {
  id: number;
  name: string;
  ip: string;
  userId: number;
  operatingSystemType: string;
  state: boolean;
}





