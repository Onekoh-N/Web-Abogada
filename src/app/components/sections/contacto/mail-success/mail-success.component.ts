import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mail-success',
  standalone: true,
  imports: [],
  templateUrl: './mail-success.component.html',
  styleUrl: './mail-success.component.css'
})
export class MailSuccessComponent  {

  constructor(private _router: Router) { }

  goBack() {
    this._router.navigate(['/Contacto']);
  }

}
