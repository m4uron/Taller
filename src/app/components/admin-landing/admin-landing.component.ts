import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LandingService } from '../../services/landing.service';
import { Serviceslanding } from '../../models/serviceslanding';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { MatTabGroup } from '@angular/material/tabs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.scss']
})
export class AdminLandingComponent implements OnInit {

  formServices: FormGroup;
  serviceTosave: Serviceslanding;

  faTrash = faTrash;
  faPencilAlt = faPencilAlt;

  servSelected = [];
  @ViewChild('tabs') tabGroup: MatTabGroup;
  modalRef: BsModalRef;
  idService = '';
  nameService = '';
  constructor(private fb: FormBuilder, private ls: LandingService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.validarForm();
    this.getInfoServLanding();
  }
  openModal(template: TemplateRef<any>, serv) {
    this.modalRef = this.modalService.show(template);
    this.idService = serv.id;
    this.nameService = serv.name;
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
    this.formServices.reset();
    this.idService = '';
    this.tabGroup.selectedIndex = 0;
  }

  getInfoServLanding() {
    this.ls.getServLanding().subscribe(data => {
      this.servSelected = data;
    });
  }
  editServLand(srv) {
    console.log("Hello edit!!!" + JSON.stringify(srv));
    this.idService = srv.id;
    this.name.setValue(srv.name);
    this.desc.setValue(srv.descripcion);
    this.urlImg.setValue(srv.imgUrl);
    this.tabGroup.selectedIndex = 1;
  }
  deleteServLanding() {
    // console.log("Dentro de eliminar" + this.idService);
    this.ls.removeServLanding(this.idService);
    this.idService = '';
    this.nameService = '';
  }
  updateServLcanding() {
   
    this.serviceTosave = {
      $key: '',
      name: this.name.value,
      descripcion: this.desc.value,
      imgUrl: this.urlImg.value
    }
    this.ls.updateSErvLanding(this.serviceTosave, this.idService);
    this.idService = '';
    this.nameService = '';
    this.tabGroup.selectedIndex = 0;
    this.formServices.reset();
  }
  cancelEditSave(){
    this.idService = '';
    this.nameService = '';
    this.formServices.reset();
  }
}
