import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatchPassword } from '../customValidator/MatchPassword';
import { Router } from '@angular/router';
import { FormService } from '../Service/form.service';
import { ConditionalPasswordValidator } from '../customValidator/ConditionalPasswordValidator';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.scss']
})
export class AccountInformationComponent implements OnInit {
  form: any
  isStrongPasswordRequired = true; // This condition determines password validity

  constructor(private formBuilder: FormBuilder, private router: Router, private formService: FormService) {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, ConditionalPasswordValidator()]],
      confirmPassword: ['', [Validators.required]],
    }, { validators: MatchPassword() })
  }

  get Password() {
    return this.form.get('password');
  }
  get ConfirmPassword() {
    return this.form.get('confirmPassword');
  }

  ngOnInit(): void {
  }

  checkPass() {
    // this.form.get('password')?.updateValueAndValidity(); // Re-run the validation
  }

  NextStep() {
    this.formService.addPassword(this.Password);
    this.router.navigate(['/ProfileDetails']);
  }
  PrevStep() {
    this.formService.addPassword(this.Password);
    this.router.navigate(['/PersonalInfo']);
  }

}
