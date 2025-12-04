import { Component, EventEmitter, Output, signal } from '@angular/core';
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
  enternedInitialInvestment = signal("0");
  enterenedAnnualInvestment = signal("0");
  enternedExpectedReturn = signal("5");
  enternedDuration = signal("10");
  onSubmitHandler() {
    this.calculate.emit({
      initialInvestment: +this.enternedInitialInvestment(),
      annualInvestment: +this.enterenedAnnualInvestment(),
      expectedReturn: +this.enternedExpectedReturn(),
      duration: +this.enternedDuration()
    })
  }
}
