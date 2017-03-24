"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TestComponent = (function () {
    function TestComponent() {
    }
    return TestComponent;
}());
TestComponent = __decorate([
    core_1.Component({
        selector: 'my-test',
        template: "\n        <h1>html template of TestComponent from DynamicModule</h1>\n    "
    })
], TestComponent);
exports.TestComponent = TestComponent;
var DynamicModule = (function () {
    function DynamicModule() {
    }
    return DynamicModule;
}());
DynamicModule = __decorate([
    core_1.NgModule({
        declarations: [TestComponent],
        exports: [TestComponent]
    })
], DynamicModule);
exports.DynamicModule = DynamicModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wbHVnaW5zL2R5bmFtaWMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQW9EO0FBUXBELElBQWEsYUFBYTtJQUExQjtJQUE2QixDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQUE3QixBQUE4QixJQUFBO0FBQWpCLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRSw0RUFFVDtLQUNKLENBQUM7R0FDVyxhQUFhLENBQUk7QUFBakIsc0NBQWE7QUFPMUIsSUFBYSxhQUFhO0lBQTFCO0lBQTZCLENBQUM7SUFBRCxvQkFBQztBQUFELENBQTdCLEFBQThCLElBQUE7QUFBakIsYUFBYTtJQUp6QixlQUFRLENBQUM7UUFDTixZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDN0IsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO0tBQzNCLENBQUM7R0FDVyxhQUFhLENBQUk7QUFBakIsc0NBQWEiLCJmaWxlIjoiYXBwL3BsdWdpbnMvZHluYW1pYy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktdGVzdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGgxPmh0bWwgdGVtcGxhdGUgb2YgVGVzdENvbXBvbmVudCBmcm9tIER5bmFtaWNNb2R1bGU8L2gxPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgVGVzdENvbXBvbmVudCB7IH1cblxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1Rlc3RDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtUZXN0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljTW9kdWxlIHsgfSJdfQ==
