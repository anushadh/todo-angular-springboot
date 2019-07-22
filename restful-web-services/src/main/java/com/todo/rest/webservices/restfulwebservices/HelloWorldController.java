package com.todo.rest.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
	
	// Two types @RequestMapping(method = RequestMethod.GET, path = "/helloworld")
	@GetMapping(path = "/helloworld")
	public String helloWorld() {
		return "Hello World !";
	}

}
