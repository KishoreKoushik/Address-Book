import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  constructor() {}

  addresses = [{
    name: 'A. Reddy',
    adresss: 's/o B. reddy, abc, sas Taulk, Tumkur District - 572137',
    ph: 9880066835
  },
  {
    name: 'A. Reddy',
    adresss: 's/o B. reddy, abc, sas Taulk, Tumkur District - 572137',
    ph: 9880066835
  },
  {
    name: 'A. Reddy',
    adresss: 's/o B. reddy, abc, sas Taulk, Tumkur District - 572137',
    ph: 9880066835
  }]
}
