import { Component, OnInit } from '@angular/core';
import { MasterService } from './master.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-master-task',
  templateUrl: './master-task.component.html',
  styles: [
  ],
})





export class MasterTaskComponent implements OnInit {


  
  constructor( public _service : MasterService) { }
  displayedColumns = ['Id', 'Name', 'Code', 'Price'];
  dataSource = new MatTableDataSource(this._service.getListOfItems());
  catagories = this._service.getListOfCatagories();
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  ngOnInit(): void {
  }

  
  saveData(){
    console.log('it code');
  }
   getTotalCost() {
       
    }
}
