export const selectSong = (song) =>{
    return{
        type: 'SONG_SELECTED',
        paylaod: song
    }
}

//export default selectSong ;