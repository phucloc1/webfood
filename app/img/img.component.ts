import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Image } from '../food';
@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit, AfterViewInit {

  hinh: Image[];

  constructor(private _foodservice: FoodService) { }

  ngOnInit() {
    // this._foodservice.getImage().subscribe(i => this.hinh = i);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      window.scrollTo(0, 750);
    }, 500);
  }



}
