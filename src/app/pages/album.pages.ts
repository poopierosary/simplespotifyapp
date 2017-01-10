//Modules from libraries
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//Modules from within app.
import { Artist } from '../../artist';
import { Album } from '../../album';
import { SpotifyServices } from '../services/spotify.services';



@Component ({
    moduleId: module.id,
    selector: 'album',
    templateUrl: '../views/pages/album.pages.html'
})

export class AlbumComponent implements OnInit {
    id:string;
    album:Album[];

    constructor (
        private _spotifyService:SpotifyServices,
        private _route:ActivatedRoute
        ) {}

    ngOnInit() {
        this._route.params
              .map(params => params['id'])
              .subscribe((id) => {
                  this._spotifyService.getAlbum(id)
                        .subscribe(album => {
                            this.album = album;
                        });
              });
    }
}