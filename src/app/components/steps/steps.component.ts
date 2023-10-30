import { Component,OnInit } from '@angular/core';
import { StepsService } from 'src/app/services/steps.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css'],
})
export class StepsComponent implements OnInit {
  status: string = '';
  constructor(private StepsServices: StepsService) {}
  //#region static
  // status: string = 'shipped'; for test
  // getStepStatus(stepNumber: number): string {
  //   if (this.status === 'processed' && stepNumber <= 1) {
  //     return 'active';
  //   } else if (this.status === 'shipped' && stepNumber <= 2) {
  //     return 'active';
  //   } else if (this.status === 'enRoute' && stepNumber <= 3) {
  //     return 'active';
  //   } else if (this.status === 'arrived' && stepNumber <= 4) {
  //     return 'active';
  //   } else {
  //     return 'inactive';
  //   }
  // }
  //#endregion
  getStepStatus(stepNumber: number): string {
    if (this.status === 'processed' && stepNumber <= 1) {
      return 'active';
    } else if (this.status === 'shipped' && stepNumber <= 2) {
      return 'active';
    } else if (this.status === 'enRoute' && stepNumber <= 3) {
      return 'active';
    } else if (this.status === 'arrived' && stepNumber <= 4) {
      return 'active';
    } else {
      return 'inactive';
    }
  }
  ngOnInit() {
    this.StepsServices.getStatus().subscribe((data: any) => {
      this.status = data.status;
    });
  }
}
