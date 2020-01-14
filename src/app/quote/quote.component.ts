import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('Show me how you ride and i will tell you who you are','Vin Diesel', 'baraka'),
    new Quote('Progress is impossible without change,and those who cannot change their minds cannot change anything', 'George Shaw', 'bach')
  ];

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete
        ${this.quotes[index].name}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }

  }
  addNewQuote(quote) {
    this.quotes.push(quote);

  }



  constructor() { }

  ngOnInit() {
  }

}
