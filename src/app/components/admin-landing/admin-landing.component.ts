import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LandingService } from '../../services/landing.service';
import { Serviceslanding } from '../../models/serviceslanding';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.scss']
})
export class AdminLandingComponent implements OnInit {

  formServices: FormGroup;
  serviceTosave: Serviceslanding;
  faCoffee = faCoffee;
  private servLandingList: AngularFirestoreCollection<Serviceslanding>;
  items: Observable<Serviceslanding[]>;
  constructor(private fb: FormBuilder, private ls:LandingService) { }

  ngOnInit(): void {
    this.validarForm();
  }
  get name() {
    return this.formServices.get("name");
  }
  get desc() {
    return this.formServices.get("desc");
  }
  get urlImg() {
    return this.formServices.get("urlImg");
  }
  validarForm() {
    this.formServices = this.fb.group({
      name: ['', Validators.required],
      desc: ['', Validators.required],
      urlImg: ['']
    });
  }
  saveServLanding() {
    this.serviceTosave = {
      $key: '',
      name: this.name.value,
      descripcion: this.desc.value,
      imgUrl: this.urlImg.value
    }
      this.ls.addServLanding(this.serviceTosave);
  }

}
