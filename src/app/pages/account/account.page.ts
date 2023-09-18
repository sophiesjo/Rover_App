import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { SETTINGS as AUTH_SETTINGS } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {
  profile;

  constructor(private firestore: AngularFirestore) {
    this.firestore
    .collection('profile')
    .valueChanges({ idField: 'profileID'})
    .subscribe( (profile) => {
      this.profile = profile;
      console.log(profile);
    });
   }

  //profile = {
  //  address: '',
  //  city: '',
  //  name:''
  //};

  //constructor(private firestore: AngularFirestore){}

  // //constructor(private firestore: AngularFirestore) {
  //   this.firestore.collection('profile').valueChanges({ idField: 'profileId'}).subscribe( (profile) => {this.profile = profile;
  //   console.log(profile);
  //   });
  // }

  //ngOnInit() {
  //}

  plants = [
    {name: 'Fruit & veggie beds', isChecked: false},
    {name: 'Indoor trees & shrubs', isChecked: false},
    {name: 'Indoor tropical plants', isChecked: false},
    {name: 'Outdoor gardens', isChecked: false},
    {name: 'Outdoor trees & shrubs', isChecked: false},
    {name: 'Outdoor tropical plants', isChecked: false},
  ];

}