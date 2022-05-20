import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  income: number = 0;
  expenses: number = 0;
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.total = this.income - this.expenses;
  }

}
