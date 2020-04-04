import { Component, OnInit } from '@angular/core';
import { MasterService } from './master.service';
import { MatTableDataSource } from '@angular/material';
import { Item } from './item.model';
import { TableViewModel } from './tableView.model';

@Component({
  selector: 'app-master-task',
  templateUrl: './master-task.component.html',
  styles: [
  ],
})

export class MasterTaskComponent implements OnInit {

  constructor(public _service: MasterService) { }
  displayedColumns = ['Id', 'Name', 'Code', 'Price', 'Discount'];
  dataSource: Item[];

  tableViewDataSource: TableViewModel[];
  tableViewDisplayedColumns = ['Id', 'Name', 'Code', 'Price', 'Discount', 'Note', 'PriceAfterDiscount'];

  catagories = this._service.getListOfCatagories();

  // applyFilter(filterValue: string) {
  //   filterValue = filterValue.trim(); // Remove whitespace
  //   filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  //   this.dataSource.filter = filterValue;
  // }


  ngOnInit(): void {
  }

  updateTableOnChange(e) {

    console.log(e);
    this.cleanTable();
    const ds = this._service.getItemById(e);
    this.getItemAsTableViewModel(ds);
    this.tableViewDataSource = this.getItemAsTableViewModel(ds);
  }

  getItemAsTableViewModel(items) {

    var rtnData: TableViewModel[]=[];

    for (let i = 0; i < items.length; i++) {
      const element = items[i];

      var myObject = new TableViewModel();
      myObject.Id = element.Id;
      myObject.Code = element.Code;
      myObject.Price = element.Price;
      myObject.Discount = element.Discount;
      myObject.Name = element.Name;
      myObject.Note = '';
      myObject.PriceAfterDiscount = 0;
      rtnData.push(myObject);

    }

    return rtnData;
  }


  cleanTable() {
    this.dataSource = null;

  }
  saveData() {
    console.log(this.dataSource);
  }

  getTotalCost() {
    return this.dataSource.map(t => t.Discount).reduce((acc, value) => (acc.valueOf() + value.valueOf()), 0);
  }


}
