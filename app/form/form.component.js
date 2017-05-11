System.register(["angular2/core", "./contact"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, contact_1;
    var FormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_1_1) {
                contact_1 = contact_1_1;
            }],
        execute: function() {
            FormComponent = (function () {
                function FormComponent() {
                    this.countries = ["India", "Australie", "England", "USA"];
                    this.contact = new contact_1.Contact('Abhay', 'Gupta', this.countries[0], 1231242354);
                    this.submitted = false;
                    this.active = true;
                }
                FormComponent.prototype.onSubmit = function () { this.submitted = true; };
                FormComponent.prototype.newContact = function () {
                    var _this = this;
                    this.contact = new contact_1.Contact("", "");
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                FormComponent = __decorate([
                    core_1.Component({
                        selector: "contact-form",
                        templateUrl: "app/form/form.tpl.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], FormComponent);
                return FormComponent;
            }());
            exports_1("FormComponent", FormComponent);
        }
    }
});
//# sourceMappingURL=form.component.js.map