export default class ImageCache {
  constructor(missing_image = '/assets/404.png') {
    this.cachedImages = {};

    var image = new Image();
    image.src = missing_image;
    this.missing_image = image;
  }

  load(images, callback) {
    let imagesLoaded = 0;
    let imagesToLoad = images.length;

    for(const image of images) {
      if(!this.cachedImages[image.name]) {
        let newImage = new Image();
        newImage.onload = () => {
          this.cachedImages[image.name] = newImage;
          imagesLoaded++;
          if(imagesLoaded === imagesToLoad && typeof callback === 'function') {
            callback();
          }
        };
        newImage.src = image.URI;
      }
    }
  }

  get(imageName) {
    if(this.cachedImages.hasOwnProperty(imageName)) {
      return this.cachedImages[imageName];
    }

    return this.missing_image;
  }
}
