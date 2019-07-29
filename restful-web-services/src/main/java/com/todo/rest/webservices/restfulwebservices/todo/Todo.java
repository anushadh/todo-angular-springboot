package com.todo.rest.webservices.restfulwebservices.todo;

import java.util.Date;

public class Todo {
	
	public long id;
	private String username;
	private String description;
	private Date targetDate;
	public boolean isDOne;
	
	public Todo(long id, String username, String description, Date targetDate, boolean isDOne) {
		super();
		this.id = id;
		this.username = username;
		this.description = description;
		this.targetDate = targetDate;
		this.isDOne = isDOne;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getTargetDate() {
		return targetDate;
	}
	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}
	public boolean isDOne() {
		return isDOne;
	}
	public void setDOne(boolean isDOne) {
		this.isDOne = isDOne;
	}
	@Override
	public String toString() {
		return "Todo [id=" + id + ", username=" + username + ", description=" + description + ", targetDate="
				+ targetDate + ", isDOne=" + isDOne + "]";
	}
	

}
