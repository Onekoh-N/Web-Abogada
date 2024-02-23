import { Component, ElementRef, ViewChild } from '@angular/core';
import { ContactoText } from '../contacto.text';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { EMAILJS_SERVICE } from './emailjs.config';


@Component({
  selector: 'app-mail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './mail.component.html',
  styleUrl: './mail.component.css'
})
export class MailComponent {
  loading = false;
  contactoText = ContactoText;
  formMail: FormGroup;
  _EMAILJS_SERVICE = EMAILJS_SERVICE;

  constructor(private _router: Router, private formBuilder: FormBuilder) {

    this.formMail = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      telefono: ['', [Validators.required, Validators.pattern('^\\d{2,4}-\\d{6,8}$'), Validators.minLength(3)]],
      email: ['', [Validators.email, Validators.required]],
      mensaje: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  sendEmail() {
    this.loading = true;
    const templateParams = {
      nombre: this.formMail.get('nombre')?.value,
      telefono: this.formMail.get('telefono')?.value,
      email: this.formMail.get('email')?.value,
      mensaje: this.formMail.get('mensaje')?.value
    }
    emailjs.send(
      this._EMAILJS_SERVICE.SERVICE,
      this._EMAILJS_SERVICE.TEMPLATE,
      this.formMail.value,
      {
        publicKey: this._EMAILJS_SERVICE.PUBLIC_KEY,
      }).then(
        (response) => {
          this.loading = false;
          this._router.navigate(['/Contacto/MailSuccess']);
        },
        (err) => {
          this.loading = false;
          console.log(err);
          this._router.navigate(['/Contacto/MailError']);
        },
      );
  }


//HAS ERRORS?
hasErrors(controlName: string, errorType: string) {
  return this.formMail.get(controlName)?.touched && this.formMail.get(controlName)?.hasError(errorType);
}
}

