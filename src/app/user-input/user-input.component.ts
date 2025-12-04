import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enternedInitialInvestment = "0";
  enterenedAnnualInvestment = "0";
  enternedExpectedReturn = "5";
  enternedDuration = "10";
  onSubmitHandler() {
    console.log('Submitted!');
    console.log(this.enternedInitialInvestment);
    console.log(this.enterenedAnnualInvestment);
    console.log(this.enternedExpectedReturn);
    console.log(this.enternedDuration);
  }
}
