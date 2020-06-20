import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  showAdmin = false;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("logueado")=="1"){
      this.showAdmin = true;
    }else{
      this.showAdmin = false;
    }
  }

}
