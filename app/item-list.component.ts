import {Component} from "angular2/core"

@Component({
  selector: "my-list",
  template:`<h2>List of Fruits</h2>
   <ul>
      <li *ngFor="#myItem of itemList" (click)="onItemClicked(myItem)">{{myItem.name}}</li>
   </ul>
   <input type="text" [(ngModel)]="clickedItem.name">`
})

export class ItemComponent{
  public itemList = [
    {name: "Apple"},
    {name: "Mango"},
    {name: "Orange"},
    {name: "Peach"}
  ];
  public clickedItem = {name: ""};
  onItemClicked(Item) {
    this.clickedItem = Item;
  }
}