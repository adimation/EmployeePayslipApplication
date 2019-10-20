export class EmployeePayslipDTO {
    public FirstName: string;
    public LastName: string;
    public AnnualSalary: number;
    public SuperRate: number;
    public PaymentStartDate: Date;

    private _Name: string;
    private _GrossIncome: number;
    private _IncomeTax: number;
    private _NetIncome: number;
    private _SuperAmount: number;

    public get Name(): string {
        return this.FirstName + ' ' + this.LastName;
    }

    public get GrossIncome(): number {
        return this.AnnualSalary / 12;
    }

    public get IncomeTax(): number {
        if(this.AnnualSalary > 18200 && this.AnnualSalary <= 37000) {
            return (this.AnnualSalary - 18200) * 0.19;
        }else if(this.AnnualSalary > 37000 && this.AnnualSalary <= 87000) {
            return ((this.AnnualSalary - 37000) * 0.325) + 3572;
        }else if(this.AnnualSalary > 87000 && this.AnnualSalary <= 180000) {
            return ((this.AnnualSalary - 87000) * 0.37) + 19822;
        }else if(this.AnnualSalary > 180000) {
            return ((this.AnnualSalary - 180000) * 0.45) + 54232;
        }
        return 0;
    }

    public get NetIncomeTax(): number {
        return this.IncomeTax/12;
    }

    public get NetIncome(): number {
        return this.GrossIncome - this.NetIncomeTax;
    }

    public get SuperAmount(): number {
        return this.GrossIncome * this.SuperRate/100;
    }
}