import { Component } from '@angular/core';

import { MailComponent } from './mail/mail.component';
import { DatosContactoComponent } from './datos-contacto/datos-contacto.component';
import { ContactoText} from './contacto.text';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [MailComponent, RouterOutlet, DatosContactoComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  contactoText = ContactoText;

}
