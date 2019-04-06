import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FoodService } from '../food.service';
import {product, catalog } from '../food';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit, AfterViewInit {

url:string="http://localhost/delifoodconnect/";
private read_product_where_idcatalog='read_product_where_idcatalog.php?';
  constructor(
    private _foodservice: FoodService,
    private _route: ActivatedRoute,
    private _http :HttpClient) { }


  foods: catalog[];
  food: catalog[];
  product: product;


  _filterlist: string;
// srcImg="./assets/img/";
  // cleanAccents(str: string): string {
  //   str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  //   str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  //   str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  //   str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  //   str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  //   str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  //   str = str.replace(/đ/g, 'd');
  //   str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
  //   str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
  //   str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
  //   str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
  //   str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
  //   str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
  //   str = str.replace(/Đ/g, 'D');
  //   // Combining Diacritical Marks
  //   str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // huyền, sắc, hỏi, ngã, nặng
  //   str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // mũ â (ê), mũ ă, mũ ơ (ư)
  //   str = str.toLocaleLowerCase();
  //   return str;
  // }


  // get filterlist(): string {
  //   return this._filterlist;
  // }
  // set filterlist(value: string) {
  //   this._filterlist = value;
  //   const scope = this;
  //   this.product = this._filterlist ? this.product.filter(f => {
  //     const newInput = scope.cleanAccents(this._filterlist);
  //     const newFoodName = scope.cleanAccents(f.Foodname);
  //     return newFoodName.toLowerCase().indexOf(newInput) !== -1;
  //   }) : this.food;
  // }

  ngOnInit() {
    const id = + this._route.snapshot.paramMap.get('catalog_id');

    this._foodservice.getCatalog().subscribe(f => this.foods = f);
    this._foodservice.getCatalog().subscribe(f => this.food = f);
    this._foodservice.getSouthFoodbyidcatalog(id).subscribe(c => console.log(c));
    // this._http.get(this.url +this.read_product_where_idcatalog).subscribe(result =>{console.log(result)})
    console.log(id)
   }
  

  ngAfterViewInit(): void {
    setTimeout(() => {
      window.scrollTo(0, 800);
    }, 500);
  }

}
