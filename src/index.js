import Navigator from 'jaargesprek2016/navigator';
import ImageCache from 'utils/imagecache';
import {data, images} from 'jaargesprek2016/questions_answers';

// Load all images, then start
let imageCache = new ImageCache();
imageCache.load(images, () => {
  let navigator = new Navigator({
    'data':   data,
    'images': images,
    'layers': {
      'text':       document.querySelector('#layer_text'),
      'background1': document.querySelector('#layer_background1'),
      'background2': document.querySelector('#layer_background2')
    }
  });
});
