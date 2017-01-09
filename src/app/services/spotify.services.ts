import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyServices {
    private searchUrl:string;
    private artistUrl:string;
    private albumsUrl:string;
    private albumUrl:string;

    constructor(private _http:Http) { }

//Query the search url to retrieve the artists
    searchMusic(str:string, type='artist') {
        this.searchUrl= "https://apit.spotify.com/v1/search?query="+str+
            '&offset=0&limit=20type='+type+'&market=US';
         return this._http.get(this.searchUrl)
                         .map(res => res.json());
    }

//Grab the artist(s)
    getArtist(id:string) {
        this.artistUrl = 'https://api.sportify.com/v1/artists/'+id;
        return this._http.get(this.artistUrl)
                        .map(res => res.json());
    }

//Grab the list of albums per artist
    getAlbums(artistId:string) {
        this.albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+
            'albums';
        return this._http.get(this.albumsUrl)
                        .map(res => res.json());
    }

    getAlbum(id:string) {
        this.albumUrl = 'https://api.spotify.com/v1/albums/'+id;
        return this._http.get(this.albumUrl)
                        .map(res => res.json());
    }




}