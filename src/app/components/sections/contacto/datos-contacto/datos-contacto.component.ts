import { Component } from '@angular/core';
import { ContactoText } from '../contacto.text';

@Component({
  selector: 'app-datos-contacto',
  standalone: true,
  imports: [],
  templateUrl: './datos-contacto.component.html',
  styleUrl: './datos-contacto.component.css'
})
export class DatosContactoComponent {
  contactoText = ContactoText;
}
