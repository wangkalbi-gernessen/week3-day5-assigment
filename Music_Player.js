let library = {

  songs: { s01: { id: "s01",
                   name: "Money",
                   artist: "Pink Floyd",
                   album: "Dark Side of the Moon" },
            s02: { id: "s02",
                   name: "Blessings",
                   artist: "Chance, The Rapper",
                   album: "Colouring Book"},
            s03: { id: "s03",
                   name: "Purple Haze",
                   artist: "Jimi Hendrix",
                   album: "Are You Experienced"}
          },


  playlists: { p01: { id: "p01",
                      name: "Coding Jamz",
                      tracks: ["s01", "s03"]
                    },
               p02: { id: "p02",
                      name: "Music to cry to",
                      tracks: ["s02"]
                    }
             },  

  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  printAllSongNames: function() {
    // print the names of all the songs to the console

    let songIDs = Object.keys(library.songs);
    songIDs.forEach((song) =>{
      console.log(library.songs[song].name);  
    });
  },

  printSongName: function(songID) {
    // print the name of a song when given its ID
  
    if(library.songs.hasOwnProperty(songID)){
      console.log(library.songs[songID].name);
    }else {
      console.log("Nothing found");
    }
  },

  printPlaylistName: function(playlistID) {
    // Print the name of a playlist when given its ID 
    if(library.playlists.hasOwnProperty(playlistID)){
      console.log(library.playlists[playlistID].name);
    }
  },

  printAllPlaylistNames: function() {
    // Print the nmaes of all the playlists 
    let playlistIDs = Object.keys(library.playlists);
      playlistIDs.forEach((playlist) =>{
      console.log(this.playlists[playlist].name);  
    });
  },

  printPlaylistSongs: function(playlistID) {
    // Print the names of all the songs in whatever playlist id was given
    let playlist = Object.keys(library.playlists);
    playlist.forEach((playlistIDKeys) => {
      if( library.playlists[playlistIDKeys].id === playlistID){
        let playlistTracks = library.playlists[playlistIDKeys].tracks;
        playlistTracks.forEach((track)=>{
          let songID = Object.keys(library.songs);
          songID.forEach((song) =>{
            if(library.songs[song].id === track){
              console.log(library.songs[song].name);
            }
          });
        });
      }
    });
  },

  addSong: function(name, artist, album) {
    // add a new song to the songs object. The song should be its own object, 
    // containing a randomly generated id, a name, an artist, and an album 
    // console.log to confirm that the song has been added.

    let id =  library.generateUid();
    // console.log(songID);
    let songObject = {
        id: id,
        name: name,
        artist: artist,
        album: album
    };　
    library.songs[id] = songObject;
    console.log(library.songs);
  },

  addSongToPlaylist: function(songID, playlistID) {
    // given a songID, add that song to the playlist for the given playlistID
    //console.log the playlist to make sure the song was added.

    let songIDValue = Object.keys(library.songs);
    songIDValue.forEach((songElement) => {
      if(library.songs[songElement].id === songID){
        // console.log(songElement);
        let playlistIDValue = Object.keys(library.playlists);
        playlistIDValue.forEach((playlistElement)=>{
          if(library.playlists[playlistElement].id === playlistID){
            library.playlists[playlistElement].tracks.push(songID);
          }
        });
      }
    });
    console.log(library.playlists);
  },

  addPlaylist: function(name, arrOfSongs) {
    // add a new playlist to the playlist object. it will be
    // containing a randomly generated id, a name, and an array of songs to be added to the playlist 
    // console.log to confirm that the playlist has been added.
    
    let id = library.generateUid(); //make playlist id
    let playlistObject = {
        id: id,
        name: name,
        tracks: arrOfSongs,
    };　
    library.playlists[id] = playlistObject;
    console.log(library.playlists);
  }
}

library.generateUid();
library.printAllSongNames();
library.printSongName('s04');
library.printPlaylistName('p01');
library.printAllPlaylistNames();
library.printPlaylistSongs('p01'); 
library.addSong("sakura", "naotaro", "sakura");
library.addSongToPlaylist('s02', 'p01');
library.addPlaylist("Music Station", ["s01","s02"]);

// console.log(Object.keys(library.songs))

// library.addSongToPlaylist('s02', 'p02');

// console.log(library.songs);