import { Injectable } from '@angular/core';
import { FormData } from '../Model/form-data';
import { PassThrough } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  formData: FormData = {
    Fullname: '',
    Email: '',
    Phone: 0,
    Password: '',
    ZIPCode: '',
    City: '',
    Street: ''
  };

  constructor() { }

  get getData() {
    return this.formData;
  }

  addFullname(fullname: string) {
    this.formData.Fullname = fullname;
  }
  addEmail(email: string) {
    this.formData.Email = email;
  }
  addPassword(password: string) {
    this.formData.Password = password;
  }
  addPhone(phone: number) {
    this.formData.Phone = phone;
  }
  addStreet(street: string) {
    this.formData.Street = street;
  }
  addCity(city: string) {
    this.formData.City = city;
  }
  addZIPCode(ZIPCode: string) {
    this.formData.ZIPCode = ZIPCode;
  }

}
