import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { SearchComponent } from './components/Search/search.component';
import { AboutComponent } from './components/About/about.component';
import { NavbarComponent } from './components/Navbar/navbar.component';

import { routing } from './app.routing'; 

import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';

import { ArtistComponent } from './components/Artists/artist.component';
import { AlbumComponent } from './components/Albums/album.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    routing, 
    FormsModule, 
    HttpModule ],
  declarations: [ 
    AppComponent, 
    SearchComponent,
    NavbarComponent,
    AboutComponent, 
    ArtistComponent,
    AlbumComponent ],
  bootstrap:    [ 
    AppComponent ]
})
export class AppModule { }
