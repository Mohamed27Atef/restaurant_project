import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Header } from '@syncfusion/ej2-angular-navigations';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient: HttpClient) { }

  getAllData(id: number) {
    // return this.httpClient.get("https://localhost:44397/api/Resturant/" + id);
    return this.httpClient.post("https://localhost:44397/api/Resturant/" + id, {title: "dadf"},);
  }
}
