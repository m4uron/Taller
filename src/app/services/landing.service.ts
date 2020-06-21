import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Serviceslanding } from '../models/serviceslanding';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
export interface ServicesId extends Serviceslanding { id: string; }

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  // private servLandingList:Observable<any>;
  private itemDoc: AngularFirestoreDocument;
  private servLandingList: AngularFirestoreCollection<Serviceslanding>
  items: Observable<Serviceslanding[]>;
  constructor(private afs: AngularFirestore) {

    this.servLandingList = afs.collection('servicesLanding');

   this.items = this.servLandingList.snapshotChanges().pipe(map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data() as Serviceslanding;
      const id = a.payload.doc.id;
      return { id, ...data };
    });
  }));
  }
  getServLanding(): Observable<Serviceslanding[]> {
    return this.items;

  }
  addServLanding(serv: Serviceslanding) {
    return this.afs.collection<Serviceslanding>('servicesLanding').add(serv)
  }
  removeServLanding(idServ) {
    this.itemDoc = this.afs.doc('servicesLanding/' + idServ);
    this.itemDoc.delete();
  }

}
