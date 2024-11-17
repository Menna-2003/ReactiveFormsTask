import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../Service/form.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { start } from 'repl';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  form: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private formService: FormService, private _snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      phoneNum: [''],
      street: [''],
      city: ['', [Validators.required]],
      zipCode: ['', [Validators.required, Validators.pattern("^[0-9]{5}(?:-[0-9]{4})?$")]],
      apartment: [''],
      suite: ['']
    })
  }

  openSnackBar(message: string) {
    const snackbarRef = this._snackBar.open(message, "OK", {
      duration: 3000,
      panelClass: ['custom-snackbar-inline'],
    });

    // Add dynamic inline styles to the snackbar
    snackbarRef.afterOpened().subscribe(() => {
      const containerElement = document.querySelector('.custom-snackbar-inline');
      if (containerElement) {
        containerElement.setAttribute(
          'style',
          `
          background-color: #0d6efd;
          color: white; 
          font-size: 16px; 
          text-align: center; 
          border-radius: 4px;
        `
        );
      }
    });
  }


  get PhoneNum() {
    return this.form.get('phoneNum');
  }
  get Street() {
    return this.form.get('street');
  }
  get Apartment() {
    return this.form.get('apartment');
  }
  get Suite() {
    return this.form.get('suite');
  }
  get City() {
    return this.form.get('city');
  }
  get ZIPCode() {
    return this.form.get('zipCode');
  }

  ngOnInit(): void {
  }

  PrevStep() {

    this.formService.addPhone(this.PhoneNum);
    this.formService.addStreet(`${this.Street} ${this.Apartment} ${this.Suite}`);
    this.formService.addCity(this.City);
    this.formService.addZIPCode(this.ZIPCode);

    this.router.navigate(['/AccountInfo']);
  }

  Submit() {

    this.formService.addPhone(this.PhoneNum);
    this.formService.addStreet(`${this.Street} ${this.Apartment} ${this.Suite}`);
    this.formService.addCity(this.City);
    this.formService.addZIPCode(this.ZIPCode);


    this.openSnackBar("form is Submitted Successfully");

    console.log(this.formService.getData);

  }

}
