import { LoggerService } from '../../../core/services/logger.service';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { BaseComponent } from 'src/app/core/abstraction/base-component';
import { ApplicationService } from 'src/app/core/services/application.service';
import { EmployeePayslipDTO } from 'src/app/models/employee-payslip-dto';
import { EmployeePayslipService } from 'src/app/services/employee-payslip.service';

@Component({
    selector: 'app-payslips',
    templateUrl: './payslips.component.html',
    styleUrls: ['./payslips.component.css']
})
export class PayslipsComponent extends BaseComponent implements OnInit {
    public payslips: EmployeePayslipDTO[] = new Array<EmployeePayslipDTO>();

    constructor(
        protected applicationService: ApplicationService, 
        protected loggerService: LoggerService,
        private empPayslipService: EmployeePayslipService
    ) {
        super(applicationService, loggerService);
    }

    public ngOnInit(): void {
        this.init();
    }

    public init(): void {
        this.payslips = this.empPayslipService.getPayslips();
    }

    public getDatePeriod(date: Date): string {
        return date.toDateString() + ' - ' + this.endOfMonth(date).toDateString();
    }

    private endOfMonth(date): Date {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }

    public removePayslip(index: number): void {
        this.empPayslipService.removePayslip(index);
        this.init();
    }
}
