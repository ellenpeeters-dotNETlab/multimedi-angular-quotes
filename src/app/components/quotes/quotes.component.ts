import { Component, OnInit } from '@angular/core';

import { Copyright, Quote } from '../../models/quotes.model';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  public quote: Quote;
  public image: string;
  public copyright: Copyright;
  private errorMessage: string;

  constructor(private quotesService: QuotesService) { }

  public ngOnInit(): void {
    this.quotesService.getQuote()
      .subscribe({
        next: quote => {
          this.quote = quote?.contents?.quotes[0];
          this.image = this.quote?.background;
          this.copyright = quote?.copyright;
        },
        error: err => this.errorMessage = err
      });
  }
}
