// Instatiates Collection to store images
Images = new FS.Collection('Images', {
  stores: [new FS.Store.GridFS('Images')],
  filter: {
    allow: {
      contentTypes: ['image/*']
    },
    onInvalid: function(message) {
      console.log(message);
    }
  }
});

Images.allow({
  insert: function(){return true;}
});
