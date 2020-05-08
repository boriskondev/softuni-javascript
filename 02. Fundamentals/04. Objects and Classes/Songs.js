function songs(array) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let numberOfSongs = Number(array.shift());
    let printType = array.pop();
    let songs = [];

    for (let songInfo = 0; songInfo < numberOfSongs; songInfo++) {
        let [type, name, time] = array[songInfo].split("_");
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (printType == "all") {
        for (let song of songs) {
            console.log(song.name);
        }
    } else {
        let filteredSongs = songs.filter((i) => i.type === printType);
        
        for (let song of filteredSongs) {
            console.log(song.name);
        }
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    )