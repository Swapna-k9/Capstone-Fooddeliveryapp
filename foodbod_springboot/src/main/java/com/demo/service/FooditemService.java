package com.demo.service;

import java.util.List;

import com.demo.model.Fooditem;
public interface FooditemService {

	public Fooditem addFooditem(Fooditem fooditem);
	public Fooditem updateFooditem(Fooditem fooditem);
	public List<Fooditem> getAllFooditemByVariety(String variety);
	public void deleteFooditemById(int id);
	public List<Fooditem> getAllFooditems();
	
}
