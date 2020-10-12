import { Component, OnInit } from '@angular/core';
import { Fooditem } from '../fooditem';
import { FooditemService } from '../fooditem.service';
@Component({
  selector: 'app-fooditems-list',
  templateUrl: './fooditems-list.component.html',
  styleUrls: ['./fooditems-list.component.css']
})
export class FooditemsListComponent implements OnInit {

  private fooditemsList:Fooditem[];
  constructor(private fooditemService:FooditemService) { }

  ngOnInit() {
    this.fooditemService.getAllFooditems().subscribe(res=>{
      this.fooditemsList=res;
    });
  }

}
