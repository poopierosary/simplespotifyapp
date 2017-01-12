"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Import modules from libraries here/
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
//Import modules from within app here.
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./components/navbar.component");
var search_component_1 = require("./components/search.component");
var about_pages_1 = require("./pages/about.pages");
var artist_pages_1 = require("./pages/artist.pages");
var album_pages_1 = require("./pages/album.pages");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_1.routing,
            forms_1.FormsModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, navbar_component_1.NavbarComponent,
            search_component_1.SearchComponent, about_pages_1.AboutComponent,
            artist_pages_1.ArtistComponent, album_pages_1.AlbumComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
