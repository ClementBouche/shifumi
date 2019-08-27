import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutNavComponent } from './components/layout-nav/layout-nav.component';
import { LayoutSideComponent } from './components/layout-side/layout-side.component';

@NgModule({
  declarations: [
    LayoutComponent,
    LayoutNavComponent,
    LayoutSideComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent,
    LayoutNavComponent,
    LayoutSideComponent,
  ]
})
export class SharedLayoutModule { }
