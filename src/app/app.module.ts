import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LyricCreateComponent } from './lyric-create/lyric-create.component';
import { LyricListComponent } from './lyric-list/lyric-list.component';
import { SongCreateComponent } from './song-create/song-create.component';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { SongListComponent } from './song-list/song-list.component';
import { GraphQLModule } from './graphql.module';



@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    SongDetailComponent,
    LyricListComponent,
    LyricCreateComponent,
    SongCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
