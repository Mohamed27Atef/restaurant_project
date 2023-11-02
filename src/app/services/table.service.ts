import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { getCookie } from 'typescript-cookie';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private apiPort = environment.apiPort;
  private BaseUrl: string = `https://localhost:${this.apiPort}/`;

  constructor(private httpClient : HttpClient) { }
  
  getTableByRestaurantIdAndDAteTime(dateTime:string,RestaurantId: number) : Observable<any> {
    return this.httpClient.get(this.BaseUrl +"api/Table/"+ "getAvailableTalbe?time=" +dateTime+"&restaurantId="+ RestaurantId);
  }
  
  reserveTable(reservationData:object):Observable<any>{
    console.log(reservationData)
    let JsonToken = getCookie('User');
    console.log(JsonToken)
   let Token = JsonToken !=undefined? JSON.parse(JsonToken):null;
    console.log(Token)

    const headers = new HttpHeaders({
      Authorization: `Bearer ${Token}`
    });
 
    return this.httpClient.post(this.BaseUrl+"api/Table",reservationData,{headers});
  }


  getTableType(tableType:string):string{
    switch(tableType){
      case "Solo":return "Solo for 1 person"
      case "Mini":return "Mini for (2-3) persons"
      case "Medium":return "Medium for (4-5) persons"
      case "Family":return "Family for +5 persons"
      default:return ""
    }  
  }

}
