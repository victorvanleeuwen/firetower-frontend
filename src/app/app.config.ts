export class AppConfig {

  static ApiBaseURL = "http://34.105.251.247:8762";

 static ApiUrls = {
   GETSTATUSFORPERIOD: "/status/status/getStatusForPeriod",
   GETSERVERS: "/server/servers",
   GETALERTS:"/alert/servers",
   GETAllAlERTS:'/alert/all',
   DELETEALERTS:'/alert/delete',
   GETMETRICS:'/metric/servers',
   GETRECENTMETRIC:'/metric/recent',
   GETRECENTMETRICS:'/metric/recents',
   DELETESERVER: '/server/delete',
   REGISTER: '/user/register',
   CURRENT: '/user/current',
   DELETEUSER: '/user/delete',
   GETMONITORING: '/monitoring/all'
 };

 static LocalStorageKeys = {
   TOKEN: "token"
 };
}
