import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatGridListModule } from "@angular/material/grid-list";

@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
    MatGridListModule
  ]
})
export class MaterialModule {}
