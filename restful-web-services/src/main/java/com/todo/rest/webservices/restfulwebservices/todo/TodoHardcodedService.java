package com.todo.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {
	
	public static List<Todo> todos = new ArrayList<>();
	public static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "anusha", "Paint a picture", new Date(), false));
		todos.add(new Todo(++idCounter, "anusha", "Clean shelves", new Date(), false));
		todos.add(new Todo(++idCounter, "anusha", "Post the letter", new Date(), false));
	}
	
	public List<Todo> findAll() {
		return todos;
	}
}
