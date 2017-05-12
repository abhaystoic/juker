// component's metadata can be accessed using this primary Angular library
import {Component, View} from "angular2/core";
import {SignInComponent} from "./sign-in/sign-in.component"
import {UploadFormComponent} from "./upload-form/upload-form.component"

//framework recognizes @Component annotation and knows that we are trying to create a new component
@Component({
   selector: 'app',  //specifies selector for HTML element named 'app'
   template: `<upload-form  #fu (change)="fu.addMusic()" [multiple]="true"></upload-form>
   `,
   directives: [
                SignInComponent,
                UploadFormComponent
   ]
})

// @View({
//   //template property holds component's companion template that tells Angular how to render a view
//   template: '<h2>Welcome {{name}}</h2>'
// })

export class App {
   name : 'Abhay!!!'
}