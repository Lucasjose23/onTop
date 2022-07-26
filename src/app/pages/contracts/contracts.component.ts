import { Component, OnInit } from '@angular/core';
import { TableItem } from 'src/app/interfaces/table-item';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.sass']
})
export class ContractsComponent implements OnInit {
  table: Array<TableItem> = [
    {
      pic:'assets/png/row-1-pic.png',contractor_name: 'Darlene Robertson', type: 'Traditional', start_date: 'Mar 4, 2021', amount: '$200 USD', status: 'active'
    },
    {
      pic:'assets/png/row-2-pic.png',contractor_name: 'Darlene Robertson', type: 'Traditional', start_date: 'Mar 4, 2021', amount: '$200 USD', status: 'active'
    },
    {
      pic:'assets/png/row-3-pic.png',contractor_name: 'Darlene Robertson', type: 'Traditional', start_date: 'Mar 4, 2021', amount: '$200 USD', status: 'pending'
    }
  ]
  showMsg :boolean =false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showMsg=true;
    }, 1000);
  }

}
