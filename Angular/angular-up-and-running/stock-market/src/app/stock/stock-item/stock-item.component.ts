import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'flx-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent {

  @Input()
  public stocks: Array<Stock>;
  @Output()
  private toggleFavorite: EventEmitter<Stock>;
  public stockClasses;

  constructor() { 
    this.toggleFavorite = new EventEmitter<Stock>();
  }

  trackStockByCode(index, stock) {
    return stock.code;
  }

  onToggleFavorite(event, index) {
    this.toggleFavorite.emit(this.stocks[index]);
  }
}
