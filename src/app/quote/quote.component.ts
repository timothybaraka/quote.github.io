import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
    {name:'toaday is the day',author:'bach' ,submitter:'baraka'},
    {name:'show me how you do',author:'vin Diesel' ,submitter:'bach'}
  ];
    

  constructor() { }

  ngOnInit() {
  }

}
