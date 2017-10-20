import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  constructor() { }

  url: string;

  ngOnInit() {
    this.url = 'http://localhost:53954/api/tutorial/GetAllBeer';
  }

}
