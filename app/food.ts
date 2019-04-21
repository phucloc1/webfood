// export class SouthsideFood {
//   FoodId: number;
//   Foodname: string;
//   // Foodname1: string;
//   info: string;
//   img: String;
//   soluong: number;
//   tongtien: number;
//   video: string;
//   star: number;
//   soche1: string;
//   soche2: string;
//   soche3: string;
//   soche4: string;
//   thuchien1: string;
//   thuchien2: string;
//   thuchien3: string;
//   thuchien4: string;
//   thuchien5: string;
//   thuchien6: string;
//   cachdung: string;
// }

// export class NguyenLieu {
//   ID_nguyenlieu: number;
//   nguyenlieu1: string;
//   nguyenlieu2: string;
//   nguyenlieu3: string;
//   nguyenlieu4: string;
//   nguyenlieu5: string;
//   nguyenlieu6: string;
//   nguyenlieu7: string;
//   nguyenlieu8: string;
//   nguyenlieu9: string;
//   nguyenlieu10: string;
//   nguyenlieu11: string;
//   nguyenlieu12: string;
//   nguyenlieu13: string;
//   nguyenlieu14: string;
//   nguyenlieu15: string;
// }

// export class FoodNoiBat {
//   FoodNoiBat_Id: number;
//   FoodNoiBat_name: string;
//   info: string;
//   img: string;
//   soluong: number;
//   tongtien: number;
//   video: string;
//   star: number;
//   soche1: string;
//   soche2: string;
//   soche3: string;
//   soche4: string;
//   thuchien1: string;
//   thuchien2: string;
//   thuchien3: string;
//   thuchien4: string;
//   thuchien5: string;
//   thuchien6: string;
//   cachdung: string;
// }

// export class NguyenLieuNoiBat {
//   ID_nguyenlieuNoiBat: number;
//   nguyenlieuNoiBat1: string;
//   nguyenlieuNoiBat2: string;
//   nguyenlieuNoiBat3: string;
//   nguyenlieuNoiBat4: string;
//   nguyenlieuNoiBat5: string;
//   nguyenlieuNoiBat6: string;
//   nguyenlieuNoiBat7: string;
//   nguyenlieuNoiBat8: string;
//   nguyenlieuNoiBat9: string;
//   nguyenlieuNoiBat10: string;
//   nguyenlieuNoiBat11: string;
//   nguyenlieuNoiBat12: string;
//   nguyenlieuNoiBat13: string;
//   nguyenlieuNoiBat14: string;
//   nguyenlieuNoiBat15: string;
// }

export class catalog {
  id_catalog: number;
  name_catalog: string;
  parent_id: number;

}

export class product {
  id_product: number;
  name_product: string;
  catalog_id: number;
  price: number;
  discount: number;
  img_link: string;
  img_list: string;
  created: number;
  view: number;
  info_product: string;
}

export class ThongTinHuuIch {
  thongtin_id: number;
  noidung1: String;
  img1: String;
  noidung2: String;
  img2: String;
  noidung3: String;
  img3: String;
  noidung4: String;
  img4: String;
  noidung5: String;
}

export class Image {
  id: number;
  image: String;
}
