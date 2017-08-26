Meteor.submit = function(event, time, gifImage) {
  // Default value of 1000 milliseconds
  time = time ? time/1000 : 1;
  var images = [];
  Images.find().forEach(function(file) {
    images.push(file.url());
  });

// calling createGIF method from gifshot library
  gifshot.createGIF({'images': images, 'interval': time}, function(obj) {
    if(!obj.error) {
      var link = document.createElement('a');
      link.href = obj.image;
      link.download = true;
      var image = document.createElement('img');
      image.src = obj.image;
      link.appendChild(image);
      gifImage.prepend(link);
    } else {
      console.log("Gifshot Error!");
    }
  });
}