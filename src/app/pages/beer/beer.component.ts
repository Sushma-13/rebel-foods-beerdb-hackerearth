import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Beercraft, Beerimages } from 'src/app/model';
import { BeerBrandService } from 'src/app/services/beer-brand.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css'],
})
export class BeerComponent implements OnInit, OnDestroy {
  // beer details variables
  beerCraft: Beercraft[];
  tempBeerCraft: Beercraft[];
  beerimages: Beerimages[];

  // pagination variables
  totalPages = 0;
  offset = 0;
  pageSize = 20;
  currentPage = 1;

  // subscription variables
  beerDetailsSubscription: Subscription;

  constructor(private beerBrandService: BeerBrandService) {}

  ngOnInit(): void {
    this.beerDetailsSubscription = combineLatest([
      this.beerBrandService.getBeercraft(),
      this.beerBrandService.getBeerimages(),
    ]).subscribe(([beercraft, beerimages]) => {
      this.beerCraft = beercraft;
      this.tempBeerCraft = this.beerCraft;
      this.setPages();
      this.beerimages = beerimages;
    });
  }

  setPages(): void {
    this.totalPages = Math.ceil(this.tempBeerCraft.length / this.pageSize);
  }

  changePage(action: string): void {
    if (action === 'next') {
      if (this.currentPage !== this.totalPages) {
        // if it is not the last page
        this.offset += this.pageSize;
        this.currentPage++;
      }
    } else if ('previous') {
      if (this.currentPage !== 1) {
        // if it is not the first page
        this.offset -= this.pageSize;
        this.currentPage--;
      }
    } else if ('first') {
      this.offset = 0;
      this.currentPage = 1;
    } else if ('last') {
      this.offset =
        this.tempBeerCraft.length < this.pageSize
          ? 0
          : this.tempBeerCraft.length - this.pageSize + (this.tempBeerCraft.length % this.pageSize);
      this.currentPage = this.totalPages;
    }
  }

  search(value: string): void {
    this.offset = 0;
    this.tempBeerCraft = this.beerCraft.filter((beer) =>
      beer.name.toLowerCase().includes(value.toLowerCase())
    );
    this.setPages();
  }

  ngOnDestroy(): void {
    this.beerDetailsSubscription?.unsubscribe();
  }
}
