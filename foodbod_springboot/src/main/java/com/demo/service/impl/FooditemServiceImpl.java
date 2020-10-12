package com.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.FooditemRepository;
import com.demo.model.Fooditem;
import com.demo.service.FooditemService;

@Service
public class FooditemServiceImpl implements FooditemService {

	@Autowired
	private FooditemRepository dao;
	
	@Override
	public Fooditem addFooditem(Fooditem fooditem) {
		return dao.save(fooditem);
	}

	@Override
	public Fooditem updateFooditem(Fooditem fooditem) {
		return dao.save(fooditem);
	}
	@Override
	public List<Fooditem> getAllFooditemByVariety(String variety) {
		return dao.findByVariety(variety);
	}
	
	@Override
	public void deleteFooditemById(int id) {
		dao.deleteById(id);	
		}

	@Override
	public List<Fooditem> getAllFooditems() {
		return dao.findAll();
	}

	

}
