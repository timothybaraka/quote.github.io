import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: '/app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:string[];

  
  constructor(){
    this.quotes=['show me how you drive i tell you who you are']
  }
}