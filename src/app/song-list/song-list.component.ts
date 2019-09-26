import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators';
import { getSongsQuery, deleteSong } from '../queries';
import { Router } from '@angular/router';


@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  songs:any[]=[];

  constructor(private apollo:Apollo,
              private router:Router) { }

  ngOnInit() {
     this.apollo
      .watchQuery({query:getSongsQuery })
      .valueChanges
      .pipe(
        map((result:any)=> result.data.songs)
      )
      .subscribe((songs)=>{
        this.songs=songs
        console.log(this.songs)
      })
  }

  deleteSong(id){
    const variables={id:id}
    this.apollo
    .mutate({mutation:deleteSong,variables,refetchQueries:[{query:getSongsQuery}] })
    .subscribe(songDeleted=>{
    })
  }
  navigateToSong(id){
  this.router.navigate(['/songs',id])
  }
  
}
