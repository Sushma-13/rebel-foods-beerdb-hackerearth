import { Component, Input, OnInit } from '@angular/core';
import { Beercraft, Beerimages } from 'src/app/model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {

  @Input()
  beerDetail: Beercraft;

  @Input()
  imageSrc: Beerimages;

  constructor() {}

  ngOnInit(): void {}
}
