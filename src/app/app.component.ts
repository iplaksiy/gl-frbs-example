import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public users: Observable<any>;
  
  constructor(
    private db: AngularFirestore
  ) {
    this.users = this.db.collection('users').valueChanges();
  }
}
