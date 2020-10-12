import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fooditem } from '../fooditem';
import { FooditemService } from '../fooditem.service';
@Component({
  selector: 'app-update-fooditem',
  templateUrl: './update-fooditem.component.html',
  styleUrls: ['./update-fooditem.component.css']
})
export class UpdateFooditemComponent implements OnInit {

  private fooditem:Fooditem;
  constructor(private fooditemService:FooditemService,private router:Router) {
    this.fooditem=new Fooditem();
   }

   public updateFooditem():void{
     this.fooditemService.updateFooditem(this.fooditem).subscribe(res=>{
       this.fooditem=new Fooditem();
       this.router.navigate(['/updateFooditem']);
     }
      )
   }


  ngOnInit() {
  }

}
