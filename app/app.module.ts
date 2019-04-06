import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './food/food.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { ThongtinComponent } from './thongtin/thongtin.component';
import { AppRoutingModule } from './app-routing.module';
import { FoodFamousComponent } from './food-famous/food-famous.component';
import { DetailfamousComponent } from './detailfamous/detailfamous.component';
import { ImgComponent } from './img/img.component';
import { DatmonComponent } from './datmon/datmon.component';
import { DatmonnoibatComponent } from './datmonnoibat/datmonnoibat.component';
import { LoginComponent } from './login/login.component';
import { DangkyComponent } from './dangky/dangky.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodComponent,
    FoodDetailComponent,
    ThongtinComponent,
    FoodFamousComponent,
    DetailfamousComponent,
    ImgComponent,
    DatmonComponent,
    DatmonnoibatComponent,
    LoginComponent,
    DangkyComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
