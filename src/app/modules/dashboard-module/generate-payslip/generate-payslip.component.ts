import { LoggerService } from '../../../core/services/logger.service';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../core/abstraction/base-component';
import { ApplicationService } from '../../../core/services/application.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeePayslipDTO } from 'src/app/models/employee-payslip-dto';
import { EmployeePayslipService } from 'src/app/services/employee-payslip.service';

@Component({
    selector: 'app-generate-payslip',
    templateUrl: './generate-payslip.component.html',
    styleUrls: ['./generate-payslip.component.css']
})
export class GeneratePayslipComponent extends BaseComponent implements OnInit {
    public model: EmployeePayslipDTO;
    public validateForm: FormGroup;

    constructor(
        protected applicationService: ApplicationService,
        protected loggerService: LoggerService,
        private fb: FormBuilder,
        private empPayslipService: EmployeePayslipService
    ) {
        super(applicationService, loggerService);
    }

    public ngOnInit(): void {
        this.validateForm = this.fb.group({
            firstName: [null, [Validators.required]],
            lastName: [null, [Validators.required]],
            annualSalary: [0, [Validators.required]],
            superRate: [0, [Validators.required]],
            paymentStartDate: [null, [Validators.required]]
        });
    }

    public submitForm():void {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }

        if(this.validateForm.valid) {
            this.model = new EmployeePayslipDTO();
            this.model.FirstName = this.validateForm.controls['firstName'].value;
            this.model.LastName = this.validateForm.controls['lastName'].value;
            this.model.AnnualSalary = this.validateForm.controls['annualSalary'].value;
            this.model.SuperRate = this.validateForm.controls['superRate'].value;
            this.model.PaymentStartDate = this.validateForm.controls['paymentStartDate'].value;

            this.empPayslipService.addPayslip(this.model);
            this.applicationService.showSuccessNotification('Success!', 'Employee "'+this.model.FirstName+' '+ this.model.LastName+'" payslip added successfully.')
            this.resetForm();
        }
    }

    private resetForm(): void {
        this.model = new EmployeePayslipDTO();
        this.validateForm.reset();
        this.validateForm.controls['annualSalary'].setValue(0);
        this.validateForm.controls['superRate'].setValue(0);
        for (const key in this.validateForm.controls) {
          this.validateForm.controls[key].markAsPristine();
          this.validateForm.controls[key].updateValueAndValidity();
        }
    }

    formatterPercent = (value: number) => `${value} %`;
    parserPercent = (value: string) => value.replace(' %', '');
    formatterDollar = (value: number) => `$ ${value}`;
    parserDollar = (value: string) => value.replace('$ ', '');
}
