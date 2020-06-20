import { Component, OnInit } from '@angular/core';
import { LandingService } from '../services/landing.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private ls: LandingService) { }
  services = [];
  ngOnInit(): void {
    this.getServices();
  }
  getServices() {
    this.ls.getServLanding().subscribe(data => {
      this.services = data;
      console.log(JSON.stringify(this.services));
    }, error => {
      console.log("Hay un error al traer los servicios: " + error);
    });
  }
}
