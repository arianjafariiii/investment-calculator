import { Component,  signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  
  enternedInitialInvestment = signal("0");
  enterenedAnnualInvestment = signal("0");
  enternedExpectedReturn = signal("5");
  enternedDuration = signal("10");

  constructor(private investmentService: InvestmentService) {}

  onSubmitHandler() {
    this.investmentService.calculateInvestmentResults(
      {
      initialInvestment: +this.enternedInitialInvestment(),
      annualInvestment: +this.enterenedAnnualInvestment(),
      expectedReturn: +this.enternedExpectedReturn(),
      duration: +this.enternedDuration()
    }
    )

    this.enternedInitialInvestment = signal("0");
    this.enterenedAnnualInvestment = signal("0");
    this.enternedExpectedReturn = signal("5");
    this.enternedDuration = signal("10");
  }
}
