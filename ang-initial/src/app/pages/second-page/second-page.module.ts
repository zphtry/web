import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondPageComponent } from './second-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([{path: '', component: SecondPageComponent}])
  ],
  declarations: [SecondPageComponent]
})
export class SecondPageModule { }
