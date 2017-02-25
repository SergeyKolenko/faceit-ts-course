import {FlickrApp} from "./fetch";

let elem = document.querySelector('.flikr-box') as HTMLDivElement;

let flickr = new FlickrApp({
    element: elem,
    uri: 'https://api.flickr.com/services/rest/?',
    queryMethod: 'flickr.photos.search',
    apiKey: '7fbc4d0fd04492d32fa9a2f718c6293e'
})