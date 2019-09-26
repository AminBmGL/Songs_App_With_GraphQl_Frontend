import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { Router } from '@angular/router';
import { addSongQuery, getSongsQuery } from '../queries';


@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.css']
})
export class SongCreateComponent  {
  title;

  constructor(private apollo:Apollo,
              private router:Router) { }
  
  addSong(){
    const variables={title:this.title}
    this.apollo
    .mutate({mutation:addSongQuery,variables,refetchQueries:[{query:getSongsQuery}] })
    .subscribe(songAdded=>{
      this.router.navigate(['/songs'])
    })
  }

}
