"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserRegistrationComponent = void 0;
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var forms_2 = require("@angular/forms");
var UserRegistrationComponent = /** @class */ (function () {
    function UserRegistrationComponent() {
        this.userLists = [];
        this.UserDetails = new forms_1.FormGroup({
            name: new forms_1.FormControl('', forms_2.Validators.required),
            email: new forms_1.FormControl('', forms_2.Validators.required),
            address: new forms_1.FormControl('')
        });
    }
    UserRegistrationComponent.prototype.ngOnInit = function () { };
    UserRegistrationComponent.prototype.onSubmit = function () {
        var userLists = this.UserDetails.value;
    };
    UserRegistrationComponent.prototype.reset = function () {
        this.UserDetails.reset();
    };
    UserRegistrationComponent = __decorate([
        core_1.Component({
            selector: 'app-user-registration',
            templateUrl: './user-registration.component.html',
            styleUrls: ['./user-registration.component.css']
        })
    ], UserRegistrationComponent);
    return UserRegistrationComponent;
}());
exports.UserRegistrationComponent = UserRegistrationComponent;
