import { Injectable } from '@angular/core';
// import { SouthsideFood, NguyenLieu, FoodNoiBat, NguyenLieuNoiBat, ThongTinHuuIch, Image } from './Food';

import {catalog} from './food';
import {product,Image} from './food';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
 

  // private SouthsideFood:string='read_southsidefood.php';
  // private NguyenLieu:string='read_nguyenlieu.php';
  // private FoodNoiBat:string='read_foodnoibat.php';
  // private NguyenLieuNoiBat:string='read_nguyenlieunoibat.php';
  // private Image:string='read_image.php';

  // baseUrl="http://localhost/delifoodconnect/";
//   SouthsideFoods:SouthsideFood[];

//  SouthsideFoodURL:string='http://localhost/delifoodconnect/read_southsidefood.php';
//  NguyenLieu:string='read_nguyenlieu.php';
//   private FoodNoiBat:string='read_foodnoibat.php';
//   private NguyenLieuNoiBat:string='read_nguyenlieunoibat.php';
//   private Image:string='read_image.php';
  // constructor(private _http: HttpClient){}
//  service food + detail + hinhanh va nguyen lieu
  // getSouthFood(): Observable<SouthsideFood[]> {
    // return this._http.get<SouthsideFood[]>(this.url+this.SouthsideFood, {responseType: 'json'} )
    // return this._http.get( this.url+this.SouthsideFood).map(res=>res.json())
  //   return this.http.get(`${this.SouthsideFoodURL}/list`).pipe(
  //     map((res) => {
  //       this.SouthsideFoods = res['SouthsideFood'];
  //       return this.SouthsideFoods;
  // }
  //     ));
// }

url:string="http://localhost/delifoodconnect/";
// cata_log: catalog[]=[
//   {
//   'id_catalog':1,
//   'name_catalog': 'món ăn miền nam',
//   'parent_id': 1,
// },
// {
//   'id_catalog':2,
//   'name_catalog': 'món ăn nổi bật',
//   'parent_id': 2,
// }


// ]

// products:product[]=[
//   {
//   'id_product': 1,
//   'name_product':'BÁNH XÈO' ,
//   'catalog_id':1,
//   'price': 139,
//   'discount':0, 
//   'img_link': './assets/img/banh-xeo.png',
//   'img_list': '',
//   'created': 1,
//   'view': 1,
//   'info_product':' Bánh xèo là món ăn rất nổi tiếng của Việt Nam và được biến tấu tùy vùng miền, rất ngon và hấp dẫn.',
// },
// {
//   'id_product': 2,
//   'name_product':'BÚN RIÊU CUA XÍ QUÁCH' ,
//   'catalog_id':1,
//   'price': 139,
//   'discount':0, 
//   'img_link': './assets/img/banh-xeo.png',
//   'img_list': '',
//   'created': 1,
//   'view': 1,
//   'info_product':' Bánh xèo là món ăn rất nổi tiếng của Việt Nam và được biến tấu tùy vùng miền, rất ngon và hấp dẫn.',
// },
// {
//   'id_product': 3,
//   'name_product':'BÚN RIÊU CUA XÍ QUÁCH' ,
//   'catalog_id':2,
//   'price': 139,
//   'discount':0, 
//   'img_link': './assets/img/banh-xeo.png',
//   'img_list': '',
//   'created': 1,
//   'view': 1,
//   'info_product':' Bánh xèo là món ăn rất nổi tiếng của Việt Nam và được biến tấu tùy vùng miền, rất ngon và hấp dẫn.',
// },
// {
//   'id_product': 4,
//   'name_product':'BÚN RIÊU CUA XÍ QUÁCH' ,
//   'catalog_id':2,
//   'price': 139,
//   'discount':0, 
//   'img_link': './assets/img/banh-xeo.png',
//   'img_list': '',
//   'created': 1,
//   'view': 1,
//   'info_product':' Bánh xèo là món ăn rất nổi tiếng của Việt Nam và được biến tấu tùy vùng miền, rất ngon và hấp dẫn.',
// }

// ]


constructor(private _http: HttpClient){}

private read_product_where_idcatalog='read_product_where_idcatalog.php?id_catalog=';
private SouthsideFood='read_product.php?';


// getCatalog(): Observable<catalog[]> {
//     return of(this.cata_log);
//   }
//   getSouthFoodbyidcatalog(id: number): Observable<catalog> {
//     return of(this.cata_log.find(f => f.parent_id === id));
//   }

getCatalog(): Observable<catalog[]> {
      return this._http.get<catalog[]>(this.url+this.SouthsideFood, {responseType: 'json'});
    }
// getSouthFoodbyidcatalog(id:number): Observable<catalog> {
//      return this._http.get<catalog>(this.url+this.SouthsideFood+'/'+id)
//      }

getSouthFoodbyidcatalog(id:number): Observable<catalog> {
     //  return this._http.get<catalog>(this.url+this.SouthsideFood+'/'+id)
       return this._http.get<catalog>(this.url+"read_product_where_idcatalog.php?catalog_id="+id)
       }





    //  getNguyenLieu(id: number): Observable<NguyenLieu> {
      //   return of(this.NguyenLieuFOOD.find(n => n.ID_nguyenlieu === id));
      // }
//     getFoodNoiBatbyID(id: number): Observable<FoodNoiBat> {
//           return this._http.get<FoodNoiBat>(this.FoodNoiBat+"/"+id);
//         }




// url:string="'http://localhost/delifoodconnect/'";
// SouthsideFood='read_southsidefood.php';
// NguyenLieu = 'http://localhost/delifoodconnect/read_nguyenlieu.php';
// FoodNoiBat='http://localhost/delifoodconnect/read_foodnoibat.php';
// NguyenLieuNoiBat='http://localhost/delifoodconnect/read_nguyenlieunoibat.php';
// Image='http://localhost/delifoodconnect/read_image.php';
//  //  service food + detail + hinhanh va nguyen lieu
//   getSouthFood(): Observable<SouthsideFood[]> {
//     return this._http.get<SouthsideFood[]>(this.SouthsideFood, {responseType: 'json'});
//   }
//   getSouthFoodByID(id: number): Observable<SouthsideFood> {
//     return this._http.get<SouthsideFood>(this.SouthsideFood+"/"+id);
//   }
//   // getSouthFoodByID1(id: number): Observable<SouthsideFood> {
//   //   return of(this.Food.find(f => f.FoodId === id));
//   // }
//   getNguyenLieu(id: number): Observable<NguyenLieu> {
//     return this._http.get<NguyenLieu>(this.NguyenLieu+"/"+id);
//   }

//   //  service food noi bat+ detail va nguyen lieu
//   getAllFoodNoiBat(): Observable<FoodNoiBat[]> {
//     return this._http.get<FoodNoiBat[]>(this.FoodNoiBat, {responseType: 'json'});
//   }

