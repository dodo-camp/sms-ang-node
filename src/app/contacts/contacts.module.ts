import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import { RouterModule } from '@angular/router';
import { routes } from './contacts.routing';
import { modules } from './mat-modules';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ...modules
  ],
  declarations: [ContactsComponent]
})
export class ContactsModule { }
