import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-thongtin',
  templateUrl: './thongtin.component.html',
  styleUrls: ['./thongtin.component.css']
})
export class ThongtinComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      window.scrollTo(0, 700);
    }, 500);
  }
}
