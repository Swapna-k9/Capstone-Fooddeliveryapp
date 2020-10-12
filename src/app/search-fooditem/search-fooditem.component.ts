import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fooditem } from '../fooditem';
import { FooditemService } from '../fooditem.service';
@Component({
  selector: 'app-search-fooditem',
  templateUrl: './search-fooditem.component.html',
  styleUrls: ['./search-fooditem.component.css']
})
export class SearchFooditemComponent implements OnInit {

  private fooditem:Fooditem;
  constructor(private fooditemService:FooditemService,private router:Router) {
    this.fooditem=new Fooditem();
   }

   public searchFooditem():void{
     this.fooditemService.searchFooditem(this.fooditem).subscribe(res=>{
       this.fooditem=new Fooditem();
       this.router.navigate(['/searchFooditem']);
     }
      )
   }

  ngOnInit() {
  }

}
