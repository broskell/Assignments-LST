const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"]
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: []
  },
  5439: {
    albumTitle: "ABBA Gold"
  }
};

function updatedRecords(records, id, prop, value){
    if (value === "") {
        delete records[id][prop];
    } 
    else if (prop != tracks) {
        records[id][prop] = value;
    }
    else if (prop === tracks && records[id].hasOwnproperty("tracks")) {
        records[id][tracks] == [value];
    }
    else if (prop === tracks) {
        records[id] = [...records[id].tracks, value]
    }
}

function updatedCollection(records, id, prop, value) {
    console.log("records", records);
    console.log("id", id);
    console.log("prop", prop);
    console.log("value", value);

    return records;
}

updatedCollection("recordCollection", 2548, "artist", "Ben")


console.log(updatedCollection(recordCollection, 5439, "artist", "ABBA"));
console.log(updatedCollection(recordCollection, 5439, "tracks", "Take a Chance on Me"));
console.log(updatedCollection(recordCollection, 2548, "artist", ""));