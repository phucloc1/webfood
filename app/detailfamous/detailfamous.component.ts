import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import {FoodService} from '../food.service';
// import { FoodNoiBat} from '../food';
// import { NguyenLieuNoiBat} from '../food';
@Component({
  selector: 'app-detailfamous',
  templateUrl: './detailfamous.component.html',
  styleUrls: ['./detailfamous.component.css']
})
export class DetailfamousComponent implements OnInit, AfterViewInit {
//   famousdata: FoodNoiBat;
//   nguyenlieunb: NguyenLieuNoiBat;
  constructor(private _route: ActivatedRoute , private location: Location, private _foodservicedetail: FoodService) { }

  ngOnInit() {
    const id = + this._route.snapshot.paramMap.get('id');

    // this._foodservicedetail.getFoodNoiBatbyID(id).subscribe(fn => this.famousdata = fn);
    // this._foodservicedetail.getNguyenLieuNB(id).subscribe(n => this.nguyenlieunb = n);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      window.scrollTo(0, 850);
    }, 500);
    }

}
