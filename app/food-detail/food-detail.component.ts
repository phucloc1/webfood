import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import {FoodService} from '../food.service';
@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit, AfterViewInit {

  constructor( private _route: ActivatedRoute , private location: Location, private _foodservice: FoodService) { }

  ngOnInit() {
    const id = + this._route.snapshot.paramMap.get('id');

    
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      window.scrollTo(0, 800);
    }, 500);
  }

  goBack(): void {
    this.location.back();
    setTimeout(() => {
      window.scrollTo(0, 800);
    }, 500);
  }

}
