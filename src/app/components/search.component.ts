import { Component } from '@angular/core';

import { SpotifyServices } from '../services/spotify.services';
import { Artist } from '../../artist';

@Component ({
    moduleId: module.id,
    selector: 'searchbar',
    templateUrl: '../views/components/search.component.html'
})

export class SearchComponent {
    searchStr:string;
    searchRes: Artist[];

    constructor(private _spotifyService:SpotifyServices) {}

    searchMusic() {
        this._spotifyService.searchMusic(this.searchStr).subscribe(
            res => {
                this.searchRes = res.artists.items;
            });
    }
}