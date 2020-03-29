import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { OfferDetail } from './offer-detail.model';
import { ItemCatagory } from './item-catagory.model';
import { DiscountOffer } from './discount-offer.model';


const ITEMS_DATA: Item[] = [
  { Id: 1, Name: 'Shirt', Code: '123a', Price: 1.12, ItemCatagoryId: 1 },
  { Id: 2, Name: 'Pant', Code: '123b', Price: 2.12, ItemCatagoryId: 1 },
  { Id: 3, Name: 'Shoe', Code: '123c', Price: 3.12, ItemCatagoryId: 1 },
  { Id: 4, Name: 'T-Shirt', Code: '123d', Price: 4.12, ItemCatagoryId: 1 },
  { Id: 5, Name: 'Sweater', Code: '123e', Price: 5.12, ItemCatagoryId: 1 },
  { Id: 8, Name: 'Pizza', Code: '123a', Price: 1.12, ItemCatagoryId: 2 },
  { Id: 9, Name: 'Burger', Code: '123b', Price: 2.12, ItemCatagoryId: 2 },
  { Id: 10, Name: 'Tea', Code: '123c', Price: 3.12, ItemCatagoryId: 2 },
  { Id: 11, Name: 'Coffe', Code: '123d', Price: 4.12, ItemCatagoryId: 2 },
  { Id: 12, Name: 'Wine', Code: '123e', Price: 5.12, ItemCatagoryId: 2 },
];
const CATAGORY_DATA: ItemCatagory[] = [
  { Id: 1, Name: 'Shopping' },
  { Id: 2, Name: 'Food' },
]
@Injectable({
  providedIn: 'root'
})

export class MasterService {
  private listOfItems: Item[] = ITEMS_DATA; 
  private itemCatagories: ItemCatagory[] = CATAGORY_DATA;
 



  constructor() { }

  //#region  Get total data
  getListOfItems() {
    return this.listOfItems;
  }

  getListOfCatagories() {
    return this.itemCatagories;
  }
  //#endregion

  //#region Get Item by Catagory Id 
  getItemById(peram: number) {
    var data = ITEMS_DATA.find(c => c.ItemCatagoryId == peram);
  }
  //#endregion



}
