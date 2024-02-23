import { Routes } from '@angular/router';
import { PresentacionComponent } from './components/sections/presentacion/presentacion.component';
import { ContactoComponent } from './components/sections/contacto/contacto.component';
import { PageSection } from './models/PageSection.enum';
import { MailSuccessComponent } from './components/sections/contacto/mail-success/mail-success.component';
import { MailComponent } from './components/sections/contacto/mail/mail.component';
import { MailErrorComponent } from './components/sections/contacto/mail-error/mail-error.component';

export const routes: Routes = [
  {path: PageSection.Presentacion, component: PresentacionComponent},
  {path: PageSection.Contacto, component: ContactoComponent, children: [
    {path: 'MailSuccess', component: MailSuccessComponent},
    {path: 'MailError', component: MailErrorComponent},
    {path: '', component: MailComponent},
  ]},
  { path: '**', redirectTo: PageSection.Presentacion }
];
