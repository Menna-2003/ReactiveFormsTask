import { Component, OnInit } from '@angular/core';
import { FormBuilder, MinLengthValidator, Validators } from '@angular/forms';
import { CheckEmailExistance } from '../customValidator/CheckEmailExistance';
import { Router } from '@angular/router';
import { FormService } from '../Service/form.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  form: any;
  emailArray = [
    "johndoe@example.com",
    "janesmith@example.com",
    "alicejones@example.com",
    "bobbrown@example.com",
    "charliedavis@example.com"
  ];


  constructor(private formBuilder: FormBuilder, private router: Router, private formService: FormService) {
    this.form = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, CheckEmailExistance(this.emailArray)]],
    })
  }

  get FullName() {
    return this.form.get('fullName');
  }

  get Email() {
    return this.form.get('email');
  }

  ngOnInit(): void {
  }

  NextStep() {

    this.formService.addFullname(this.FullName)
    this.formService.addEmail(this.Email)

    this.router.navigate(['/AccountInfo']);
  }

}
