package com.example.demo.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {
	
	@GetMapping("/")
	public String helloWorld() {
		return "Hello World";
	}
	
//	@GetMapping(path = "/hello-world-bean")
//	public AuthenticationBean helloWorldBean() {
//		  throw new RuntimeException("There is some error");
//		//return new AuthenticationBean("Hello-world-changed");
//		}
	
	
	
	@GetMapping(path="/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello-world, %s",name));
		}

//	@GetMapping(path = "/hello-world-bean")
//	public AuthenticationBean helloWorldPathVariable(@PathVariable String name) {
//		return new AuthenticationBean(String.format("Hello-world-bean, %s",name));
//		}


}
