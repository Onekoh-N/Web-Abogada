import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mail-error',
  standalone: true,
  imports: [],
  templateUrl: './mail-error.component.html',
  styleUrl: './mail-error.component.css'
})
export class MailErrorComponent {

  constructor(private _router: Router) { }
  goBack() {
    this._router.navigate(['/Contacto']);
  }

}
