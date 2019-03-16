// Capitalization and Mutability
function capitalizeWord(word) {
    let songs = [];

    songs.push(word[0].toUpperCase());

    for (let i = 1; i < word.length; i++){
        songs.push(word[i]);

    }

    songs = songs.toString();
    songs = songs.replace(/,/g,"");
    return songs;
}
