import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { HomeComponent } from './home/home.component';
import { ThongtinComponent } from './thongtin/thongtin.component';
import { FoodFamousComponent } from './food-famous/food-famous.component';
import { DetailfamousComponent } from './detailfamous/detailfamous.component';
import { ImgComponent } from './img/img.component';
import { DatmonComponent } from './datmon/datmon.component';
import { DatmonnoibatComponent } from './datmonnoibat/datmonnoibat.component';
import { LoginComponent } from './login/login.component';
import { DangkyComponent } from './dangky/dangky.component';
import {HeaderComponent} from './header/header.component';
const routes: Routes = [
  { path: 'food', component: FoodComponent },
  { path: 'fooddetail', component: FoodDetailComponent },
  { path: 'home', component: HomeComponent },
  { path: 'food/:id', component: FoodComponent },
  { path: 'fooddetail/:id', component: DatmonComponent },
  { path: 'thongtin', component: ThongtinComponent },
  { path: 'foodfamous', component: FoodFamousComponent },
  { path: 'foodfamous/:id', component: DetailfamousComponent },
  { path: 'detailfamous', component: DetailfamousComponent },
  { path: 'detailfamous/:id', component: DatmonnoibatComponent },
  { path: 'hinhanh', component: ImgComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dangky', component: DangkyComponent },
  { path: 'header/:id', component: FoodComponent },

  // { path: 'order', component: DatmonComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
