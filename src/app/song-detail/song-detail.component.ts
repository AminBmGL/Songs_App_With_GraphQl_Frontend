import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { getSong, addLyricToSong, likeLyric } from '../queries';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent  {
song:any={};
lyricContent;

  constructor(private route:ActivatedRoute,
              private apollo:Apollo) { 
    this.route.params
    .subscribe(params=>{
      const variables={id:params.id}
      this.apollo
      .watchQuery({query:getSong,variables})
      .valueChanges
      .pipe(
        map((response:any)=>response.data.song)
      )
      .subscribe(song=>{
        this.song=song;
      })
    })
  }

  addLyric(){
    const variables={
      content:this.lyricContent,
      songId:this.song.id
    }
    this.apollo
    .mutate({mutation:addLyricToSong,variables })
    .pipe(
      map((response:any)=>response.data.addLyricToSong)
    )
    .subscribe(song=>{
      this.lyricContent=""
      //this.song=song
    })
  }
  likeLyric(lyricId,nblikes){
    const variables={
      id:lyricId
    }
    this.apollo
    .mutate({mutation:likeLyric,
      variables,
      //Guess the response to change it immediately and avoid latency
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id: lyricId,
          __typename: 'LyricType',
          likes: nblikes+1,
        }
     }})
    .pipe(
      map((response:any)=>response.data.likeLyric)
    )
    .subscribe(lyric=>{
    
    })
  }

 

}
