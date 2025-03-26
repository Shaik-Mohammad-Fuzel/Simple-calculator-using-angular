import { Component } from '@angular/core';
import { CalculatorModel } from './calculator.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  model: CalculatorModel = new CalculatorModel();

  calculate(operation: string) {
    switch (operation) {
      case 'add':
        this.model.result = this.model.num1 + this.model.num2;
        break;
      case 'subtract':
        this.model.result = this.model.num1 - this.model.num2;
        break;
      case 'multiply':
        this.model.result = this.model.num1 * this.model.num2;
        break;
      case 'divide':
        this.model.result = this.model.num2 !== 0 ? this.model.num1 / this.model.num2 : NaN;
        break;
      case 'mod':
        this.model.result = this.model.num1 % this.model.num2;
        break;
    }
  }
}
