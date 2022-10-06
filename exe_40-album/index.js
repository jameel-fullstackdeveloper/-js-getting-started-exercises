
function make_album(artist_name,album_ttile, number_of_tracks ) {

    let obj = {};

    if(number_of_tracks === undefined) {
         obj = {
                artist_name,
                album_ttile
                };
    } else {
         obj = {
            artist_name,
            album_ttile,
            number_of_tracks
            };
    }

    return obj;

}

console.log(make_album("Atif Aslam", "Dori"));
console.log(make_album("Arijit Singh", "Bhuj",10));
console.log(make_album("Nusrat Fateh Ali Khan", "Dillagi"));

