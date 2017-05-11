import {Component} from "angular2/core";
import {NgForm} from "angular2/common";
import {Contact} from "./contact"

@Component({
  selector: "contact-form",
  templateUrl: "app/form/form.tpl.html"
})

export class FormComponent {
  countries = ["India", "Australie", "England", "USA"];
  contact = new Contact('Abhay',
                        'Gupta',
                        this.countries[0],
                        1231242354
                        );
  submitted = false;
  onSubmit() { this.submitted = true; }
  active = true;
  newContact() {
    this.contact = new Contact("", "");
    this.active = false;
    setTimeout(() => this.active=true, 0);
  }
}
