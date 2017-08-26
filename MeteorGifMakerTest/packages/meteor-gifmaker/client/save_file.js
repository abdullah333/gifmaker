// this function will insert image to Images collection
Meteor.saveFile = function(event) {
  FS.Utility.eachFile(event, function(file) {
    var newFile = new FS.File(file);
    Images.insert(newFile, function(error, result) {
      if(error) {
        console.log("Error while uploading the image");
      } else {
        console.log("Image upload success!");
      }
    });
  });
}
