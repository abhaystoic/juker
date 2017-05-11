// component's metadata can be accessed using this primary Angular library
import {Component, View} from "angular2/core";
import {ItemComponent} from "./item-list.component";
import {PlayersListComponent} from "./player-list.component";
import {FormComponent} from "./form/form.component"

//framework recognizes @Component annotation and knows that we are trying to create a new component
@Component({
   selector: 'app',  //specifies selector for HTML element named 'app'
   template: `<my-list></my-list>
              <player-list></player-list>
              <contact-form></contact-form>
   `,
   directives: [ItemComponent, PlayersListComponent, FormComponent]
})

// @View({
//   //template property holds component's companion template that tells Angular how to render a view
//   template: '<h2>Welcome {{name}}</h2>'
// })

export class App {
   name : 'Abhay!!!'
}