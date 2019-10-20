import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component'

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule
  ],
  declarations: [
    LayoutComponent,
  ],
  exports: [
    LayoutComponent,
    NgZorroAntdModule
  ]
})
export class SharedModule { }
