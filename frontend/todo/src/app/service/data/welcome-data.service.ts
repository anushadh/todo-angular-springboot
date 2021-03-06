import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message:string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService() {
    console.log(this.http.get('http://localhost:8080/hello-world-bean'))
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')
    //console.log("Executing Hello World Bean Service")
  }

  executeHelloWorldBeanServiceWithPathVariable(name) {
    //console.log(this.http.get('http://localhost:8080/hello-world-bean'))
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`)
    //console.log("Executing Hello World Bean Service")
  }
}
