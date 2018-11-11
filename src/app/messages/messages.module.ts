import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { routes } from './messages.routing';
import { modules } from './mat-modules';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ...modules
  ],
  declarations: [MessagesComponent]
})
export class MessagesModule { }
