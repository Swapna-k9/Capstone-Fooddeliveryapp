import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fooditem } from '../fooditem';
import { FooditemService } from '../fooditem.service';
@Component({
  selector: 'app-delete-fooditem',
  templateUrl: './delete-fooditem.component.html',
  styleUrls: ['./delete-fooditem.component.css']
})
export class DeleteFooditemComponent implements OnInit {

  private fooditem:Fooditem;
  constructor(private fooditemService:FooditemService,private router:Router) {
    this.fooditem=new Fooditem();
   }

   public deleteFooditem():void{
     this.fooditemService.deleteFooditem(this.fooditem).subscribe(res=>{
       this.fooditem=new Fooditem();
       this.router.navigate(['/deleteFooditem']);
     }
      )
   }

  ngOnInit() {
  }

}
