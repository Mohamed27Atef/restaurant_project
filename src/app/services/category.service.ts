import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  private BaseUrl: string = 'https://localhost:44397/api/Category';

  constructor(private htppClient: HttpClient) { }

  getAllCategory() : Observable<any> {
    return this.htppClient.get(this.BaseUrl);
  }

}
