import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
    new Quote('today is the day','bach' ,'baraka'),
    new Quote('show me how you do','vin Diesel' ,'bach')
  ];
    toggleDetails(index){
      this.quotes[index].showDescription = this.quotes[index].
      showDescription;
    }    

  constructor() { }

  ngOnInit() {
  }

}
