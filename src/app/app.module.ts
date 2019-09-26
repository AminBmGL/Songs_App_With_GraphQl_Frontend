import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { LyricListComponent } from './lyric-list/lyric-list.component';
import { SongCreateComponent } from './song-create/song-create.component';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { SongListComponent } from './song-list/song-list.component';



@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    SongDetailComponent,
    LyricListComponent,
    SongCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GraphQLModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
