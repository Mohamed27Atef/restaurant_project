import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { getCookie } from 'typescript-cookie';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  private apiPort = environment.apiPort;
  private BaseUrl: string = `https://localhost:${this.apiPort}/`;


constructor(private httpClient : HttpClient) { }

AddRecipeToCart(CartItemData:object):Observable<any>{
  console.log(CartItemData)
  let JsonToken = getCookie('User');
 let Token = JsonToken !=undefined? JSON.parse(JsonToken):null;
  console.log(Token)
  const headers = new HttpHeaders({
    Authorization: `Bearer ${Token}`
  });
 return this.httpClient.post(this.BaseUrl+"api/CartItem",CartItemData,{headers});
}

}




