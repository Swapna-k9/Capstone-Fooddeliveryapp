package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Fooditem;
import com.demo.service.FooditemService;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class FooditemController{
	@Autowired
	private FooditemService service;
	
	@PostMapping("/fooditem")
	public Fooditem addFooditem(@RequestBody Fooditem fooditem) {
		return service.addFooditem(fooditem);
	}
	@PutMapping("/fooditem")
	public Fooditem updateFooditem(@RequestBody Fooditem fooditem) {
		return service.updateFooditem(fooditem);
	}

	@GetMapping("/fooditem/variety/{variety}")
	public List<Fooditem> getAllFooditemByVariety(String variety){
		return service.getAllFooditemByVariety(variety);
	}
	@DeleteMapping("/fooditem/{id}")
	public void deleteFooditemById(@PathVariable int id) {
		service.deleteFooditemById(id);
	}
	@GetMapping("/fooditems")
	public List<Fooditem> getAllFooditems(){
	return service.getAllFooditems();
	}
}
