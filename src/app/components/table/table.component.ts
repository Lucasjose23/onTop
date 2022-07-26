import { Component, Input, OnInit } from '@angular/core';
import { TableItem } from 'src/app/interfaces/table-item';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {

  @Input() tableList : Array<TableItem>=[];


  constructor() { }

  ngOnInit(): void {
  }

}
