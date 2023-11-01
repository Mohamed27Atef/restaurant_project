import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getCookie } from 'typescript-cookie';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private BaseUrl: string = 'https://localhost:44397/';
  constructor(private httpClient : HttpClient) { }
  getTableByRestaurantId(RestaurantId: number) : Observable<any> {
    return this.httpClient.get(this.BaseUrl +"api/Resturant/"+ "getTableRestaurant/" + RestaurantId);
  }
  
  reserveTable(reservationData:object):Observable<any>{
    console.log(reservationData)
    let JsonToken = getCookie('User');
    console.log(JsonToken)
   let Token = JsonToken !=undefined? JSON.parse(JsonToken):null;
    console.log(Token)

    //const Token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiaG9zYW0iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjE3YjJmMTUxLTRkYTgtNDhhYy04NzJmLTYwODQ5YTcyNGY0YyIsImp0aSI6ImI0MDUzYWViLTRlZmQtNGE4Zi1hYmFmLTUwYzliODU5ZWYwMSIsImV4cCI6MTY5ODY3ODM2MywiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA1OC8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo0MjAwLyJ9.5TL1xbv5JR-0QEA-etUr0wH_49M0EJbewXavE0NCLNM"
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
