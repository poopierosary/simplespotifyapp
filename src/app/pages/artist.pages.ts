//Modules from libraries.
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//Modules from within app.
import { Artist } from '../../artist';
import { Album } from '../../album';
import { SpotifyServices } from '../services/spotify.services';



@Component ({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: '../views/pages/artist.pages.html'
})

export class ArtistComponent implements OnInit {
    id:string;
    artist:Artist[];
    albums:Album[];

    constructor (
        private _spotifyService:SpotifyServices,
        private _route:ActivatedRoute
        ) {}

    ngOnInit() {
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService.getArtist(id)
                      .subscribe(artist => {
                          this.artist = artist;
                      });
                this._spotifyService.getAlbums(id)
                      .subscribe(albums => {
                          this.albums = albums.items;
                      });
            });
    }
}