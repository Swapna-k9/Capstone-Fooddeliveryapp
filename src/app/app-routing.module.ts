import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFooditemComponent } from './add-fooditem/add-fooditem.component';
import { DeleteFooditemComponent } from './delete-fooditem/delete-fooditem.component';
import { FooditemsListComponent } from './fooditems-list/fooditems-list.component';
import { SearchFooditemComponent } from './search-fooditem/search-fooditem.component';
import { UpdateFooditemComponent } from './update-fooditem/update-fooditem.component';


const routes: Routes = [
  {path:'addFooditem',component:AddFooditemComponent},
  {path:'deleteFooditem',component:DeleteFooditemComponent},
  {path:'searchFooditem',component:SearchFooditemComponent},
  {path:'updateFooditem',component:UpdateFooditemComponent},
  {path:'FooditemsList',component:FooditemsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
