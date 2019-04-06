import { Component, OnInit } from '@angular/core';
import { FoodService} from '../food.service';
import { catalog,product} from '../food';
import {Router} from '@angular/router'
@Component({ 
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  food: catalog[];
  product : product;
  catalog_id:string="";
  constructor( private _foodservice:FoodService,
    private _route:Router) { 
      // let arr=this.food[0]
      // this.catalog_id=arr["catalog_id"];
    }

  ngOnInit() {
    this._foodservice.getCatalog().subscribe(f => this.food = f);
   
  }
  

}
