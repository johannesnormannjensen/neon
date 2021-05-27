import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { EmptyComponent } from './component/empty/empty.component';

@NgModule({
  imports: [
    CommonModule,
    MatSliderModule,
  ],
  declarations: [
    EmptyComponent
  ],
  exports: [
  ],
})
export class BlogShellModule { }
