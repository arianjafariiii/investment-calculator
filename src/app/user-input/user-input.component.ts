import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();
  enternedInitialInvestment = "0";
  enterenedAnnualInvestment = "0";
  enternedExpectedReturn = "5";
  enternedDuration = "10";
  onSubmitHandler() {
    this.calculate.emit({
      initialInvestment: +this.enternedInitialInvestment,
      annualInvestment: +this.enterenedAnnualInvestment,
      expectedReturn: +this.enternedExpectedReturn,
      duration: +this.enternedDuration
    })
  }
}
