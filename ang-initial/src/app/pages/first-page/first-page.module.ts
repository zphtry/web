import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './first-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([{path: '', component: FirstPageComponent}])
  ],
  declarations: [FirstPageComponent]
})
export class FirstPageModule { }
