//Import module level libraries here.
import { Component } from '@angular/core';


//Import modules from files within app here.
import { SpotifyServices } from './services/spotify.services';

@Component ({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './views/app.component.html',
    providers: [ SpotifyServices ]
})

export class AppComponent {}
