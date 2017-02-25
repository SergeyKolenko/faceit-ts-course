"use strict";
var fetch_1 = require("./fetch");
var elem = document.querySelector('.flikr-box');
var flickr = new fetch_1.FlickrApp({
    element: elem,
    uri: 'https://api.flickr.com/services/rest/?',
    queryMethod: 'flickr.photos.search',
    apiKey: '7fbc4d0fd04492d32fa9a2f718c6293e'
});
//# sourceMappingURL=main.js.map