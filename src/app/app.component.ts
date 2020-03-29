import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';


export interface Transaction {
  item: string;
  cost: number;
}

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Angular Material Practice';
  notifications: number = 0;
  opened: boolean = false;
  showSpinner: boolean = false;


  displayedColumns = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }





  constructor(private snackbar: MatSnackBar) { }
  OpenSnackbar(message, action) {
    let snackbarRef = this.snackbar.open(message, action, { duration: 1100 });

    snackbarRef.afterDismissed().subscribe(() => {
      console.log("The Snack bar Dismised");
    })

    snackbarRef.onAction().subscribe(() => {
      console.log("Snackbar trigered");
    })
  }


  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }

  myForm = new FormControl();
  filterOptions: Observable<string[]>;
  ngOnInit() {
    this.filterOptions = this.myForm.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))

    );

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(c => c.toLowerCase().includes(filterValue));
  }
  options: string[] = ['Angular', 'React', 'Vue', 'C#', 'Xamarin', 'React native'];
  optionObject = [
    { name: "Angular" },
    { name: "React" },
    { name: "Vue" },
    { name: "C#" },
    { name: "Xamarin" },
    { name: "React Native" },
  ]

  displayOption(str: any) {
    return str ? str.name : undefined;
  }

  OpenCustomSnackBarComponent() {
    this.snackbar.openFromComponent(CustomSnackBarComponent, { duration: 1000 });
  }
}



// Custom Snackbar component
@Component({
  selector: 'custom-snackbar',
  template: '<span style="color:red">Custom Snack</span>'
})
export class CustomSnackBarComponent {
}



