import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Fooditem } from './fooditem';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FooditemService {

  private url:string;
  constructor(private http:HttpClient) {
    this.url="http://localhost:9300/fooditem";
   }

   public addFooditem(fooditem:Fooditem): Observable<Fooditem>{
     return this.http.post<Fooditem>(this.url,fooditem);

   }
   public deleteFooditem(fooditem:Fooditem): Observable<Fooditem>{
    return this.http.post<Fooditem>(this.url,fooditem);

  }
   public updateFooditem(fooditem:Fooditem): Observable<Fooditem>{
    return this.http.post<Fooditem>(this.url,fooditem);

  }
  
  public searchFooditem(fooditem:Fooditem): Observable<Fooditem>{
    return this.http.post<Fooditem>(this.url,fooditem);

  }
  public getAllFooditems():Observable<Fooditem[]>{
    return this.http.get<Fooditem[]>(this.url+"s");
  }
 

}
