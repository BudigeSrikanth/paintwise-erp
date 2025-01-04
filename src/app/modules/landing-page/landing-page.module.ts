import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedModule
  ]
})
export class LandingPageModule { }
