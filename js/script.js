var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=4cf91fe1989e65b4261bed85ce0bf753&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1",
  "method": "GET",
  "headers": {}
};

$.ajax(settings).done(function (data) {
    $.each( data.photos.photo, function( i, gp ) {

    var farmId = gp.farm;
    var serverId = gp.server;
    var id = gp.id;
    var secret = gp.secret;

    $("#flickr").append('<img src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/>');

    });
});
