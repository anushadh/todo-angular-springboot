import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomeMessage = 'Welcome '
  welcomeMessageFromService:string
  name = ''

  //Activated Route
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) { }

  ngOnInit() {
    //console.log(this.welcomeMessage)
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error) 
    );

    console.log('Last Line of getWelcomeMessage');
  }

  getWelcomeMessageWithParameter() {
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error) 
    );

    console.log('Last Line of getWelcomeMessage' + this.name);
  }

  handleErrorResponse(error) {
    this.welcomeMessageFromService = error.message
  }

  handleSuccessfulResponse(response) {
    //console.log(response);
    this.welcomeMessageFromService = response.message
  }

}
