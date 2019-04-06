import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FoodService } from '../food.service';
// import { FoodNoiBat } from '../Food';


@Component({
  selector: 'app-food-famous',
  templateUrl: './food-famous.component.html',
  styleUrls: ['./food-famous.component.css']
})
export class FoodFamousComponent implements OnInit, AfterViewInit {

//   foodnoibat: FoodNoiBat[];

  constructor(private _foodnoibatservice: FoodService, private _nguyenlieunb: FoodService) { }

  ngOnInit() {
    // this._foodnoibatservice.getAllFoodNoiBat().subscribe(fn => this.foodnoibat = fn);
  }

ngAfterViewInit(): void {
  setTimeout(() => {
    window.scrollTo(0, 750);
  }, 500);

}
}
