import { Result } from './../models/result';
import { RestCalculatorService } from './../../services/rest-calculator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  a: Number = 0;
  b: Number = 0;
  result: Number = 0;
  operation: String = '';

  constructor(private restCalculatorService: RestCalculatorService) {}

  ngOnInit(): void {}

  calculate(): Number {
    console.log(this.operation);
    switch (this.operation) {
      case 'sum':
        this.restCalculatorService
          .getSumValues(this.a, this.b)
          .subscribe((data: Result) => {
            this.result = data.result;
          });
        break;
      case 'sub':
        this.restCalculatorService
          .getSubValues(this.a, this.b)
          .subscribe((data: Result) => {
            this.result = data.result;
          });
        break;
      case 'mult':
        this.restCalculatorService
          .getMultValues(this.a, this.b)
          .subscribe((data: Result) => {
            this.result = data.result;
          });
        break;
      case 'div':
        this.restCalculatorService
          .getDivValues(this.a, this.b)
          .subscribe((data: Result) => {
            this.result = data.result;
          });
        break;
    }
    return this.result;
  }
}
