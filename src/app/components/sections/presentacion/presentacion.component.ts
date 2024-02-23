import { Component } from '@angular/core';
import { Presentacion } from '../../../models/Presentacion.text';
@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.css'
})
export class PresentacionComponent {
  Presentacion = Presentacion;
  textos: string[] = [Presentacion.logro_1, Presentacion.logro_2, Presentacion.logro_3];
  textoActual: number = 0;
  texto: string = this.textos[this.textoActual];

  anterior() {
    if (this.textoActual > 0) {
      this.textoActual--;
      this.texto = this.textos[this.textoActual];
    }else{
      this.textoActual = this.textos.length - 1;
      this.texto = this.textos[this.textoActual];
    }
  }
  siguiente() {
    if (this.textoActual < this.textos.length - 1) {
      this.textoActual++;
      this.texto = this.textos[this.textoActual];
    } else {
      this.textoActual = 0;
      this.texto = this.textos[this.textoActual];
    }
  }

}
