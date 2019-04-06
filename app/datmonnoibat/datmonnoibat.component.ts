import { Component, OnInit } from '@angular/core';
import {FoodService} from '../food.service';
import { ActivatedRoute } from '@angular/router';
// import { FoodNoiBat } from '../food';
import {Location} from "@angular/common";
import {HttpClient} from "@angular/common/http" 
// import { url } from 'inspector';
@Component({
  selector: 'app-datmonnoibat',
  templateUrl: './datmonnoibat.component.html',
  styleUrls: ['./datmonnoibat.component.css']
})
export class DatmonnoibatComponent implements OnInit {
// datmonnoibat : FoodNoiBat;

//   constructor(
//     private _foodservice: FoodService,
//     private _route: ActivatedRoute,
//     private location: Location,
//     private _http:HttpClient) { }
//   name='';
//   email='';
//   tel='';
//   phuong='';
//   diachi='';
//   quan = "";
//   url="http://localhost/delifoodconnect/insert_datmonfoodnoibat.php";
//   Thanhtoan(){
//     if(this.name !='' && this.email !='' && this.tel !='' && this.phuong !='' && this.diachi !='' && this.quan !='')
//     { 
//       this._http.get(this.url+"?name_foodnb="+this.datmonnoibat.FoodNoiBat_name+
//       "&&hotennb="+this.name+"&&emailnb="+this.email+"&&diachinb="+this.diachi+"&&phuongnb="+this.phuong+"&&quannb="+this.quan+"&&tongtiennb="+this.total+"&&soluongnb="+this.sl+"&&sdtnb="+this.tel).subscribe(result =>{console.log(result)})
   
//       alert("đặt món thành công ")
//     }
//     else 
//     {

//       alert("vui lòng điền đầy đủ thông tin")
//     }
    // console.log("hello");
  //   this._http.get(this.url+"?name_foodnb="+this.datmonnoibat.FoodNoiBat_name+
  //   "&&hotennb="+this.name+"&&emailnb"+this.email+"&&diachinb"+this.diachi+"&&phuongnb"+this.phuong+"&&quannb"+this.quan+"&&tongtiennb"+this.total+"&&soluongnb"+this.sl+"&&sdtnb"+this.tel).subscribe(result =>{console.log(result)})
  //  // console.log(this.datmonnoibat.FoodNoiBat_name);
    
//   }



  ngOnInit() {
//     const id = + this._route.snapshot.paramMap.get('id');
//   this._foodservice.getFoodNoiBatbyID(id).subscribe(dm => this.datmonnoibat = dm);
//   this._foodservice. getAllFoodNoiBat().subscribe(dm => this.datmonnb = dm);
// this.totalPrice();
  }
// datmonnb:FoodNoiBat[];
// so:number = 1;
// total:number = 0;
// sodem:number=1;
//  sl:number=1;

//  totalPrice(){
    // this.total = 0;
    // const id = + this._route.snapshot.paramMap.get('id');
    // this._foodservice.getFoodNoiBatbyID(id).subscribe(p => this.datmonnoibat = p);

    //   // this.total += (this.[datmonnbid-1].Gia * this.datmonnb[id-1].soluong);
    //  //
    //   var kq =Number(this.datmonnb[id-1].tongtien)*this.sodem;
    //   this.total =this.total+kq;
//   }
//  add(pid){
//     for(var i=0;i<this.datmonnb.length;i++){
//       if(this.datmonnb[i].FoodNoiBat_Id === pid)
//       {  
//         // this.datmonnb[i].Quality += 1;
//         this.sodem =this.sodem+Number(this.datmonnb[i].soluong);
//        // this.sl = Number(this.datmonnb[i].soluong)+1;
//        this.sl=this.sodem;
//         }           
//     }
//     this.totalPrice();  
//   }


//   del(pid){
//      for(var i=0;i<this.datmonnb.length;i++){
//       this.so=Number(this.datmonnb[i].soluong)
//       if(this.datmonnb[i].FoodNoiBat_Id === pid)
//       {  
//          // this.datmonnb[i].Quality -= 1;
//          // this.sl = Number(this.datmonnb[i].Quality)-1;
//          if(this.sodem>1){
//             this.sodem =this.sodem-Number(this.datmonnb[i].soluong);
//             this.sl=this.sodem;
//          }
//       }     
//     }  
//     this.totalPrice();
//     }


  onBack(): void {
    // this.location.back();
    setTimeout(() => {
      window.scrollTo(0, 800);
    }, 500);
  }


}
