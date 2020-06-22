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
  imagenesMarca=[];
  ngOnInit(): void {
    this.getServices();
    this.imagenesMarca = [
    '../../assets/images/marcas/3m-logo-4.png',
    '../../assets/images/marcas/653418-MLM28562531182_112018-O.jpg',
    '../../assets/images/marcas/Axalta_logo_Blog.png',
    '../../assets/images/marcas/DuPont_tm_rgb.png',
    '../../assets/images/marcas/logo.png',
    '../../assets/images/marcas/logo (1).png',
    '../../assets/images/marcas/Logo-Sherwin-Williams-thumbnail.jpg',
    '../../assets/images/marcas/mipa_pcs_300dpi.jpg',
    '../../assets/images/marcas/png-transparent-ppg-industries-logo-paint-coating-paint-blue-text-trademark.png',
    '../../assets/images/marcas/Segmentos+Axalta+2016-75.png',
    '../../assets/images/marcas/spieshecker.jpg',
    '../../assets/images/marcas/unnamed.png']
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
