"use strict";
var router_1 = require("@angular/router");
//Import module from within app here.
var search_component_1 = require("./components/search.component");
var about_pages_1 = require("./pages/about.pages");
var artist_pages_1 = require("./pages/artist.pages");
var album_pages_1 = require("./pages/album.pages");
var appRoutes = [
    {
        path: 'simplespotifyapp',
        component: search_component_1.SearchComponent
    },
    {
        path: 'simplespotifyapp/about',
        component: about_pages_1.AboutComponent
    },
    {
        path: 'simplespotifyapp/artist/:id',
        component: artist_pages_1.ArtistComponent
    },
    {
        path: 'simplespotifyapp/album/:id',
        component: album_pages_1.AlbumComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);

//# sourceMappingURL=app.routing.js.map
