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
  name = ''

  //Activated Route
  constructor(
    private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService
  ) { }

  ngOnInit() {
    //console.log(this.welcomeMessage)
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    this.welcomeDataService.executeHelloWorldBeanService()
  }

}
