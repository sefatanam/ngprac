import { Component, OnInit } from '@angular/core';
import { MasterService } from './master.service';
import { MatTableDataSource } from '@angular/material';
import { Item } from './item.model';

@Component({
  selector: 'app-master-task',
  templateUrl: './master-task.component.html',
  styles: [
  ],
})





export class MasterTaskComponent implements OnInit {



  constructor(public _service: MasterService) { }
  displayedColumns = ['Id', 'Name', 'Code', 'Price', 'Discount'];

  itemDataList = null;
  dataSource = new MatTableDataSource(this.itemDataList);
  dt = new MatTableDataSource(this.itemDataList);
  catagories = this._service.getListOfCatagories();

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  ngOnInit(): void {
  }

  updateTable(peram){
    console.log(peram);
    this.itemDataList= this._service.getItemById(peram);
    new MatTableDataSource(this.itemDataList);
    console.log(this.itemDataList);
  }

  saveData() {
    console.log('it code');
  }

  getTotalCost() {
    return this.itemDataList.map(t => t.Discount).reduce((acc, value) => acc + value, 0);
  }
}
