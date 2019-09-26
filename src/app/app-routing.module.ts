import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongListComponent } from './song-list/song-list.component';
import { SongCreateComponent } from './song-create/song-create.component';
import { SongDetailComponent } from './song-detail/song-detail.component';

const routes: Routes = [
  {path:'songs',component:SongListComponent},
  {path:'song/create',component:SongCreateComponent},
  {path:'songs/:id',component:SongDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
