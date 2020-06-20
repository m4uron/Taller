import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Serviceslanding } from '../models/serviceslanding';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  // private servLandingList:Observable<any>;
  private itemDoc: AngularFirestoreDocument;

  constructor(private afs: AngularFirestore) {
    // this.servLandingList = afs.collection('servicesLanding').valueChanges();
  }
  getServLanding(): Observable<Serviceslanding[]> {
    return this.afs.collection<Serviceslanding>('servicesLanding').valueChanges();

  }
  addServLanding(serv: Serviceslanding) {
    return this.afs.collection<Serviceslanding>('servicesLanding').add(serv)
  }
  removeServLanding(idServ) {
this.itemDoc = this.afs.doc('servicesLanding/'+idServ);
  }

}
