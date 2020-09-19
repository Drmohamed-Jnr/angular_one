import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent implements OnInit {
  userLists = [];
  UserDetails = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl(''),
  });

  constructor() {}
  ngOnInit(): void {}
  onSubmit() {
    var userLists = this.UserDetails.value;
  }
  reset() {
    this.UserDetails.reset();
  }
}
