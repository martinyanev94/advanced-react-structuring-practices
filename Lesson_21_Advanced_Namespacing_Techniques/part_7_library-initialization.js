const LibraryA = {
  initialize: function() {
    console.log("LibraryA initialized");
  }
};

const LibraryB = {
  initialize: function() {
    console.log("LibraryB initialized");
  }
};

LibraryA.initialize(); // Outputs: LibraryA initialized
LibraryB.initialize(); // Outputs: LibraryB initialized
