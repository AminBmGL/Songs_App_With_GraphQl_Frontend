import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators';



const getSongsQuery=gql`
query getSongs {
  songs {
    title
  }
}
`;

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  songs:any[]=[];

  constructor(private apollo:Apollo) { }

  ngOnInit() {
     this.apollo
      .query({query:getSongsQuery })
      .pipe(
        map((result:any)=> result.data.songs)
      )
      .subscribe((songs)=>{
        console.log(songs)
      })
  }

  

}
