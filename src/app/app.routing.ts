//Import module level libraries here.
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import module from within app here.
import { SearchComponent } from './components/search.component';
import { AboutComponent } from './pages/about.pages';
import { ArtistComponent } from './pages/artist.pages';


const appRoutes: Routes = [
    {
        path: '',
        component: SearchComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'artist/:id',
        component: ArtistComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);