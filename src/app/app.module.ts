import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFooditemComponent } from './add-fooditem/add-fooditem.component';
import { DeleteFooditemComponent } from './delete-fooditem/delete-fooditem.component';
import { UpdateFooditemComponent } from './update-fooditem/update-fooditem.component';
import { SearchFooditemComponent } from './search-fooditem/search-fooditem.component';
import { FooditemsListComponent } from './fooditems-list/fooditems-list.component';
import { FooditemService } from './fooditem.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AddFooditemComponent,
    DeleteFooditemComponent,
    UpdateFooditemComponent,
    SearchFooditemComponent,
    FooditemsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FooditemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
