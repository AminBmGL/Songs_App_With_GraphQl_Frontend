import gql from 'graphql-tag';

export const getSongsQuery=gql`
query getSongs {
  songs {
    id
    title
  }
}
`;

export const addSongQuery=gql`
mutation addSong ($title:String!){
  addSong(title:$title){
    id
    title
  }
}
`;

export const deleteSong=gql`
mutation DeleteSong ($id:ID){
  deleteSong(id:$id){
    id
  }
}
`;

export const getSong=gql`
query GetSong ($id:ID!){
  song(id:$id){
    id
    title
    lyrics{
        id
        content
    }
  }
}
`;

export const addLyricToSong=gql`
mutation addLyricToSong ($content:String,$songId:ID){
    addLyricToSong(content:$content,songId:$songId){
    id
    title
    lyrics{
        id
        content
    }
  }
}
`;