//   getFoodNoiBatbyID(id: number): Observable<FoodNoiBat> {
//     return this._http.get<FoodNoiBat>(this.FoodNoiBat+"/"+id);
//   }
//   getNguyenLieuNB(id: number): Observable<NguyenLieuNoiBat> {
//     return this._http.get<NguyenLieuNoiBat>(this.NguyenLieuNoiBat+"/"+id);
//   }
//   getImage(): Observable<Image[]> {
//     return this._http.get<Image[]>(this.Image, {responseType: 'json'});
//   }





















  // Food: SouthsideFood[] = [
  //   {
  //     'FoodId': 1,
  //     'Foodname': 'BÁNH XÈO',
  //     // 'Foodname1': 'BANH XEO',
  //     'info': 'Bánh xèo là món ăn rất nổi tiếng của Việt Nam và được biến tấu tùy vùng miền, rất ngon và hấp dẫn.',
  //     'img': './assets/img/banh-xeo.png',
  //     'video': '',
  //     'star': 5,
  //     'soluong':1,
  //     'tongtien':130,
  //     // tslint:disable-next-line:max-line-length
  //     'soche1': '– Pha bột: cho từ từ nửa lít nước cốt dừa vào tô bột, khuấy đều lên, nêm 1/2m muối, 1/2m hạt nêm Aji-ngon®, 1/2M bột nghệ và 1/2 chén hành lá.',
  //     'soche2': '– Ướp tôm, thịt ba rọi cắt sợi nhỏ vói 1M hành tỏi băm, 1/2m tiêu, 1/2m hạt nêm Aji-ngon®, 1m đường. Giá rửa sạch, trộn với hành tây và đầu hành lá.',
  //     'soche3': '– Hành lá rửa sạch, phần đầu cắt khúc, chẻ ngọn, phần lá cắt nhỏ. Hành tây cắt lát. Đậu xanh ngâm nở, nấu chín nhưng không nát.',
  //     'soche4': '',
  //     'thuchien1': '– Làm nóng dầu trong chảo, cho cục mỡ vào chảo, thoa cho mỡ bám đều rồi cho ít tôm thịt vào xào săn, sau đó cho bột vào, nghiêng chảo và xoay cho bột bám đều vào tôm thịt và mặt chảo, rắc đậu xanh, giá, hành tây, đầu hành lá vào, đậy vung lại trong 2 phút, mở nắp cho thêm ít dầu ăn lên rìa bánh, để thêm 1 lúc cho bánh ráo và giòn, gấp đôi bánh lại rồi xúc bánh ra mẹt có lót lá chuối.',
  //     'thuchien2': '– Pha nước mắm: Pha 5 M nước dừa tươi đã đun sôi, để nguội với 1M nước mắm, 1M đường, và 1M chén Giấm gạo lên men LISA®, cuối cùng cho thêm 1 ít đồ chua, tỏi băm và ớt.',
  //     'thuchien3': ' ',
  //     'thuchien4': ' ',
  //     'thuchien5': ' ',
  //     'thuchien6': ' ',
  //     'cachdung': 'Xếp bánh ra dĩa, ăn kèm cải xanh, xà lách, rau thơm các loại, chấm nước mắm và đồ chua.',

  //   },
  //   {
  //     'FoodId': 2,
  //     'Foodname': 'BÚN RIÊU CUA XÍ QUÁCH',
  //     'info': 'Bún riêu là món ăn truyền thống Việt Nam, nay được bổ sung thêm xí quách trở nên hấp dẫn hơn nữa, trong đó vị chua nhẹ của cà chua và giấm gạo Lisa hòa quyện cùng mùi mắm tôm đặc trưng, vị cua ngọt bùi cùng vị xí quách béo béo, chắc chắn làm hài lòng cả những thực khách khó tính nhất.',
  //     'img': './assets/img/bun-rieu-cua.png',
  //     'video': '',
  //     'star': 5,
  //     'soluong':1,
  //     'tongtien':140,
  //     'soche1': '– Xương ống nấu lấy 1 lít nước dùng, phần thịt gỡ để riêng.',
  //     'soche2': '– Lọc cua xay với nước dùng, lọc tiếp với 1 lít nước. Thêm 0.5 lít nước vào xác cua đun sôi 3 phút, chắt lấy nước, để nguội.',
  //     'soche3': '– Cà chua: 2 trái băm nhuyễn, 2 trái cắt múi cau. Hành lá, ngò gai cắt nhỏ. Bún trụng sơ.',
  //     'soche4': ' ',
  //     'thuchien1': '– Hòa tan nước cua với 2m hạt nêm Aji-ngon® và vài cục đá lạnh, đun với lửa lớn, thỉnh thoảng khuấy nhẹ dưới đáy nồi.',
  //     'thuchien2': '– Trong khi chờ thịt cua đóng thành váng, xào cà chua băm với 1M dầu điều, xào cho cà chua vừa ráo nước thì tắt bếp, cho ra tô.',
  //     'thuchien3': '– Phi thơm hành tím với mỡ, cho gạch cua vào, tắt lửa, đảo đều, cho ra tô.',
  //     'thuchien4': '– Khi thấy thịt cua đóng thành váng, hạ lửa, để sôi riu riu, khi thịt cua nổi hết lên mặt, vớt ra để riêng.',
  //     'thuchien5': '– Cho 1/2 lượng gạch phủ lên bề mặt váng cua, phần còn lại cho vào nồi nước cua.',
  //     'thuchien6': '– Cho cà chua đã xào và xí quách vào nồi nước cua, nêm 1M bột ngọt AJI-NO-MOTO®, 1M muối, 1/2M nước mắm, 1M Giấm gạo lên men LISA®, 1m mắm tôm và 1/2m đường. Cuối cùng cho cà chua cắt múi cau vào.',
  //     'cachdung': 'Cho bún ra tô, thêm váng cua, thịt xí quách, chan nước dùng, rắc hành lá và ngò gai lên trên. Dùng với rau sống, chanh ớt, mắm tôm hoặc nước.',

  //   },
  //   {
  //     'FoodId': 3,
  //     'Foodname': 'BÁNH MÌ BÌ SÀI GÒN',
  //     'info': 'Món ăn sáng phổ biến, vừa ngon vừa đảm bảo nguồn năng lượng học tập và làm việc cho mọi người, đặc biệt chế biến nhanh gọn, không tốn nhiều thời gian buổi sáng.',
  //     'img': './assets/img/banh-mi.png ',
  //     'video': '',
  //     'star': 5,
  //     'soluong':1,
  //     'tongtien':150,
  //     'soche1': '– Hành tỏi ớt băm nhỏ, lấy 1 ít nước cốt hành tỏi. Phi thơm 1 ít tỏi.',
  //     'soche2': '– Ướp thịt với 2m nước hành tỏi, 1/2m tiêu, 1/2m Hạt nêm Aji-ngon, 1/3m ngũ vị hương, để thấm 30 phút.',
  //     'soche3': '– Làm bì: da heo luộc qua nước có pha 1m Hạt nêm Aji-ngon® vừa chín tới vớt ra ngâm nước đá. Sau đó, nghiêng dao lạng thật mỏng rồi cắt sợi.',
  //     'soche4': '– Làm mỡ hành: phi 2M dầu nóng chế vào chén đựng hành lá có 1 ít muối và khuấy đều.',
  //     'thuchien1': '– Pha nước mắm: trộn đều 5M nước, 2M nước mắm,1M Giấm gạo lên men LISA®, 2M đường, 1 ít tỏi băm.',
  //     'thuchien2': '– Đun nóng ít đầu, chiên thịt xém mắt, sau đó thêm nước dừa và nấu nhỏ lửa đến khi thịt chín, để nguội, cắt sợi cỡ cọng giá.',
  //     'thuchien3': '– Trộn đều thịt, da, thính, tỏ băm, tỏi phi, 1/4m muối, 1/2m đường, 1/2m Bột ngọt AJI-NO-MOTO®.',
  //     'thuchien4': '– Nướng lại bánh mì cho nóng, cắt dọc, phết mỡ hành, sau đó xếp bì, đồ chua, đầu hành, ngò rí, ớt cắt sợi. Chan nước mắm chua ngọt, kẹp lại.',
  //     'thuchien5': ' ',
  //     'thuchien6': ' ',
  //     'cachdung': '– Dùng khi bánh mì còn nóng sẽ ngon hơn.',

  //   },
  //   {
  //     'FoodId': 4,
  //     'Foodname': 'LẨU XÍ QUÁCH CHUA CAY',
  //     'info': 'Chẳng còn gì tuyệt hơn khi được xì xụp húp món Lẩu xí quách chua cay cùng bạn bè khi ngoài trời mưa tầm tã. Nấu xí quách ngon như ngoài tiệm đơn giản hơn bạn nghĩ. Cùng xem và vào bếp thực hành ngay nhé! ',
  //     'img': './assets/img/lau-xi-quach.png ',
  //     'video': '',
  //     'star': 5,
  //     'soluong':1,
  //     'tongtien':190,
  //     'soche1': '– Xương heo rửa sạch để ráo, chần qua nước sôi.',
  //     'soche2': '– Sả cây cắt khúc đập dập. Hành tím, ớt đập dập. Cà chua cắt múi cau. Lá chanh cắt sợi. Lá quế cắt nhỏ.',
  //     'soche3': '– Đậu hũ chiên cắt miếng vuông 2cm.',
  //     'soche4': ' ',
  //     'thuchien1': '– Phi thơm sả, hành tím và ớt hiểm, cho tiếp nấm rơm, xương heo vào xào săn. Cho 1.5 lít nước vào nấu sôi, cho một gói Aji-Quick® Gia vị nêm sẵn Lẩu Thái vào, cho riềng vào nấu cùng đến khi xương chín mềm. Cho cà chua, đậu hũ chiên vào, nấu thêm 10 phút. Tắt lửa, cho lá chanh, lá quế và sữa tươi vào.',
  //     'thuchien2': ' ',
  //     'thuchien3': ' ',
  //     'thuchien4': ' ',
  //     'thuchien5': ' ',
  //     'thuchien6': ' ',
  //     'cachdung': '– Múc nước dùng ra nồi lẩu, ăn kèm với bún, các loại rau, chấm nước mắm và ớt cắt lát.',

  //   },
  //   {
  //     'FoodId': 5,
  //     'Foodname': 'THỊT ẾCH XÀO GIẤM TỎI',
  //     'info': 'Thịt ếch mềm ngọt, thấm vị đậm đà, thoang thoảng vị giấm chua dìu dịu, cắn vào một miếng lại thấy mùi lá quế thơm nồng, tiêu sọ cay cay. Món Thịt ếch xào giấm tỏi này ăn với bánh mì hay cơm đều ngon cả. ',
  //     'img': './assets/img/thit-ech.png ',
  //     'video': '',
  //     'star': 5,
  //     'soluong':1,
  //     'tongtien':200,
  //     'soche1': '– Cắt nhỏ 1 ít lá quế, còn lại để nguyên. Tỏi tép bóc vỏ, đập dập. Tiêu sọ đập dập. Ớt hiểm đập dập. Hành tây cắt múi cau. Ớt sừng bỏ ruột, cắt miếng hình thoi.',
  //     'soche2': '– Đùi ếch chặt miếng vừa ăn, ướp gia vị gồm: 1m hạt nêm Aji-ngon®, 1M Giấm gạo lên men LISA®, lá quế cắt nhỏ, 1M hành tỏi băm, 2 trái ớt hiểm, 1/3M tiêu sọ, để thấm.',
  //     'soche3': '– Pha hỗn hợp gia vị: 1M đường, 2,5M Giấm gạo lên men LISA®, 1M dầu hào. ',
  //     'soche4': ' ',
  //     'thuchien1': '– Đun nóng 2M dầu ăn, chiên tỏi tép cho vàng đều, vớt ra để riêng.',
  //     'thuchien2': '– Đun nóng 2M dầu điều, cho thêm hành và tỏi băm, xào thịt ếch với lửa lớn rồi cho hỗn hợp gia vị vào, thêm 1/2 chén nước, cho tiếp hành tây, ớt sừng, cuối cùng thêm lá quế, tỏi chiên, tắt lửa, trộn đều.',
  //     'thuchien3': ' ',
  //     'thuchien4': ' ',
  //     'thuchien5': ' ',
  //     'thuchien6': ' ',
  //     'cachdung': 'Cho ếch xào ra đĩa, rắc tiêu, bày thêm lá húng quế. Dọn kèm nước tương và ớt cắt lát. Dùng với cơm, hoặc ăn chơi với bánh mì..',

  //   },
  //   {
  //     'FoodId': 6,
  //     'Foodname': 'ĐẬU HŨ DỒN TÔM KHO CHAO',
  //     'info': 'Đậu hũ chiên bùi bùi, nhân tôm thơm phức thoang thoảng mùi hành lá, nước kho pha lẫn mùi nước tương đặc trung và vị cay the nhẹ của ớt trái. ',
  //     'img': './assets/img/dau-hu-don-tom.png ',
  //     'video': '',
  //     'star': 5,
  //     'soluong':1,
  //     'tongtien':200,
  //     'soche1': '– Tôm tươi đập dập băm nhuyễn trộn đều với giò sống, ướp 1/2M hạt nêm Aji-ngon®, 1/3M bột ngọt AJI-NO-MOTO®®, ít tiêu và hành lá cắt khúc, để thấm. Ớt hiểm đập dập.',
  //     'soche2': '– Cắt đôi miếng đậu hũ, dùng dao rạch nhẹ lấy bớt phần ruột, sau đó nhồi nhân vào bên trong, đem chiên sơ, để ráo.',
  //     'soche3': '– Pha xốt kho: 1M đường, 3 viên chao trắng, 1/2 chén nước tương “Phú Sĩ”, 1/2 chén nước trắng. ',
  //     'soche4': ' ',
  //     'thuchien1': 'Kho đậu hũ dồn tôm với nước xốt, thêm ớt trái, kho đến khi nước sệt lại, nếm vị vừa ăn, tắt lửa, cho hành lá cắt khúc vào.',
  //     'thuchien2': ' ',
  //     'thuchien3': ' ',
  //     'thuchien4': ' ',
  //     'thuchien5': ' ',
  //     'thuchien6': ' ',
  //     'cachdung': 'Cho đậu hũ ra dĩa, dùng với cơm trắng.',

  //   }, {
  //     'FoodId': 7,
  //     'Foodname': 'TAI HEO NGÂM GIẤM',
  //     'info': 'Món ăn ngày Tết của người Nam bộ, có thể dùng để nhâm nhi, cuốn với bánh tráng cũng ngon mà ăn kèm với bánh tét thì rất tuyệt. ',
  //     'img': './assets/img/tai-heo-ngam-giam.png ',
  //     'video': '',
  //     'star': 5,
  //     'soluong':1,
  //     'tongtien':190,
  //     'soche1': '– Tai heo cạo rửa sạch, luộc từ nước lạnh với 1M muối hột đến khi chín, vớt ra ngâm vào nước lạnh có pha 1 ít phèn chua cho nguội, rửa sạch lại, cắt đôi.',
  //     'soche2': '– Hành tím và tỏi bóc vỏ, cắt lát.',
  //     'soche3': ' ',
  //     'soche4': ' ',
  //     'thuchien1': '– Nấu nước giấm đường: cho vào nồi 500ml Giấm gạo lên men LISA®, 400g đường phèn, 1,5 lít nước, 1M muối hột, đun sôi, lọc lại rồi để nguội.',
  //     'thuchien2': '– Xếp tai heo, hành tím, tỏi và ớt vào lọ thủy tinh, dùng tre gài giữ trên mặt, đổ nước giấm đường vào ngập tai heo, đậy nắp để 3 ngày là dùng được.',
  //     'thuchien3': ' ',
  //     'thuchien4': ' ',
  //     'thuchien5': ' ',
  //     'thuchien6': ' ',
  //     'cachdung': 'Lấy tai heo ra cắt thành miếng mỏng, xếp ra dĩa, khi ăn cuốn với bánh tráng, rau sống, chuối hột, khế, chấm mắm nêm pha với thơm, đường, tỏi và ớt.',

  //   },
  //   {
  //     'FoodId': 8,
  //     'Foodname': 'THỊT QUAY KHO DƯA CẢI',
  //     'info': 'Thịt quay kho dưa cải là món ăn ngon tiêu biểu với nước tương, dễ thực hiện, bổ sung vào thực đơn quen thuộc trên bàn ăn của các gia đình vào dịp cuối tuần. ',
  //     'img': './assets/img/thit-quay-kho-dua-cai.png ',
  //     'video': '',
  //     'star': 5,
  //     'soluong':1,
  //     'tongtien':199,
  //     'soche1': '– Dưa cải cắt khúc dài 5cm, xào qua với hành phi, cho ra dĩa. Hành lá phần đầu trắng băm nhuyễn, lá cắt nhỏ.',
  //     'soche2': '– Thịt cắt miếng vuông 4cm, ướp với 1m đường, 1/2M nước tương LISA, 1/2m Bột ngọt Aji-no-moto®, 1m đầu hành băm và 1/2 trái ớt đập dập, bỏ hạt.',
  //     'soche3': ' ',
  //     'soche4': ' ',
  //     'thuchien1': '-Rang hoa hồi, tiêu sọ đập dập với dầu điều, cho thịt vào xào săn, nêm 3M nước tương LISA, xào đến khi thịt thấm gia vị, cho thêm nước dừa, dưa cải, giảm nhỏ lửa, kho đến khi thịt và dưa cải mềm đều, nước kho hơi sánh, nêm lại vừa ăn.',
  //     'thuchien2': '– Đun nóng ít đầu, chiên thịt xém mắt, sau đó thêm nước dừa và nấu nhỏ lửa đến khi thịt chín, để nguội, cắt sợi cỡ cọng giá.',
  //     'thuchien3': ' ',
  //     'thuchien4': ' ',
  //     'thuchien5': ' ',
  //     'thuchien6': ' ',
  //     'cachdung': '– Dùng khi bánh mì còn nóng sẽ ngon hơn.',

  //   },
  //   {
  //     'FoodId': 9,
  //     'Foodname': 'LẨU CÁ THÁC LÁC KHỔ QUA',
  //     'info': 'Ai bảo để nấu lẩu cho những dịp đặc biệt tốn nhiều thời gian và công sức? Trong kỳ này, đầu bếp sẽ giới thiệu các bạn thực hiện món LẨU CÁ THÁC LÁC KHỔ QUA thơm ngon, thanh mát để bạn chiêu đãi cả nhà dịp cuối tuần. Món ngon mà còn dễ làm nữa đó các bạn.',
  //     'img': './assets/img/lau-ca-thac-lac.png ',
  //     'video': '',
  //     'star': 5,
  //     'soluong':1,
  //     'tongtien':159,
  //     'soche1': '– Cho xương heo và 2 củ hành tím đập dập vào nồi nấu lấy 1.2 lít nước dùng.',
  //     'soche2': '– Khổ qua bỏ ruột, rửa sạch, bào mỏng. Cà rốt tỉa hoa, cắt lát. Hành lá, ngò rí cắt khúc, đầu hành trắng băm nhỏ. Các loại nấm rửa sạch.',
  //     'soche3': '– Ướp cá với đầu hành trắng, 1m hạt nêm Aji-ngon®, 1M cọng thì là băm, một ít tiêu và một ít dầu ăn, quết cá thật dẻo sau đó vo thành viên vừa ăn. ',
  //     'soche4': ' ',
  //     'thuchien1': '– Đun sôi 1.2 lít nước dùng, cho viên cá vào nấu chín, cho cà rốt vào nêm 1.5M muối, 1.5M bột ngọt AJI-NO-MOTO®, 1/2M hạt nêm Aji-ngon®, tắt lửa, rắc 1/2M tiêu.',
  //     'thuchien2': '',
  //     'thuchien3': ' ',
  //     'thuchien4': ' ',
  //     'thuchien5': ' ',
  //     'thuchien6': ' ',
  //     'cachdung': '– Xếp khổ qua, hành lá, ngò rí và các loại nấm ra dĩa. Đặt nồi nước dùng lên bếp, khi ăn cho các loại rau nấm vào. Ăn kèm với bún, chấm nước mắm và ớt cắt lát.',
  //   },
  //   {
  //     'FoodId': 10,
  //     'Foodname': 'BÁNH SEN CHIÊN GIÒN',
  //     'info': 'Món bánh giòn rượm, đẹp mắt vừa lạ miệng vừa tốt cho sức khỏe. Hình thức tuy đơn giản nhưng giàu mùi vị: thơm bùi hạt sen, dẻo ngọt củ sen, béo nhẹ sốt Ajimayo và thơm thơm của mè. Củ sen và hạt sen còn là những vị thuốc quý giúp thanh lọc cơ thể, hỗ trợ tiêu hóa, rất thích hợp làm bữa phụ thơm ngon trong những ngày hè ',
  //     'img': './assets/img/banh-sen-chien-gion.jpg ',
  //     'video': '',
  //     'star': 5,
  //     'soluong':1,
  //     'tongtien':149,
  //     'soche1': '– Củ sen bào vỏ, rửa sạch, cắt lát ngang dày 3mm, ngâm nước pha giấm 10 phút, vớt ra để ráo. Hạt sen luộc chín tới trong nước có ít muối.',
  //     'soche2': '– Pha Aji-Quick® Bột Chiên Giòn Hải Sản theo bao bì, thêm 1M mè đen, 1M húng lủi băm nhỏ, 1m tỏi ớt băm vào trộn đều cùng củ sen và hạt sen.',
  //     'soche3': '',
  //     'soche4': ' ',
  //     'thuchien1': '– Đun nóng dầu ăn, múc 1 miếng củ sen và xếp vài hạt sen lên trên, cho bánh vào chảo dầu trở đều hai mặt đến khi chín vàng, vớt ra để ráo dầu.',
  //     'thuchien2': '– Pha xốt chấm: 3M xốt Mayonnaise Aji-Mayo®, 1m nước chanh, 1M tương ớt, 1/2M tương cà.',
  //     'thuchien3': ' ',
  //     'thuchien4': ' ',
  //     'thuchien5': ' ',
  //     'thuchien6': ' ',
  //     'cachdung': '– Xếp bánh ra dĩa, dùng bao tam giác đựng xốt vào, trang trí xốt trên mặt bánh, rắc thêm tỏi phi và lá rau húng lủi lên trên.',
  //   },
  //   {
  //     'FoodId': 11,
  //     'Foodname': 'HẾN TRỘN HOA CHUỐI',
  //     'info': 'Vị ngọt thơm của hến hòa trong vị chua nhẹ của lá chanh và giấm gạo lên men Lisa, thêm mè rang dậy mùi thơm, đó là chưa kể vị giòn giòn của hoa chuối và hành tây nữa làm món ăn thêm thú vị. Quý vị và các bạn hãy nhanh tay vào bếp làm ngay món này nhé. ',
  //     'img': './assets/img/hen-tron.png',
  //     'video': '',
  //     'star': 5,
  //     'soluong':1,
  //     'tongtien':129,
  //     'soche1': '– Đập dập gừng. Luộc hến với gừng đập giập, gỡ lấy thịt hến.',
  //     'soche2': '– Da heo cắt lát mỏng.',
  //     'soche3': '– Bắp chuối bào ngâm nước chanh cho trắng và không bị thâm. Hành tây cắt lát mỏng, ngâm nước đá. Rau răm, ngò gai cắt khúc 1cm. Lá chanh cắt nhuyễn.',
  //     'soche4': ' ',
  //     'thuchien1': '– Pha nước trộn: hòa tan 2/3m muối, 4M đường và 4M nước mắm, 2M tỏi ớt băm, 4M Giấm gạo lên men LISA®.',
  //     'thuchien2': '– Trộn da heo, bắp chuối và hến với 1/2 lượng nước trộn, để 2-3 phút thì chắt bớt nước. Tiếp tục thêm hành tây, lá chanh, ớt sừng, 1/2 lượng mè rang, 1/2 lượng hành phi, 1/2 lượng rau răm và ngò gai vào rồi trộn với lượng nước trộn còn lại, trộn đều hỗn hợp.',
  //     'thuchien3': ' ',
  //     'thuchien4': ' ',
  //     'thuchien5': ' ',
  //     'thuchien6': ' ',
  //     'cachdung': '– Trình bày món ăn ra dĩa. Rải đều ngò gai, rau răm, hành phi còn lại lên trên. Dùng kèm với bánh tráng mè nướng.',
  //   },
  //   {
  //     'FoodId': 12,
  //     'Foodname': 'CÁ NỤC KHO THƠM',
  //     'info': 'Nói đến món ăn miền Nam không thể không nhắc đến món cá nục kho, mang hương vị đậm đà quê hương, hấp dẫn, rất phù hợp dùng trong bữa cơm hằng ngày.',
  //     'img': './assets/img/ca-nuc-kho.png ',
  //     'video': '',
  //     'star': 5,
  //     'soluong':1,
  //     'tongtien':139,
  //     'soche1': '– Cá làm sạch, bẻ đầu nhét vào bụng. Ướp với ớt bột, 1/2m bột ngọt AJI-NO-MOTO®, muối, đầu hành lá.',
  //     'soche2': '– Thịt cắt cỡ ngón tay ướp đường, muối, tiêu, mắm, bột ngọt Aji-no-moto®. Để thấm.',
  //     'soche3': '– Thơm xắt miếng dày 3 li, ớt cắt khúc, hành lá cắt khúc',
  //     'soche4': ' – Mía chẻ nhỏ, cắt khúc vừa nồi, lót vào nồi đất.',
  //     'thuchien1': 'Xếp cá xen thịt ba rọi vào nồi, thêm thơm, ớt bột, 1m nước màu, 2m dầu điều, 2m đường, 4m nước mắm, đầu hành, tiêu, ớt tươi, bắc lên bếp nấu sôi 2-3 phút cho thịt cá săn và thấm màu, cho thêm nước sôi ngập cá, đậy vung, nấu lửa vừa cho thịt cá thấm gia vị, cá mềm xương và cạn nước.',
  //     'thuchien2': '',
  //     'thuchien3': ' ',
  //     'thuchien4': ' ',
  //     'thuchien5': ' ',
  //     'thuchien6': ' ',
  //     'cachdung': 'Dùng món kho với cơm, rau, dưa.',
  //   },
  //   {
  //     'FoodId': 13,
  //     'Foodname': 'CÁ LÓC HẤP BẦU',
  //     'info': 'Cá lóc hấp bầu là món ăn truyền thống nhưng có biến tấu 1 chút để tăng thêm giá trị món ăn và lạ miệng hơn, thích hợp cho người lớn tuổi lẫn trẻ con. ',
  //     'img': './assets/img/lau-ca-thac-lac.png ',
  //     'video': '',
  //     'star': 5,
  //     'soluong':1,
  //     'tongtien':149,
  //     'soche1': '– Cá lóc cắt miếng hình chữ nhật 7*4 cm, ướp với 1m hạt nêm Aji-ngon® và 1/2m tiêu. Thịt xay ướp với 1M đầu hành băm, 1m hạt nêm Aji-ngon®, 1 ít tiêu, 1/4m muối và 1m bột năng.',
  //     'soche2': '– Bầu chẻ dọc làm đôi, bỏ ruột, cắt ngang 4cm. Ớt sừng, cần tàu, hành lá và gừng cắt hạt lựu. Hòa tan 1,5M bột năng với ½ chén nước. Bún tàu ngâm mềm.',
  //     'soche3': '',
  //     'soche4': ' ',
  //     'thuchien1': '– Cho thịt vào miếng bầu, xếp cá lên trên, rải bún tàu dưới dĩa, cho vào nồi hấp 15 phút đến khi bầu và cá đều chín.',
  //     'thuchien2': '– Làm xốt: xào thêm gừng, cần tàu, hành lá và ớt, cho vào 1 chén nước, nêm 3M nước tương LISA, 2M đường, 1m muối và 1/2M hạt nêm Aji-ngon®, đun sôi, thêm bột năng pha loãng vào cho xốt hơi sệt lại.',
  //     'thuchien3': ' ',
  //     'thuchien4': ' ',
  //     'thuchien5': ' ',
  //     'thuchien6': ' ',
  //     'cachdung': 'Lấy dĩa cá ra khỏi nồi hấp, rưới xốt lên trên, trang trí với ngò rí, dùng nóng với cơm trắng, chấm kèm nước tương LISA.',
  //   },
  //   {
  //     'FoodId': 14,
  //     'Foodname': 'CÁ KHO TÀU',
  //     'info': 'Các chị em trổ tài làm món Cá kho tàu thay vì món Thịt kho tàu như thông thường nhé, đây là một món lạ cực kì ngon miệng cho cả nhà đó.  ',
  //     'img': './assets/img/ca-kho-tau.png ',
  //     'video': '',
  //     'star': 5,
  //     'soluong':1,
  //     'tongtien':139,
  //     'soche1': '– Đầu hành lá cắt khúc 4cm. Ớt hiểm đập dập.',
  //     'soche2': '– Thịt ba chỉ cắt lát mỏng.',
  //     'soche3': '– Cá làm sạch, cắt khúc 2cm, chiên áp chảo với dầu cho rám vàng 2 mặt rồi cho ra tô.',
  //     'soche4': '– Ướp cá, thịt với 1.5M nước mắm, 1M hạt nêm Aji-ngon®, 1M bột ngọt AJI-NO-MOTO®, 1M hành tím băm, 1/2M tiêu, 1M ớt bột, 4 trái ớt hiểm đập dập. ',
  //     'thuchien1': 'Cho cá, thịt ba chỉ, trứng lên bếp, cho nước dừa vào nấu với lửa vừa, nếm vị vừa ăn, cho đầu hành lá cắt khúc vào và tắt bếp.',
  //     'thuchien2': '',
  //     'thuchien3': ' ',
  //     'thuchien4': ' ',
  //     'thuchien5': ' ',
  //     'thuchien6': ' ',
  //     'cachdung': 'Dùng nóng với cơm trắng.',
  //   },
  //   {
  //     'FoodId': 15,
  //     'Foodname': 'ĐẬU QUE XÀO THỊT',
  //     'info': 'Từ lâu đậu que xào đã là một món ăn truyền thống rất quen thuộc với gia đình người Việt Nam, nhưng sự kết hợp của thịt và đậu que sẽ tạo nên sự mới mẻ cho món ăn, thêm nữa đậu que có màu xanh rất tươi, nhìn ngon mắt, hấp dẫn. ',
  //     'img': './assets/img/dau-que-xao-thit.png ',
  //     'video': '',
  //     'star': 5, 
  //     'soluong':1,
  //     'tongtien':139,
  //     'soche1': '– Thịt cắt lát mỏng, ướp 1/2m hạt nêm Aji-ngon®, 1 ít tiêu, tỏi băm, để thấm.',
  //     'soche2': '– Đậu que cắt khúc. Cà rốt cắt sợi. Hành lá, ngò rí cắt nhỏ. ',
  //     'soche3': '',
  //     'soche4': ' ',
  //     'thuchien1': 'Phi thơm tỏi, cho thịt heo vào xào, tiếp tục cho cà rốt, đậu que vào xào, nêm 1,5m hạt nêm Aji-ngon®, 4M nước, xào cho đậu que chín, thêm 1M xốt Mayonnaise Aji-Mayo® vào đảo đều, tắt bếp.',
  //     'thuchien2': '',
  //     'thuchien3': ' ',
  //     'thuchien4': ' ',
  //     'thuchien5': ' ',
  //     'thuchien6': ' ',
  //     'cachdung': 'Cho món ăn ra dĩa rắc thêm hành lá, ngò rí, dùng nóng với cơm.',
  //   },

  // ];


  // NguyenLieuFOOD: NguyenLieu[] = [
  //   {
  //     'ID_nguyenlieu': 1,
  //     'nguyenlieu1': '- Bột bánh xèo: 400g',
  //     'nguyenlieu2': '- Dừa nạo: 400g',
  //     'nguyenlieu3': '- Thịt ba rọi: 200g',
  //     'nguyenlieu4': '- Mỡ heo: 100g',
  //     'nguyenlieu5': '- Tôm bạc tươi: 200g',
  //     'nguyenlieu6': '- Gá sống: 300g',
  //     'nguyenlieu7': '- Đậu xanh cà: 100g',
  //     'nguyenlieu8': '- Hành lá: 200g Hành tây: 1/2 củ',
  //     'nguyenlieu9': '- Hành lá cắt nhỏ: 1/2 chén',
  //     'nguyenlieu10': '- Dừa: 1 trái',
  //     'nguyenlieu11': '- Đồ chua, ớt, hành tỏi băm, bột nghệ',
  //     'nguyenlieu12': '- Muối, tiêu đường, nước mắm, dầu ăn',
  //     'nguyenlieu13': '- Cải xanh, rau xà lách, rau thơm các loại',
  //     'nguyenlieu14': '- Giấm gạo lên men của Ajinomoto  Giấm gạo lên men của Ajinomoto',
  //     'nguyenlieu15': '- Hạt nêm (hương vị heo) bổ sung canxi',

  //   },
  //   {
  //     'ID_nguyenlieu': 2,
  //     'nguyenlieu1': '- Cua xay: 500g',
  //     'nguyenlieu2': '- Gạch cua: 100g',
  //     'nguyenlieu3': '- Xương ống: 1kg',
  //     'nguyenlieu4': '- Hành tím: 100g',
  //     'nguyenlieu5': '- Cà chua: 4 trái',
  //     'nguyenlieu6': '- Hành lá, ngò gai: 150g',
  //     'nguyenlieu7': '- Mỡ có tóp mỡ: 1/2 chén',
  //     'nguyenlieu8': '- Muối, đường, mắm tôm, dầu điều, nước mắm',
  //     'nguyenlieu9': '- Bún tươi, rau sống, ớt xay, chanh',
  //     'nguyenlieu10': '- Bột ngọt',
  //     'nguyenlieu11': '- Giấm gạo lên men của Ajinomoto  Giấm gạo lên men của Ajinomoto',
  //     'nguyenlieu12': '- Hạt nêm (hương vị heo) bổ sung canxi',
  //     'nguyenlieu13': ' ',
  //     'nguyenlieu14': ' ',
  //     'nguyenlieu15': ' ',

  //   },
  //   {
  //     'ID_nguyenlieu': 3,
  //     'nguyenlieu1': '- Thịt nách hoặc thịt ba chỉ: 300g',
  //     'nguyenlieu2': '- Da heo: 150g',
  //     'nguyenlieu3': '- Thính: 3M',
  //     'nguyenlieu4': '- Bánh mì: 4 ổ',
  //     'nguyenlieu5': '- Nước dừa: 1 chén',
  //     'nguyenlieu6': '- Đồ chua, ớt, ngò rí, hành tỏi',
  //     'nguyenlieu7': '- Ớt, hành lá, đường, muối',
  //     'nguyenlieu8': '- Nước mắm, ngũ vị hương, dầu ăn',
  //     'nguyenlieu9': '- Giấm gạo lên men của Ajinomoto  Giấm gạo lên men của Ajinomoto',
  //     'nguyenlieu10': '- Hạt nêm (hương vị heo) bổ sung canxi',
  //     'nguyenlieu11': ' ',
  //     'nguyenlieu12': ' ',
  //     'nguyenlieu13': ' ',
  //     'nguyenlieu14': ' ',
  //     'nguyenlieu15': ' ',

  //   },
  //   {
  //     'ID_nguyenlieu': 4,
  //     'nguyenlieu1': '- Xương cổ heo : 400g',
  //     'nguyenlieu2': '- Đậu hũ chiên : 1 miếng',
  //     'nguyenlieu3': '- Cà chua : 2 trái',
  //     'nguyenlieu4': '- Nấm rơm cắt chữ thập trên  ',
  //     'nguyenlieu5': '- đầu : 100g,Sả : 4 cây',
  //     'nguyenlieu6': '- Gia vị nêm sẵn Lẩu Thái',
  //     'nguyenlieu7': '- Hành tím : 10 củ',
  //     'nguyenlieu8': '- Ớt hiểm : 2 trái',
  //     'nguyenlieu9': '- Riềng cắt sợi : 15g',
  //     'nguyenlieu10': '- Chanh Bắc cắt sợi : 5 lá',
  //     'nguyenlieu11': '- Sữa tươi không đường : 1 chén',
  //     'nguyenlieu12': '- Lá quế : 3 nhánh,Bún tươi',
  //     'nguyenlieu13': '- Rau nhút, bông bí, kèo nèo, ',
  //     'nguyenlieu14': '- bông thiên lý, nấm bào ngư, bông so đũa',
  //     'nguyenlieu15': '- Dầu ăn, nước mắm',

  //   },
  //   {
  //     'ID_nguyenlieu': 5,
  //     'nguyenlieu1': '- Đùi ếch : 300g',
  //     'nguyenlieu2': '- Tỏi tép : 50g',
  //     'nguyenlieu3': '- Hành tây : 1/2 củ',
  //     'nguyenlieu4': '- Ớt sừng : 2 trái',
  //     'nguyenlieu5': '- Ớt hiểm : 2 trái',
  //     'nguyenlieu6': '- Húng quế : 1 ít',
  //     'nguyenlieu7': '- Đường, tiêu sọ, dầu hào, dầu điều, dầu ăn',
  //     'nguyenlieu8': '- Hành tỏi băm',
  //     'nguyenlieu9': '- Hạt nêm (hương vị heo) bổ sung canxi',
  //     'nguyenlieu10': '- Giấm gạo lên men của Ajinomoto  Giấm gạo lên men của Ajinomoto',
  //     'nguyenlieu11': ' ',
  //     'nguyenlieu12': ' ',
  //     'nguyenlieu13': ' ',
  //     'nguyenlieu14': ' ',
  //     'nguyenlieu15': ' ',

  //   },
  //   {
  //     'ID_nguyenlieu': 6,
  //     'nguyenlieu1': '- Tôm tươi bóc vỏ: 70g',
  //     'nguyenlieu2': '- Giò sống: 50g',
  //     'nguyenlieu3': '- Đậu hũ chiên: 2 miếng',
  //     'nguyenlieu4': '- Hành lá: 2 cọng',
  //     'nguyenlieu5': '-Ớt hiểm : 1 trái',
  //     'nguyenlieu6': '- Tiêu, đường, dầu ăn, chao trắng',
  //     'nguyenlieu7': '- Bột ngọt  Bột ngọt AJI-NO-MOTO®',
  //     'nguyenlieu8': '- Hạt nêm (hương vị heo) bổ sung canxi',
  //     'nguyenlieu9': '- Nước tương  Nước tương ',
  //     'nguyenlieu10': ' ',
  //     'nguyenlieu11': ' ',
  //     'nguyenlieu12': ' ',
  //     'nguyenlieu13': ' ',
  //     'nguyenlieu14': ' ',
  //     'nguyenlieu15': ' ',

  //   },
  //   {
  //     'ID_nguyenlieu': 7,
  //     'nguyenlieu1': '- Tai heo: 2 cái',
  //     'nguyenlieu2': '- Đường phèn: 400g',
  //     'nguyenlieu3': '- Hành tím: 3 củ',
  //     'nguyenlieu4': '- Hành tím: 3 củ',
  //     'nguyenlieu5': '- Ớt hiểm: 5 trái',
  //     'nguyenlieu6': '- Muối hột: 3M',
  //     'nguyenlieu7': '- Lọ thủy tinh: 1 cái',
  //     'nguyenlieu8': '- Bánh tráng, rau sống, chuối hột, khế, mắm nêm, đường, thơm',
  //     'nguyenlieu9': '- Tỏi, ớt ăn kèm',
  //     'nguyenlieu10': '- Phèn chua giã nhỏ',
  //     'nguyenlieu11': '- Giấm gạo lên men của Ajinomoto  Giấm gạo lên men của Ajinomoto',
  //     'nguyenlieu12': ' ',
  //     'nguyenlieu13': ' ',
  //     'nguyenlieu14': ' ',
  //     'nguyenlieu15': ' ',

  //   },
  //   {
  //     'ID_nguyenlieu': 8,
  //     'nguyenlieu1': '- Thịt ba chỉ quay: 400g',
  //     'nguyenlieu2': '- Dưa cải: 300g',
  //     'nguyenlieu3': '- Hành lá: 2 cọng',
  //     'nguyenlieu4': '- Ớt sừng: 1 trái',
  //     'nguyenlieu5': '- Tai vị: 1 cái',
  //     'nguyenlieu6': '- Nước dừa tươi, đường, dầu điều, hành tím băm, tiêu sọ, dầu ăn',
  //     'nguyenlieu7': '- Nước tương LISA',
  //     'nguyenlieu8': '- Bột ngọt  Bột ngọt AJI-NO-MOTO®',
  //     'nguyenlieu9': ' ',
  //     'nguyenlieu10': ' ',
  //     'nguyenlieu11': '  ',
  //     'nguyenlieu12': ' ',
  //     'nguyenlieu13': ' ',
  //     'nguyenlieu14': ' ',
  //     'nguyenlieu15': ' ',

  //   },
  //   {
  //     'ID_nguyenlieu': 9,
  //     'nguyenlieu1': '- Xương heo : 500g',
  //     'nguyenlieu2': '- Khổ qua rừng : 400g',
  //     'nguyenlieu3': '- Cá thác lác : 200g',
  //     'nguyenlieu4': '- Cà rốt : 50g',
  //     'nguyenlieu5': '- Cọng thì là băm nhỏ : 1M',
  //     'nguyenlieu6': '- Hành lá : 50g',
  //     'nguyenlieu7': '- Ngò rí : 2 cây',
  //     'nguyenlieu8': '- Nấm kim châm : 50g',
  //     'nguyenlieu9': '- Nấm bào ngư : 50g',
  //     'nguyenlieu10': '- Nấm đùi gà : 50g',
  //     'nguyenlieu11': '- Bún tươi Muối, tiêu, dầu ăn, nước mắm',
  //     'nguyenlieu12': '- Bột ngọt  Bột ngọt AJI-NO-MOTO®',
  //     'nguyenlieu13': '- Hạt nêm (hương vị heo) bổ sung canxi',
  //     'nguyenlieu14': ' ',
  //     'nguyenlieu15': ' ',

  //   },
  //   {
  //     'ID_nguyenlieu': 10,
  //     'nguyenlieu1': '- Củ sen non 1 củ (khoảng150g)',
  //     'nguyenlieu2': '- Hạt sen tươi 100g',
  //     'nguyenlieu3': '- Mè đen 1M',
  //     'nguyenlieu4': '- Húng lũi cắt nhỏ 1M',
  //     'nguyenlieu5': '- Nước cốt chanh 1M',
  //     'nguyenlieu6': '- Tỏi, ớt băm 1M',
  //     'nguyenlieu7': '- Húng lũi băm nhỏ 1/2M',
  //     'nguyenlieu8': '- Tỏi phi 1M',
  //     'nguyenlieu9': '- Tương ớt, tương cà, dầu ăn',
  //     'nguyenlieu10': '- Bột Chiên Giòn (Tên cũ: Bột Chiên Giòn Hải Sản)',
  //     'nguyenlieu11': '- Xốt Mayonnaise',
  //     'nguyenlieu12': ' ',
  //     'nguyenlieu13': ' ',
  //     'nguyenlieu14': ' ',
  //     'nguyenlieu15': ' ',

  //   },
  //   {
  //     'ID_nguyenlieu': 11,
  //     'nguyenlieu1': '- Bắp chuối bào: 250g',
  //     'nguyenlieu2': '- Thịt hến: 150g',
  //     'nguyenlieu3': '- Da heo luộc: 100g',
  //     'nguyenlieu4': '- Hành tây: 1/2 củ',
  //     'nguyenlieu5': '- Gừng: 1 củ nhỏ',
  //     'nguyenlieu6': '- Rau răm, ngò gai, ớt sừng cắt sợi',
  //     'nguyenlieu7': '- Lá chanh, nước cốt chanh',
  //     'nguyenlieu8': '- Tỏi ớt băm, hành phi, mè trắng rang',
  //     'nguyenlieu9': '- Đường, muối, nước mắm',
  //     'nguyenlieu10': '- Ăn kèm: Bánh tráng mè nướng',
  //     'nguyenlieu11': '- Giấm gạo lên men của Ajinomoto  Giấm gạo lên men của Ajinomoto',
  //     'nguyenlieu12': ' ',
  //     'nguyenlieu13': ' ',
  //     'nguyenlieu14': ' ',
  //     'nguyenlieu15': ' ',

  //   },
  //   {
  //     'ID_nguyenlieu': 12,
  //     'nguyenlieu1': '- Cá nục tươi: 600gr',
  //     'nguyenlieu2': '- Thịt ba rọi: 100gr',
  //     'nguyenlieu3': '- Thơm: 1/2 trái',
  //     'nguyenlieu4': '- Mía lau: khoảng 15cm',
  //     'nguyenlieu5': '- Ớt tươi: 2 trái',
  //     'nguyenlieu6': '- Nước màu: 1/2m',
  //     'nguyenlieu7': '- Dầu điều: 2M',
  //     'nguyenlieu8': '- Đường, tiêu, hành lá, muối, ớt ',
  //     'nguyenlieu9': '- bột, nước mắm',
  //     'nguyenlieu10': '- Bột ngọt  Bột ngọt AJI-NO-MOTO®',
  //     'nguyenlieu11': ' ',
  //     'nguyenlieu12': ' ',
  //     'nguyenlieu13': ' ',
  //     'nguyenlieu14': ' ',
  //     'nguyenlieu15': ' ',

  //   },
  //   {
  //     'ID_nguyenlieu': 13,
  //     'nguyenlieu1': '- Cá lóc phi lê: 300g',
  //     'nguyenlieu2': '- Thịt xay: 100g',
  //     'nguyenlieu3': '- Bầu: ½ trái nhỏ',
  //     'nguyenlieu4': '- Ớt sừng: 1 trái',
  //     'nguyenlieu5': '- Cần tàu: 1 nhánh',
  //     'nguyenlieu6': '- Hành lá: 1 cây',
  //     'nguyenlieu7': '- Gừng: 2 lát',
  //     'nguyenlieu8': '- Bún tàu: 1 lọn',
  //     'nguyenlieu9': '- Muối, tiêu, đường',
  //     'nguyenlieu10': '- Dầu ăn, bột năng',
  //     'nguyenlieu11': '- Nước tương LISA',
  //     'nguyenlieu12': '- Hạt nêm (hương vị heo) bổ sung canxi',
  //     'nguyenlieu13': ' ',
  //     'nguyenlieu14': ' ',
  //     'nguyenlieu15': ' ',

  //   },
  //   {
  //     'ID_nguyenlieu': 14,
  //     'nguyenlieu1': '- Cá saba: 1 con nhỏ khoảng 450g',
  //     'nguyenlieu2': '- Thịt ba chỉ: 100g',
  //     'nguyenlieu3': '- Nước dừa tươi: 1 chén',
  //     'nguyenlieu4': '- Trứng cút bóc vỏ: 10 quả',
  //     'nguyenlieu5': '- Đầu hành lá: 4 cái',
  //     'nguyenlieu6': '- Ớt hiểm: 4 trái',
  //     'nguyenlieu7': '- Hành tím băm, nước mắm, tiêu, ớt bột, dầu ăn',
  //     'nguyenlieu8': '- Trang trí: ngò rí',
  //     'nguyenlieu9': '- Hạt nêm (hương vị heo) bổ sung canxi',
  //     'nguyenlieu10': '- Bột ngọt  Bột ngọt AJI-NO-MOTO®',
  //     'nguyenlieu11': ' ',
  //     'nguyenlieu12': ' ',
  //     'nguyenlieu13': ' ',
  //     'nguyenlieu14': ' ',
  //     'nguyenlieu15': ' ',

  //   },
  //   {
  //     'ID_nguyenlieu': 15,
  //     'nguyenlieu1': '- Thịt nạc dăm: 100g',
  //     'nguyenlieu2': '- Đậu que: 200g',
  //     'nguyenlieu3': '- Cà rốt: 1/2 củ',
  //     'nguyenlieu4': '- Tỏi băm',
  //     'nguyenlieu5': '- Hành lá, ngò rí',
  //     'nguyenlieu6': '- Tiêu, dầu ăn',
  //     'nguyenlieu7': '- Hạt nêm (hương vị heo) bổ sung canxi',
  //     'nguyenlieu8': '- Xốt Mayonnaise',
  //     'nguyenlieu9': ' ',
  //     'nguyenlieu10': ' ',
  //     'nguyenlieu11': ' ',
  //     'nguyenlieu12': ' ',
  //     'nguyenlieu13': ' ',
  //     'nguyenlieu14': ' ',
  //     'nguyenlieu15': ' ',

  //   },
  // ];


  // FoodNB: FoodNoiBat[] = [
  //   {
  //     'FoodNoiBat_Id': 1,
  //     'FoodNoiBat_name': 'LẨU MẮM CÁ KÈO',
  //     'info': 'Hôm nay mời các chị em cùng học cách nấu món Lẩu mắm đặc trưng của người dân Nam Bộ nhé, không khó lắm đâu! ',
  //     'img': './assets/img/LauMamCaKeo.png ',
  //     'video': '',
  //     'star': 5,
  //     'soluong':1,
  //     'tongtien':129,
  //     'soche1': '– Nấu nước dùng: nấu ½ kg xương ống heo với 3L nước trong 1 giờ với lửa nhỏ, không đậy nắp và nêm 1m muối, 1M đường và 1M Bột ngọt AJI-NO-MOTO',
  //     'soche2': '– Cá kèo làm sạch. Ốc bươu làm sạch, rửa bằng Giấm gạo lên men LISA® cho sạch nhớt sau đó rửa qua nước lạnh.',
  //     'soche3': '– Ngãi bún nướng vàng.Sả đập dập.Cà tím chẻ làm đôi, cắt khoanh xéo. ',
  //     'soche4': ' – Rau đắng rửa sạch. Cọng súng tước bỏ xơ, rửa sạch, cắt khúc vừa ăn. Bông so đũa bỏ phần nhụy màu vàng, rửa sạch. Bông bí rửa sạch, để ráo. ',
  //     'thuchien1': '– Cho mắm sặc và mắm linh vào nồi nấu với 1 lít nước dừa tươi, sau đó lọc bỏ xác.',
  //     'thuchien2': '– Phi thơm tỏi, sả, ớt băm, cho nước dùng, nước mắm lọc, ngãi bún và sả đập dập vào chung nấu sôi. Cho cà tím vào.',
  //     'thuchien3': ' ',
  //     'thuchien4': ' ',
  //     'thuchien5': ' ',
  //     'thuchien6': ' ',
  //     'cachdung': 'Dọn lẩu mắm lên kèm với cá kèo, ốc. Ăn kèm bún, thịt quay và các loại rau. Chấm nước mắm ớt.',

  //   }, {
  //     'FoodNoiBat_Id': 2,
  //     'FoodNoiBat_name': 'CÁ BÔNG LAU KHO TỘ',
  //     'info': 'Là món ăn dân dã đặc trưng của Việt Nam để giới thiệu với bạn bè quốc tế, rất ngon, nguyên liệu đơn giản và dễ thực hiện. ',
  //     'img': './assets/img/cabonglaukhoto.png ',
  //     'video': '',
  //     'star': 5,
  //     'soluong':1,
  //     'tongtien':139,
  //     'soche1': '– Cá bông lau làm sạch, cắt khúc dày khoảng 2cm. Thịt ba chỉ rửa sạch, cắt miếng mỏng vừa ăn.',
  //     'soche2': '– Ướp cá và thịt với 1m hành tím, tỏi, ớt băm, 1M hạt nêm Aji-ngon®, 1m tiêu, 2M đường, 1m bột ngọt AJI-NO-MOTO®, 3M nước tương LISA. Để thấm 30 phút.',
  //     'soche3': '– Ngãi bún nướng vàng.Sả đập dập.Cà tím chẻ làm đôi, cắt khoanh xéo. ',
  //     'soche4': ' ',
  //     'thuchien1': 'Cho cá và thịt vào nồi, thêm một ít dầu ăn nấu cho cá săn lại thì cho nước sôi vào ngập mặt cá, đun nhỏ lửa, nếm thử vị rồi nêm lại cho vừa ăn. Kho lửa nhỏ đến khi nước gần cạn thì cho hành lá và tiêu vào rồi tắt bếp.',
  //     'thuchien2': '',
  //     'thuchien3': ' ',
  //     'thuchien4': ' ',
  //     'thuchien5': ' ',
  //     'thuchien6': ' ',
  //     'cachdung': 'Lấy cá ra dĩa, dùng nóng với cơm trắng.',

  //   }, {
  //     'FoodNoiBat_Id': 3,
  //     'FoodNoiBat_name': 'CÁ NỤC KHO THƠM',
  //     'info': 'Nói đến món ăn miền Nam không thể không nhắc đến món cá nục kho, mang hương vị đậm đà quê hương, hấp dẫn, rất phù hợp dùng trong bữa cơm hằng ngày.',
  //     'img': './assets/img/ca-nuc-kho-thom.png ',
  //     'video': '',
  //     'star': 5,
  //     'soluong':1,
  //     'tongtien':149,
  //     'soche1': '– Cá làm sạch, bẻ đầu nhét vào bụng. Ướp với ớt bột, 1/2m bột ngọt AJI-NO-MOTO®, muối, đầu hành lá.',
  //     'soche2': '– Thịt cắt cỡ ngón tay ướp đường, muối, tiêu, mắm, bột ngọt Aji-no-moto®. Để thấm.',
  //     'soche3': '– Thơm xắt miếng dày 3 li, ớt cắt khúc, hành lá cắt khúc',
  //     'soche4': ' – Mía chẻ nhỏ, cắt khúc vừa nồi, lót vào nồi đất.',
  //     'thuchien1': 'Xếp cá xen thịt ba rọi vào nồi, thêm thơm, ớt bột, 1m nước màu, 2m dầu điều, 2m đường, 4m nước mắm, đầu hành, tiêu, ớt tươi, bắc lên bếp nấu sôi 2-3 phút cho thịt cá săn và thấm màu, cho thêm nước sôi ngập cá, đậy vung, nấu lửa vừa cho thịt cá thấm gia vị, cá mềm xương và cạn nước.',
  //     'thuchien2': '',
  //     'thuchien3': ' ',
  //     'thuchien4': ' ',
  //     'thuchien5': ' ',
  //     'thuchien6': ' ',
  //     'cachdung': 'Dùng món kho với cơm, rau, dưa.',

  //   }, {
  //     'FoodNoiBat_Id': 4,
  //     'FoodNoiBat_name': 'THỊT KHO NƯỚC DỪA',
  //     'info': 'Vào những ngày Tết truyền thống của người miền Nam, không thể thiếu món thịt kho nước dừa rất ngon và bổ dưỡng.',
  //     'img': './assets/img/thitkhonuocdua.png ',
  //     'video': '',
  //     'star': 5,
  //     'soluong':1,
  //     'tongtien':119,
  //     'soche1': '– Thịt ba rọi rửa sạch, cắt miếng vuông khoảng 5cm, ướp thịt với 2m tỏi bằm, 1m đường, 1/2m muối và 1/2m bột ngọt AJI-NO-MOTO®, để thấm 30 phút.',
  //     'soche2': '– Trứng cho vào nồi từ nước lạnh, luộc chín vớt ra ngâm vào nước cho nguội, bóc bỏ vỏ.',
  //     'soche3': '',
  //     'soche4': ' ',
  //     'thuchien1': '– Đun nóng nước dừa, cho thịt vào đun sôi, hớt bọt kĩ, để lửa nhỏ cho thịt mềm và thấm.',
  //     'thuchien2': '– Khi nồi thịt sôi lên thì cho trứng vào.',
  //     'thuchien3': '– Khi thấy thành nồi có caramel bám vào thì chao nồi cho caramel hòa vào nước kho thịt. ',
  //     'thuchien4': '– Nêm 2M nước mắm, 1m đường, đun to lửa cho nước mắm sôi, trở mặt thịt cho thấm đều nước mắm. Kho nhỏ lửa đến khi nước kho sắc lại, thịt mềm vừa ăn thì tắt bếp.',
  //     'thuchien5': ' ',
  //     'thuchien6': ' ',
  //     'cachdung': '– Múc thịt và trứng kho ra dĩa, dùng với cơm và dưa giá.',

  //   }, {
  //     'FoodNoiBat_Id': 5,
  //     'FoodNoiBat_name': 'BÚN THỊT NƯỚNG',
  //     'info': 'Bún thịt nướng là món ăn đặc trưng miền Nam dùng làm điểm tâm, bữa chính hay giữa bữa đều được, rất ngon và hấp dẫn.',
  //     'img': './assets/img/bunthitnuong.png ',
  //     'video': '',
  //     'star': 5,
  //     'soluong':1,
  //     'tongtien':129,
  //     'soche1': '– Thịt heo cắt miếng mỏng vừa ăn, ướp với 1M đường, 1M nước tương LISA , 1M hạt nêm Aji-ngon®, 1/4m muối, 1/2M hành băm, 1M tỏi băm, 1M sả băm, 1M dầu ăn, 1M dầu điều, 1M rượu ngũ vị hương và 1m mật ong, để thấm 20 phút.',
  //     'soche2': '– Rau thơm, xà lách, giá rửa sạch, cắt nhỏ. Đậu phộng rang vàng, giã nhỏ.',
  //     'soche3': '– Hành lá cắt nhỏ, dưa leo cắt sợi nhỏ.  ',
  //     'soche4': '',
  //     'thuchien1': '– Ghim thịt vào xiên, nướng thịt trên than hoặc trên bếp gas đến khi thịt chín vàng.',
  //     'thuchien2': '– Pha nước mắm chua ngọt: trộn đều 1/2M Giấm gạo lên men LISA® với 1M đường, 1M nước mắm, 5M nước lọc và 1M tỏi, ớt băm.',
  //     'thuchien3': '– Làm mỡ hành: đun nóng 2M mỡ nước rồi đổ vào chén hành, trộn đều. ',
  //     'thuchien4': ' ',
  //     'thuchien5': ' ',
  //     'thuchien6': ' ',
  //     'cachdung': 'Cho bún, rau xà lách, rau thơm, dưa leo và giá vào tô, xếp thịt nướng lên trên rồi thêm mỡ hành và đậu phộng lên trên cùng. Ăn kèm đồ chua và nước mắm chua ngọt.',

  //   }, {
  //     'FoodNoiBat_Id': 6,
  //     'FoodNoiBat_name': 'CÁ BỐNG TRỨNG KHO TIÊU',
  //     'info': 'Cá bống trứng kho tiêu là món ăn nhiều dưỡng chất vì gan cá chứa nhiều Omega 3 có tác dụng tốt cho thị lực và bổ thần kinh.',
  //     'img': './assets/img/Cabongtrungkho-tieu.png ',
  //     'video': '',
  //     'star': 5,
  //     'soluong':1,
  //     'tongtien':139,
  //     'soche1': '– Thịt ba rọi cắt sợi nhỏ bản cỡ 0,3cm.',
  //     'soche2': '– Hành lá rửa sạch, phần đầu trắng đập dập, cắt nhuyễn, phần lá cắt nhỏ.',
  //     'soche3': '– Cá bống trứng làm sạch, rửa qua nước lạnh, để thật ráo, ướp với đầu hành trắng băm, 1m hạt nêm Aji-ngon®, 2M nước mắm, 1m ớt bột, 1m đường và 1/2m tiêu.',
  //     'soche4': '',
  //     'thuchien1': '– Xào thịt ba rọi với ít dầu ăn cho săn và tươm mỡ, lấy thịt ra, giữ mỡ lại trong nồi đất, cho 1M đường vào để thắng màu caramel. Sau đó cho cá vào xóc nhanh và nhẹ tay để cá thấm caramel và săn lại. Nêm vào 1/2m nước mắm để dậy mùi thơm, cho thịt ba rọi đã xào vào, đảo đều. Thêm nước nóng vào vừa xấp mặt cá, giảm nhỏ lửa, thỉnh thoảng lắc nhẹ nồi để cá và thịt thấm gia vị đều, nước gần cạn hết thì tắt bếp.',
  //     'thuchien2': '',
  //     'thuchien3': ' ',
  //     'thuchien4': ' ',
  //     'thuchien5': ' ',
  //     'thuchien6': ' ',
  //     'cachdung': '– Rắc tiêu và hành lá lên cá cho thơm. Dùng nóng với cơm trắng.',

  //   }, {
  //     'FoodNoiBat_Id': 7,
  //     'FoodNoiBat_name': 'GÀ NỔ MUỐI',
  //     'info': 'Hãy bày lên bàn tiệc món gà nổ muối vàng ươm ngon tuyệt với công thức vô cùng dễ làm! Thịt gà chín mềm, thơm lừng hương xả, hành tây và lá chanh, khiến bất kì ai cũng không cưỡng lại được. Chỉ cần có đủ nguyên liệu, một con gà ta ngon và 20 phút thực hiện, thế là có ngay một món ăn hoành tráng!',
  //     'img': './assets/img/ga-no-muoi.jpg ',
  //     'video': '',
  //     'star': 5,
  //     'soluong':1,
  //     'tongtien':139,
  //     'soche1': '– Trộn đều hỗn hợp gia vị gồm có 1M hạt nêm Aji-ngon® với 1/2m đường, 1/2m tiêu rồi xát đều trong và ngoài con gà. Ướp trong khoảng 30 phút.',
  //     'soche2': '– Sả cây đập dập cắt khúc, lá sả cắt khúc để riêng. Hành tây cắt múi cau. Hành lá cắt khúc 3cm. Lá chanh cắt nhuyễn.',
  //     'soche3': '',
  //     'soche4': '',
  //     'thuchien1': '– Cho 5 nhánh sả, hành tây và hành lá vào bụng gà.  ',
  //     'thuchien2': '– Sau đó rải muối hột vào nồi đất, cho lá sả còn lại lên trên, rồi cho gà vào, đậy nắp. Đặt nồi lên bếp, hấp 30 phút.',
  //     'thuchien3': ' – Làm muối chấm: 2m muối, 1m tiêu, 2m sả băm, 1/2m lá chanh cắt nhỏ, 1m nước cốt chanh',
  //     'thuchien4': ' ',
  //     'thuchien5': ' ',
  //     'thuchien6': ' ',
  //     'cachdung': '– Gà chín, chặt miếng vừa ăn, xếp ra đĩa, rắc lá chanh lên trên. Ăn gà kèm muối tiêu, sả chanh và bắp cải trộn.',

  //   }, {
  //     'FoodNoiBat_Id': 8,
  //     'FoodNoiBat_name': 'TÔM KHO TÀU',
  //     'info': 'Cùng vói thịt kho tàu thì món tôm kho tàu là món đặc trưng của Nam bộ, được kho bằng nước dừa tạo nên vị ngọt, vị thơm đặc trưng của món ăn, mà người miền Nam hay gọi là kho tàu',
  //     'img': './assets/img/tomkhotau.png ',
  //     'video': '',
  //     'star': 5,
  //     'soluong':1,
  //     'tongtien':139,
  //     'soche1': '– Tôm cắt chân, bỏ vỏ, chừa đuôi, bỏ phần đầu, nặn gạch tôm để riêng, sau đó chẻ sống lưng, rút bỏ chỉ đen, rửa sạch, để ráo.',
  //     'soche2': '– Cho tôm vào chiên cho tôm săn lại, tôm hơi vàng gắp ra tô',
  //     'soche3': '– Ướp tôm với 1 ít đầu hành lá băm, hạt nêm Aji-ngon®, tiêu, đường, muối, tỏi băm và ít nước mắm.',
  //     'soche4': '– Gạch tôm tán mịn, cho thêm ít nước chanh, đường, dầu, tiêu, 1/2m nước mắm và 1m, vẫn để trong chén, đặt trong nồi nước trên bếp với lửa nhẹ, khuấy đều đến khi gạch tôm sền sệt, rưới đều lên tôm.',
  //     'thuchien1': '– Cho tôm vào nồi kho cho tôm hơi săn lại. Thêm nước dừa vào, trở đều cho tôm thấm gia vị và thêm ít dầu điều cho món ăn thêm hấp dẫn.',
  //     'thuchien2': '– Kho lửa nhỏ đến khi nước hơi sánh lại là được. Thêm chút tiêu và hành lá vào rồi tắt lửa.',
  //     'thuchien3': ' ',
  //     'thuchien4': ' ',
  //     'thuchien5': ' ',
  //     'thuchien6': ' ',
  //     'cachdung': 'Múc tôm ra dĩa, dùng với cơm nóng.',

  //   }, {
  //     'FoodNoiBat_Id': 9,
  //     'FoodNoiBat_name': 'GỎI NẤM RAU MẦM',
  //     'info': 'Đổi món cho cả nhà tuần chay này với món gỏi nấm rau mầm thanh đạm dễ ăn lại vẫn đầy đủ dưỡng chất. Rau mầm giòn giòn, hăng nhẹ hoà quyện vị nấm mềm ngọt, thấm vị hấp dẫn thế này, bảo sao món chay mà vẫn “cháy” cơm như thường!',
  //     'img': './assets/img/goi-nam-rau-mam.jpg ',
  //     'video': '',
  //     'star': 5,
  //     'soluong':1,
  //     'tongtien':139,
  //     'soche1': '– Nấm linh chi rửa sạch để ráo. Hành tây cắt múi cau mỏng.',
  //     'soche2': '– Sườn chay ngâm nở xé sợi nhỏ, ướp với 1/2m hạt nêm Aji-ngon® từ nấm hương và hạt sen, để thấm 5 phút. Sau đó vắt ráo nước, cho vào dầu nóng chiên giòn, vớt ra giấy thấm dầu.',
  //     'soche3': '– Rau mầm rửa sạch để ráo. Ớt sừng cắt sợi mỏng. Cần tây cắt lát mỏng, ngâm với 1M giấm và 1M đường.',
  //     'soche4': '',
  //     'thuchien1': '– Đun nóng 4M dầu ăn, cho boaro vào phi thơm, sau đó vớt ra 2M dầu boaro phi, rồi cho nấm linh chi vào xào chín, nêm 1/2m hạt nêm Aji-ngon® từ nấm hương và hạt sen, 1/2M dầu hào chay, 1/3m bột ngọt AJI-NO-MOTO®, cho 1M nước dừa vào đảo đều, cho tiếp hành tây vào xào thêm 1 phút, rắc ít tiêu, nếm vị vừa ăn, tắt lửa. Cho ra đĩa để nguội. ',
  //     'thuchien2': '– Pha nước gỏi: đun sôi hỗn hợp 3M nước tương “Phú Sĩ”, 3M nước dừa, 1M đường, 1/3m bột ngọt AJI-NO-MOTO® và 1 ít muối, để nguội, sau đó cho thêm 1M nước cốt chanh, 1m ớt và 2M dầu boaro phi',
  //     'thuchien3': ' ',
  //     'thuchien4': ' ',
  //     'thuchien5': ' ',
  //     'thuchien6': ' ',
  //     'cachdung': '– Trộn đều rau mầm, cần tây, ớt sợi và sườn chay chiên giòn, cho ra dĩa, rồi cho nấm lên trên, rưới nước trộn gỏi lên, rắc boarô phi và ít mè rang.',

  //   }, {
  //     'FoodNoiBat_Id': 10,
  //     'FoodNoiBat_name': 'KHOAI LANG KHO RONG BIỂN',
  //     'info': 'Vẫn là vị rong biển giòn ngon lại thanh mát, nay kết hợp cùng cái ngọt bùi của khoai lang. Kho đến khi khoai mềm tạo thành một mùi hương phong phú, vị hài hoà rất đưa cơm. Một món ăn dồi dào dinh dưỡng mà bạn không phải mất nhiều thời gian!',
  //     'img': './assets/img/khoai-lang-kho-rong-bien.jpg ',
  //     'video': '',
  //     'star': 5,
  //     'soluong':1,
  //     'tongtien':139,
  //     'soche1': '– Khoai lang cắt khối 1cm, ngâm trong nước có pha ít muối cho ra bớt nhựa, rửa sạch để ráo, chiên sơ. ',
  //     'soche2': '– Đậu hà lan rửa sạch, cắt xéo. Đậu hũ chiên vàng, cắt khối 1.5cm. Rong biển ngâm khoảng 5 phút, vớt ra để ráo. Ngưu bàng bào sơ vỏ, cắt sợi ngắn 3cm. Gừng mài hoặc băm nhuyễn. Boaro cắt lát mỏng.',
  //     'soche3': '',
  //     'soche4': '',
  //     'thuchien1': '– Phi thơm hành boaro với 2M dầu ăn, cho khoai lang vào xào sơ, cho 1 chén nước dừa tươi rồi nêm vào 1/2M đường, 1/2M rượu mirin, 1/2M gừng mài, 2M rượu trắng, 5M nước tương “Phú Sĩ”. Nấu đến khi khoai lang gần mềm, cho đậu hủ, đậu hà lan, ngưu bàng vào, nấu đến khi khoai mềm, tắt lửa, cho rong biển hijiki vào đảo đều.',
  //     'thuchien2': '',
  //     'thuchien3': ' ',
  //     'thuchien4': ' ',
  //     'thuchien5': ' ',
  //     'thuchien6': ' ',
  //     'cachdung': '–  Ăn kèm với cơm nóng.',

  //   }
  // ];

  // NguyenLieuNoiBat: NguyenLieuNoiBat[] = [
  //   {
  //     'ID_nguyenlieuNoiBat': 1,
  //     'nguyenlieuNoiBat1': '- Cá kèo: 400g',
  //     'nguyenlieuNoiBat2': '- Ớt băm: 1m',
  //     'nguyenlieuNoiBat3': '-Thịt ốc bươu: 150g ',
  //     'nguyenlieuNoiBat4': '- Mắm sặc: 200g',
  //     'nguyenlieuNoiBat5': '- Mắm linh: 100g',
  //     'nguyenlieuNoiBat6': '- Thịt quay cắt miếng sẵn: 200g',
  //     'nguyenlieuNoiBat7': '- Xương heo: 1/2 kg,Nước dừa: 1 lít',
  //     'nguyenlieuNoiBat8': '- Giấm gạo lên men của Ajinomoto  Giấm gạo lên men của Ajinomoto',
  //     'nguyenlieuNoiBat9': '- Bột ngọt  Bột ngọt AJI-NO-MOTO®',
  //     'nguyenlieuNoiBat10': '- Tỏi băm: 1m,Sả băm: 1M',
  //     'nguyenlieuNoiBat11': '- Ngãi bún: 1 khúc',
  //     'nguyenlieuNoiBat12': '- Cà tím: 1 trái',
  //     'nguyenlieuNoiBat13': '- Bún tươi',
  //     'nguyenlieuNoiBat14': '- Sả cây, ớt hiểm, rau đắng, cọng súng, giá, bông so đũa, bông bí ',
  //     'nguyenlieuNoiBat15': '- Đường, nước mắm, muối',


  //   }, {
  //     'ID_nguyenlieuNoiBat': 2,
  //     'nguyenlieuNoiBat1': '- Cá bông lau: 300g',
  //     'nguyenlieuNoiBat2': '- Thịt ba chỉ: 100g',
  //     'nguyenlieuNoiBat3': '- Hành lá: 1 cọng',
  //     'nguyenlieuNoiBat4': '-Tiêu, đường, dầu ăn ',
  //     'nguyenlieuNoiBat5': '- Hành tím, tỏi',
  //     'nguyenlieuNoiBat6': '- Nước tương LISA',
  //     'nguyenlieuNoiBat7': '- Hạt nêm (hương vị heo) bổ sung canxi Hạt nêm (hương vị heo) bổ sung canxi',
  //     'nguyenlieuNoiBat8': '-Bột ngọt  Bột ngọt AJI-NO-MOTO®',
  //     'nguyenlieuNoiBat9': '',
  //     'nguyenlieuNoiBat10': ' ',
  //     'nguyenlieuNoiBat11': ' ',
  //     'nguyenlieuNoiBat12': '',
  //     'nguyenlieuNoiBat13': '',
  //     'nguyenlieuNoiBat14': ' ',
  //     'nguyenlieuNoiBat15': ' ',


  //   }, {
  //     'ID_nguyenlieuNoiBat': 3,
  //     'nguyenlieuNoiBat1': '- Cá nục tươi: 600gr',
  //     'nguyenlieuNoiBat2': '- Thịt ba rọi: 100gr',
  //     'nguyenlieuNoiBat3': '- Thơm: 1/2 trái',
  //     'nguyenlieuNoiBat4': '- Mía lau: khoảng 15cm',
  //     'nguyenlieuNoiBat5': '- Ớt tươi: 2 trái',
  //     'nguyenlieuNoiBat6': '- Nước màu: 1/2m',
  //     'nguyenlieuNoiBat7': '-Dầu điều: 2M ',
  //     'nguyenlieuNoiBat8': '- Đường, tiêu, hành lá, muối, ớt ',
  //     'nguyenlieuNoiBat9': '- bột, nước mắm',
  //     'nguyenlieuNoiBat10': '-Bột ngọt  Bột ngọt AJI-NO-MOTO® ',
  //     'nguyenlieuNoiBat11': ' ',
  //     'nguyenlieuNoiBat12': '',
  //     'nguyenlieuNoiBat13': '',
  //     'nguyenlieuNoiBat14': ' ',
  //     'nguyenlieuNoiBat15': ' ',


  //   }, {
  //     'ID_nguyenlieuNoiBat': 4,
  //     'nguyenlieuNoiBat1': '- Thịt ba rọi: 500gr  ',
  //     'nguyenlieuNoiBat2': '- Trứng vịt: 4 quả',
  //     'nguyenlieuNoiBat3': '- Dừa xiêm tươi: 1 trái',
  //     'nguyenlieuNoiBat4': '- Ớt sừng: 1 trái',
  //     'nguyenlieuNoiBat5': '- Tỏi: 4 tép',
  //     'nguyenlieuNoiBat6': '- Muối, đường, nước mắm',
  //     'nguyenlieuNoiBat7': '- Bột ngọt  Bột ngọt AJI-NO-MOTO®',
  //     'nguyenlieuNoiBat8': '',
  //     'nguyenlieuNoiBat9': ' ',
  //     'nguyenlieuNoiBat10': ' ',
  //     'nguyenlieuNoiBat11': ' ',
  //     'nguyenlieuNoiBat12': '',
  //     'nguyenlieuNoiBat13': '',
  //     'nguyenlieuNoiBat14': ' ',
  //     'nguyenlieuNoiBat15': ' ',


  //   }, {
  //     'ID_nguyenlieuNoiBat': 5,
  //     'nguyenlieuNoiBat1': '- Thịt nạc dăm: 400g',
  //     'nguyenlieuNoiBat2': ' -Hành lá: 100g ',
  //     'nguyenlieuNoiBat3': '- Bún tươi: 800g',
  //     'nguyenlieuNoiBat4': '- Đậu phộng rang: 100g',
  //     'nguyenlieuNoiBat5': '- Xà lách, rau thơm',
  //     'nguyenlieuNoiBat6': '- Dưa leo, giá',
  //     'nguyenlieuNoiBat7': '- Cà rốt, củ cải chua: 200g',
  //     'nguyenlieuNoiBat8': '- Hành tím, tỏi, sả băm',
  //     'nguyenlieuNoiBat9': '- Rượu ngũ vị hương, mật ong',
  //     'nguyenlieuNoiBat10': '- Muối, đường, dầu ăn',
  //     'nguyenlieuNoiBat11': '- Nước tương LISA',
  //     'nguyenlieuNoiBat12': '- Hạt nêm (hương vị heo) bổ sung canxi',
  //     'nguyenlieuNoiBat13': '- Giấm gạo lên men của Ajinomoto  Giấm gạo lên men của Ajinomoto',
  //     'nguyenlieuNoiBat14': ' ',
  //     'nguyenlieuNoiBat15': ' ',


  //   }, {
  //     'ID_nguyenlieuNoiBat': 6,
  //     'nguyenlieuNoiBat1': '- Cá bống trứng: 200g',
  //     'nguyenlieuNoiBat2': '- Thịt ba rọi: 50g',
  //     'nguyenlieuNoiBat3': '- Hành lá: 1 cây',
  //     'nguyenlieuNoiBat4': '- Muối, tiêu, đường, nước mắm, ớt bột, dầu ăn',
  //     'nguyenlieuNoiBat5': '- Hạt nêm (hương vị heo) bổ sung canxi',
  //     'nguyenlieuNoiBat6': '- ',
  //     'nguyenlieuNoiBat7': ' ',
  //     'nguyenlieuNoiBat8': '',
  //     'nguyenlieuNoiBat9': '',
  //     'nguyenlieuNoiBat10': ' ',
  //     'nguyenlieuNoiBat11': ' ',
  //     'nguyenlieuNoiBat12': '',
  //     'nguyenlieuNoiBat13': '',
  //     'nguyenlieuNoiBat14': ' ',
  //     'nguyenlieuNoiBat15': ' ',


  //   }, {
  //     'ID_nguyenlieuNoiBat': 7,
  //     'nguyenlieuNoiBat1': '- Gà ta mổ moi 1 con (khoảng 1kg)',
  //     'nguyenlieuNoiBat2': '- Hành tây 1 củ',
  //     'nguyenlieuNoiBat3': '- Hành lá 5 nhánh',
  //     'nguyenlieuNoiBat4': '- Sả cây để nguyên lá 10 nhánh',
  //     'nguyenlieuNoiBat5': '- Nước cốt chanh, lá chanh',
  //     'nguyenlieuNoiBat6': '- Sả băm',
  //     'nguyenlieuNoiBat7': '- Muối hột, đường, tiêu',
  //     'nguyenlieuNoiBat8': '- Hạt nêm (hương vị gà)',
  //     'nguyenlieuNoiBat9': ' ',
  //     'nguyenlieuNoiBat10': ' ',
  //     'nguyenlieuNoiBat11': ' ',
  //     'nguyenlieuNoiBat12': '',
  //     'nguyenlieuNoiBat13': '',
  //     'nguyenlieuNoiBat14': ' ',
  //     'nguyenlieuNoiBat15': ' ',


  //   }, {
  //     'ID_nguyenlieuNoiBat': 8,
  //     'nguyenlieuNoiBat1': '- Tôm càng sống: 500g',
  //     'nguyenlieuNoiBat2': '- Dừa tươi: 1 trái',
  //     'nguyenlieuNoiBat3': '-Chanh, hành lá, tỏi băm ',
  //     'nguyenlieuNoiBat4': '- Dầu ăn, dầu điều',
  //     'nguyenlieuNoiBat5': '- Đường, muối, tiêu, nước mắm',
  //     'nguyenlieuNoiBat6': '- Hạt nêm (hương vị heo) bổ sung canxi',
  //     'nguyenlieuNoiBat7': '- ',
  //     'nguyenlieuNoiBat8': '',
  //     'nguyenlieuNoiBat9': '',
  //     'nguyenlieuNoiBat10': ' ',
  //     'nguyenlieuNoiBat11': ' ',
  //     'nguyenlieuNoiBat12': '',
  //     'nguyenlieuNoiBat13': '',
  //     'nguyenlieuNoiBat14': ' ',
  //     'nguyenlieuNoiBat15': ' ',


  //   }, {
  //     'ID_nguyenlieuNoiBat': 9,
  //     'nguyenlieuNoiBat1': '- Nấm linh chi 150g',
  //     'nguyenlieuNoiBat2': '- Sườn chay ngâm nở 5 miếng',
  //     'nguyenlieuNoiBat3': '- Hành tây 1/2 củ',
  //     'nguyenlieuNoiBat4': '- Rau mầm 100g',
  //     'nguyenlieuNoiBat5': '- Cần tây 1 cây',
  //     'nguyenlieuNoiBat6': '- Ớt sừng 1 trái',
  //     'nguyenlieuNoiBat7': '- Nước dừa tươi 1 chén',
  //     'nguyenlieuNoiBat8': '- Nước cốt chanh 1M',
  //     'nguyenlieuNoiBat9': '- Ớt băm, boa-ro băm',
  //     'nguyenlieuNoiBat10': '- Tiêu, muối, đường, mè trắng rang, dầu hào chay, dầu ăn',
  //     'nguyenlieuNoiBat11': '-  Hạt nêm từ nấm hương và hạt sen bổ sung kẽm',
  //     'nguyenlieuNoiBat12': '- Giấm gạo lên men của Ajinomoto  Giấm gạo lên men của Ajinomoto',
  //     'nguyenlieuNoiBat13': '- Nước tương  Nước tương ',
  //     'nguyenlieuNoiBat14': ' ',
  //     'nguyenlieuNoiBat15': ' ',


  //   }, {
  //     'ID_nguyenlieuNoiBat': 10,
  //     'nguyenlieuNoiBat1': '- Khoai lang 300g',
  //     'nguyenlieuNoiBat2': '- Rong biển hijiki 1M',
  //     'nguyenlieuNoiBat3': '- Đậu Hà Lan trái 100g',
  //     'nguyenlieuNoiBat4': '- Ngưu Bàng 50g',
  //     'nguyenlieuNoiBat5': '- Đậu hũ trắng 200g',
  //     'nguyenlieuNoiBat6': '- Boaro, gừng',
  //     'nguyenlieuNoiBat7': '- Muối, đường, rượu mirin, rượu trắng, nước dừa tươi',
  //     'nguyenlieuNoiBat8': '- Bột ngọt  Bột ngọt AJI-NO-MOTO®',
  //     'nguyenlieuNoiBat9': '- Nước tương  Nước tương ',
  //     'nguyenlieuNoiBat10': ' ',
  //     'nguyenlieuNoiBat11': ' ',
  //     'nguyenlieuNoiBat12': '',
  //     'nguyenlieuNoiBat13': '',
  //     'nguyenlieuNoiBat14': ' ',
  //     'nguyenlieuNoiBat15': ' ',


  //   },
  // ];

  image: Image[] = [
    {
      'id': 1,
      'image': './assets/img/img1/1.jpg',
    },
    {
      'id': 2,
      'image': './assets/img/img1/2.jpg',
    },
    {
      'id': 3,
      'image': './assets/img/img1/3.jpg ',
    },
    {
      'id': 4,
      'image': './assets/img/img1/4.jpg ',
    },
    {
      'id': 5,
      'image': './assets/img/img1/5.jpg ',
    },
    {
      'id': 7,
      'image': './assets/img/img1/7.jpg',
    },
    {
      'id': 8,
      'image': './assets/img/img1/8.jpg',
    },
    {
      'id': 9,
      'image': './assets/img/img1/9.jpg',
    },
    {
      'id': 10,
      'image': './assets/img/img1/10.jpg',
    },
    {
      'id': 11,
      'image': './assets/img/img1/12.jpg',
    },
    {
      'id': 13,
      'image': './assets/img/img1/13.jpg',
    },
    {
      'id': 14,
      'image': './assets/img/img1/15.jpg',
    },
    {
      'id': 16,
      'image': './assets/img/img1/16.jpg',
    },
  ];


  // //  service food + detail + hinhanh va nguyen lieu
  // getSouthFood(): Observable<SouthsideFood[]> {
  //   return of(this.Food);
  // }
  // getSouthFoodByID(id: number): Observable<SouthsideFood> {
  //   return of(this.Food.find(f => f.FoodId === id));
  // }
  // // getSouthFoodByID1(id: number): Observable<SouthsideFood> {
  // //   return of(this.Food.find(f => f.FoodId === id));
  // // }
  // getNguyenLieu(id: number): Observable<NguyenLieu> {
  //   return of(this.NguyenLieuFOOD.find(n => n.ID_nguyenlieu === id));
  // }

  // //  service food noi bat+ detail va nguyen lieu
  // getAllFoodNoiBat(): Observable<FoodNoiBat[]> {
  //   return of(this.FoodNB);
  // }

  // getFoodNoiBatbyID(id: number): Observable<FoodNoiBat> {
  //   return of(this.FoodNB.find(fn => fn.FoodNoiBat_Id === id));
  // }
  // getNguyenLieuNB(id: number): Observable<NguyenLieuNoiBat> {
  //   return of(this.NguyenLieuNoiBat.find(nl => nl.ID_nguyenlieuNoiBat === id));
  // }
  // getImage(): Observable<Image[]> {
  //   return of(this.image);
  // }

  loadFoods() {
    setTimeout(() => {
      window.scrollTo(0, 5000);
    }, 500);
  }
}
