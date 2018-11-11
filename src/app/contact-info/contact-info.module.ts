import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { RouterModule } from '@angular/router';
import { routes } from './contact-info.routing';
import { modules } from './mat-modules';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ...modules
  ],
  declarations: [ContactInfoComponent]
})
export class ContactInfoModule { }
