import { Component } from '@angular/core';
import { FoodService } from './food.service';
import { from } from 'rxjs';
import { catalog, product } from './Food';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'artfood';

  // food : catalog[];
  // product:product[];
  // constructor(private _foodservice: FoodService,private _route: ActivatedRoute) { }
  


  // ngOnInit() {
  //   const catalog_id = + this._route.snapshot.paramMap.get('catalog_id');

  //   this._foodservice.getCatalog().subscribe(f => this.food = f);
  //   // this._foodservice.getSouthFoodbyidcatalog(catalog_id).subscribe(c => this.product = c);
  // }
  // NumberOfSinhVienByClass(_idproduct: number) {
  //   if (_idproduct == 0)
  //     return this.product.length;
  //   else {
  //     return this.product.filter(g => g.id_product == _idproduct.toString()).length;
  //   }
  // }
}
