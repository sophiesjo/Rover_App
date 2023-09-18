import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subscriber } from 'rxjs';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Route, Router } from '@angular/router';
/**import { initializeApp } from "firebase/app";
import { getApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import { getDatabase, ref, set } from "firebase/database";

const database = getDatabase();

const firebaseApp = getApp();
const storage = getStorage(firebaseApp, "gs://my-custom-bucket");

function writeUserData(userId, name, number) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    phone: number
  });
}
*/
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {
  profile = {
    address: '',
    addressTwo: '',
    birthdate: '',
    city: '',
    country: '',
    email: '',
    name: '',
    state: '',
    zip: '',
    phone: ''

  };

  // constructor(private firestore: AngularFirestore) {
  //   this.firestore.collection('profile').valueChanges({ idField: 'profileID'}).subscribe( (profile) => {this.profile = profile;
  //   console.log(profile);
  //   });
  //  }
  prifileId: string = 'new';
  constructor(
    private firestore: AngularFirestore, private router: Router, private route: ActivatedRoute
  ){}
  ngOnInit() {
    this.prifileId = this.route.snapshot.params.prifileId || 'new';

    if (this.prifileId !== 'new') {
      this.firestore.doc(`profile/${this.prifileId}`).valueChanges().subscribe((profile: any) => this.profile = profile);
    }
  }

  saveProfile(): void{
    this.firestore.collection(`profile`).add(this.profile).then( () => {
      this.profile = null;
      this.router.navigateByUrl('');
    });
    
  }

}

/** constructor(private fireStore: AngularFirestore) {this.userDoc = fireStore.doc<any>('userProfile/we45tfgy8ij');
  this.userDoc.set({
    username: 'Jorge Vergara',
    phone: 'j@javebratt.com', 
  })

  }
  */

  //profile;

  //constructor(private firestore: AngularFirestore) {
  //  this.firestore.collection('profile').valueChanges({ idField: 'profileID'}).subscribe( (profile) => {this.profile = profile;
  //  console.log(profile);
  //  });
  // }