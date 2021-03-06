"use strict";

const developerStore = {
  // import the playlist collection object
  developers: require("./developer-store.json").developers,

  // function to get all of the playlists
  getAllDevelopers() {
    return this.developers;
  }
};

// export the playlistStore object so it can be used elsewhere
module.exports = developerStore;
