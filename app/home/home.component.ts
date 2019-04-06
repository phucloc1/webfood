import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FoodService } from '../food.service';
// import { SouthsideFood, FoodNoiBat } from '../food';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


//   foods: SouthsideFood[];
// food: SouthsideFood[];

// _filterlist: string;
//   constructor(private _foodservice: FoodService) { }


//   get filterlist(): string {
//     return this._filterlist;
//   }
//   set filterlist(value: string) {
//     this._filterlist = value;
//     this.foods = this._filterlist ? this.food.filter(f => f.Foodname.toLowerCase().indexOf(this._filterlist) !== -1) : this.food;
//   }


  ngOnInit() {
    // this._foodservice.getSouthFood().subscribe(f => this.foods = f);
    // this._foodservice.getSouthFood().subscribe(f => this.food = f);
    // this._foodnoibatservice.getAllFoodNoiBat().subscribe(fn => this.foodnoibat = fn);
  }






  // ngAfterViewInifood(): void {
  //     setTimeout(() => {
  //       window.scrollTo(this.foods.nativeElement.offsetLeft, this.searchBox.nativeElement.offsetTop);
  //     }, 500);
  // }

  // loadFoods() {
  //   setTimeout(() => {
  //     window.scrollTo(0, 5000);
  //   }, 500);
  // }
  // scrollABASD = (event: any) => {
  //   console.log(event);
  //   alert('hello');
  // }

}
