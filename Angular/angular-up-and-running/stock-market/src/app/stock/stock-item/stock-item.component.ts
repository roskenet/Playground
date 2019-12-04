import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flx-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {

  public name: string;
  public code: string;
  public price: number;
  public previousPrice: number;
  public positiveChange: boolean;
  public favorite: boolean;

  constructor() { }

  ngOnInit() {
    this.name = 'Test Stock Company';
    this.code = 'TSC';
    this.price = 75;
    this.previousPrice = 80;
    this.positiveChange = this.price >= this.previousPrice;
    this.favorite = false;
  }

  toggleFavorite(event) {
    console.log('We are toggling the favorite state for this stock');
    this.favorite = !this.favorite;
  }
}
