import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../../shared/components/layout/layout.component';
import { GeneratePayslipComponent } from './generate-payslip/generate-payslip.component';
import { PayslipsComponent } from './payslips/payslips.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'generate-payslip'
            },
            {
                path: 'generate-payslip',
                component: GeneratePayslipComponent
            },
            {
                path: 'payslips',
                component: PayslipsComponent
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class DashboardRoutesModule {}
