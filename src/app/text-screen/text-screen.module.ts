import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextScreenComponent } from './text-screen/text-screen.component';
import { RouterModule } from '@angular/router';
import { routes } from './text-screen.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { modules } from './mat-modules';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ...modules
  ],
  declarations: [TextScreenComponent]
})
export class TextScreenModule { }
