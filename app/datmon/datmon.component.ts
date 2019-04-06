import { Component, OnInit } from '@angular/core';
import {FoodService} from '../food.service';
import { ActivatedRoute } from '@angular/router';
// import { SouthsideFood } from '../food';
import { Location} from '@angular/common';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-datmon',
  templateUrl: './datmon.component.html',
  styleUrls: ['./datmon.component.css']
})
export class DatmonComponent implements OnInit {
  // datmon : SouthsideFood;

  constructor(private _foodservice: FoodService,
    private _route: ActivatedRoute,
    private location: Location,
    private _http :HttpClient) { }
// name='';
//   email='';
//   tel='';
//   phuong='';
//   diachi='';
// quan='';

// url='http://localhost/delifoodconnect/insert_datmonfood.php';
//   Thanhtoan(){
//     if(this.name !='' && this.email !='' && this.tel !='' && this.phuong !='' && this.diachi !='' && this.quan !='')
    
//         {
//           this._http.get(this.url + "?namefood="+this.datmon.Foodname+"&&hoten="+this.name+'&&email='+this.email+'&&phuong='+this.phuong+'&&quan='+this.quan+'&&soluong='+this.sl+"&&tongtien="+this.total+'&&sdt='+this.tel).subscribe(result =>{console.log(result)})
//            alert("đặt món thành công ")
//           }
//     else 
//     {
//       alert("vui lòng điền đầy đủ thông tin")
//     }
// // console.log(quan)
//   }
  ngOnInit() {
  //   const id = + this._route.snapshot.paramMap.get('id');

  // // this._foodservice.getSouthFoodByID(id).subscribe(dm => this.datmon = dm);
  // // this._foodservice.getSouthFood().subscribe(dm => this.data = dm);
  // this.totalPrice();
  }
//   // data: SouthsideFood[];
// so:number = 1;
// total:number = 0;
// sodem:number=1;
//  sl:number=1;


// totalPrice(){
//     this.total = 0;
//     const id = + this._route.snapshot.paramMap.get('id');
//     this._foodservice.getSouthFoodByID(id).subscribe(dm => this.datmon = dm);

//       // this.total += (this.[datmonnbid-1].Gia * this.datmonnb[id-1].soluong);
//      //
//       var kq =Number(this.data[id-1].tongtien)*this.sodem;
//       this.total =this.total+kq;
//   }
//  add(pid){
//     for(var i=0;i<this.data.length;i++){
//       if(this.data[i].FoodId === pid)
//       {  
//         // this.data[i].Quality += 1;
//         this.sodem =this.sodem+Number(this.data[i].soluong);
//        // this.sl = Number(this.datmonnb[i].soluong)+1;
//        this.sl=this.sodem;
//         }           
//     }
//     this.totalPrice();  
//   }


//   del(pid){
//      for(var i=0;i<this.data.length;i++){
//       this.so=Number(this.data[i].soluong)
//       if(this.data[i].FoodId === pid)
//       {  
//          // this.data[i].Quality -= 1;
//          // this.sl = Number(this.data[i].Quality)-1;
//          if(this.sodem>1){
//             this.sodem =this.sodem-Number(this.data[i].soluong);
//             this.sl=this.sodem;
//          }
//       }     
//     }  
//     this.totalPrice();
//     }

  onBack(): void {
    this.location.back();
    setTimeout(() => {
      window.scrollTo(0, 800);
    }, 500);
  }
}
