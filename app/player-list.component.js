System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var PlayersListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PlayersListComponent = (function () {
                function PlayersListComponent() {
                    this.fruits = ['Apple', 'Orange', 'Mango', 'Grapes'];
                    this.myfruit = this.fruits[1];
                    this.capital = "New Delhi";
                }
                PlayersListComponent = __decorate([
                    core_1.Component({
                        selector: "player-list"
                    }),
                    core_1.View({
                        template: "\n    <h2>Showing data using component properties with interpolation</h2>\n    <h3>Player Name:{{player}}</h3>\n    <h3>He is famous in: {{sport}}</h3><br>\n\n    <h2>Showing data using constructor or variable initialization</h2>\n    <h3>India capital is: {{capital}}</h3><br>\n\n    <h2>Showing data using array property with NgFor</h2>\n    <h3>My favorite fruit is: {{myfruit}}</h3>\n    <p>List of Fruits:</p>\n    <ul>\n       <li *ngFor=\"#fruit of fruits\">\n          {{ fruit }}\n       </li>\n    </ul>\n    <h3>Type and hit Enter to see the magic</h3>\n    <input #myval (keyup.enter)=\"values=myval.value\">\n    <p>{{values}}</p>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PlayersListComponent);
                return PlayersListComponent;
            }());
            exports_1("PlayersListComponent", PlayersListComponent);
        }
    }
});
//# sourceMappingURL=player-list.component.js.map