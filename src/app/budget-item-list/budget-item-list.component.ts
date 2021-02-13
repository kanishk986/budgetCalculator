import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
//import * as EventEmitter from 'events';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss'],
})
export class BudgetItemListComponent implements OnInit {
  @Input()
  budgetItem: BudgetItem[] | undefined;
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  constructor() {}

  ngOnInit(): void {}

  onDeleteButton(item: BudgetItem) {
    this.delete.emit(item);
  }
}
