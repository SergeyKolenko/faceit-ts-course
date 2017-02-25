// /** uri: 'https://api.flickr.com/services/rest/?',
//  queryMethod: 'flickr.photos.search',
//  apiKey: '7fbc4d0fd04492d32fa9a2f718c6293e'
//  */
//

/// <reference path="fetch.d.ts" />

type options = {
    element: HTMLElement;
    uri: string;
    queryMethod: string;
    apiKey: string;
}

export class FlickrApp {
  protected element: HTMLElement;
  protected input: HTMLInputElement;
  protected searchButton: HTMLButtonElement;
  protected imageBox: HTMLDivElement;
  protected uri: string;
  protected queryMethod: string;
  protected apiKey: string;
  protected photos: any;

  constructor(opt: options) {
    let {element, uri, queryMethod, apiKey } = opt;
    this.element = element;
    this.uri = uri;
    this.queryMethod = queryMethod;
    this.apiKey = apiKey;

    this.input = this.element.querySelector('.flickr-search-input') as HTMLInputElement;
    this.imageBox = this.element.querySelector('.image-area') as HTMLDivElement;
    this.searchButton = this.element.querySelector('.flickr-search-button') as HTMLButtonElement;

    this.searchButton.addEventListener('click', this.search.bind(this, this.render.bind(this)))

  }

  protected render(body:any):void {
    this.photos = body.photos.photo;
    let content = '';
    for (let photo of this.photos) {
        content += `<div  class='image-box'>
        <img src='https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg' />
        <p>${photo.title}</p>
        </div>`;
    }
    this.imageBox.innerHTML = content;
  }

  protected search(callback:(body:any)=>any):void {
    if(!this.input.value) {
      return;
    }
    let text = this.input.value;
    let url = new Request(`${this.uri}method=${this.queryMethod}&api_key=${this.apiKey}&text=${text}&page=1&format=json&nojsoncallback=1`);
    this.getPhotos(url, callback)
  }

  protected getPhotos(input: string | Request, callback:(body: any)=> any):void {
    fetch(input)
      .then((response: Response):PromiseLike<any> =>{
        return response.json();
      })
      .then(callback);
  }
}
