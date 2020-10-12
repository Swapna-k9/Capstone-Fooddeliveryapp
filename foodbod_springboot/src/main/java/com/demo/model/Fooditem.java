package com.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table
@Setter
@Getter
@NoArgsConstructor
@ToString
public class Fooditem {
	@Id
	@GeneratedValue
	private int id;
	private String name;
	private int price;
	private String variety;
	@Lob
	@Column(columnDefinition = "CLOB")
	private String avatar;
	

}
