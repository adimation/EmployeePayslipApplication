import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Inject, Injectable } from '@angular/core';
import { BaseService } from '../core/abstraction/base-service.service';
import { IAppSettings, APP_SETTINGS } from '../core/app-settings';
import { ApplicationService } from '../core/services/application.service';
import { EmployeePayslipDTO } from '../models/employee-payslip-dto';
import { plainToClass } from "class-transformer";

@Injectable()
export class EmployeePayslipService extends BaseService {
    private payslips: EmployeePayslipDTO[] = new Array<EmployeePayslipDTO>();

    constructor(
        @Inject(APP_SETTINGS) protected config: IAppSettings,
        protected applicationService: ApplicationService
    ) {
        super(config, applicationService);
    }

    public addPayslip(payslip: EmployeePayslipDTO): void {
        this.payslips.push(plainToClass(EmployeePayslipDTO, payslip));
    }

    public getPayslips(): EmployeePayslipDTO[] {
        return plainToClass(EmployeePayslipDTO, this.payslips);
    }

    public removePayslip(index: number): void {
        this.payslips.splice(index, 1);
    }
}
