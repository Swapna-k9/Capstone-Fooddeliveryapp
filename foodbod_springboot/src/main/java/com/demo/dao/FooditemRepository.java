package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.Fooditem;

@Repository
public interface FooditemRepository extends JpaRepository<Fooditem, Integer>  {

	List<Fooditem> findByVariety(String variety);

}
