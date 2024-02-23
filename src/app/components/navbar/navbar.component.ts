import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSection } from '../../models/PageSection.enum';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{
  currentSection: PageSection;
  pageSection = PageSection;

  constructor(private _router: Router) {
    this.currentSection = this._router.url.split('/')[1] as PageSection;
  }

  selectSection(selectedSeccion: PageSection) {
    this.currentSection = selectedSeccion;

    this._router.navigate([selectedSeccion])
  }

}
