import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { DashboardRoutesModule } from './dashboard-routes.module';
import { GeneratePayslipComponent } from './generate-payslip/generate-payslip.component';
import { PayslipsComponent } from './payslips/payslips.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutesModule,
    SharedModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    GeneratePayslipComponent,
    PayslipsComponent
  ],
  providers: [
  ],
  entryComponents: [
  ]
})
export class DashboardModule { }
