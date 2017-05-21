import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 

import { SearchComponent } from './components/Search/search.component';
import { AboutComponent } from './components/About/about.component';

import { ArtistComponent } from './components/Artists/artist.component';
import { AlbumComponent} from './components/Albums/album.component'; 


const appRouters: Routes = [
    {
        path: '', 
        component: SearchComponent
    },
    {
        path:'about',
        component: AboutComponent
    }, 
    {
        path:'artist/:id', 
        component: ArtistComponent
    }, 
    {
        path:'album/:id', 
        component: AlbumComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters); 
    

