//Import modules from libraries here/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Import modules from within app here.
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar.component';
import { SearchComponent } from './components/search.component';
import { AboutComponent } from './pages/about.pages';
import { ArtistComponent } from './pages/artist.pages';
import { AlbumComponent } from './pages/album.pages';

import { routing } from './app.routing';


@NgModule ({
    imports:        [ BrowserModule, routing,
                            FormsModule, HttpModule ],

    declarations: [ AppComponent, NavbarComponent,
                            SearchComponent, AboutComponent,
                            ArtistComponent, AlbumComponent ],

    bootstrap: [ AppComponent ]
})

export class AppModule { }