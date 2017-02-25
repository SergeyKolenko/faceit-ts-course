// /** uri: 'https://api.flickr.com/services/rest/?',
//  queryMethod: 'flickr.photos.search',
//  apiKey: '7fbc4d0fd04492d32fa9a2f718c6293e'
//  */
//
"use strict";
var FlickrApp = (function () {
    function FlickrApp(opt) {
        var element = opt.element, uri = opt.uri, queryMethod = opt.queryMethod, apiKey = opt.apiKey;
        this.element = element;
        this.uri = uri;
        this.queryMethod = queryMethod;
        this.apiKey = apiKey;
        this.input = this.element.querySelector('.flickr-search-input');
        this.imageBox = this.element.querySelector('.image-area');
        this.searchButton = this.element.querySelector('.flickr-search-button');
        this.searchButton.addEventListener('click', this.search.bind(this, this.render.bind(this)));
    }
    FlickrApp.prototype.render = function (body) {
        this.photos = body.photos.photo;
        var content = '';
        for (var _i = 0, _a = this.photos; _i < _a.length; _i++) {
            var photo = _a[_i];
            content += "<div  class='image-box'>\n        <img src='https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg' />\n        <p>" + photo.title + "</p>\n        </div>";
        }
        this.imageBox.innerHTML = content;
    };
    FlickrApp.prototype.search = function (callback) {
        if (!this.input.value) {
            return;
        }
        var text = this.input.value;
        var url = new Request(this.uri + "method=" + this.queryMethod + "&api_key=" + this.apiKey + "&text=" + text + "&page=1&format=json&nojsoncallback=1");
        this.getPhotos(url, callback);
    };
    FlickrApp.prototype.getPhotos = function (input, callback) {
        fetch(input)
            .then(function (response) {
            return response.json();
        })
            .then(callback);
    };
    return FlickrApp;
}());
exports.FlickrApp = FlickrApp;
//# sourceMappingURL=fetch.js.map