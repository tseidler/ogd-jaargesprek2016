import Navigator from 'jaargesprek2016/navigator';
import ImageCache from 'utils/imagecache';
import {data, images} from 'jaargesprek2016/questions_answers';

setTimeout(() => {
  let audio = document.getElementById('music');
  audio.volume = 0.1;
  audio.loop = true;
  audio.play();
}, 5000);

// Load all images, then start
let imageCache = new ImageCache();
imageCache.load(images, () => {
  let navigator = new Navigator({
    'data':   data,
    'images': imageCache,
    'layers': {
      'text':       document.querySelector('#layer_text'),
      'background1': document.querySelector('#layer_background1'),
      'background2': document.querySelector('#layer_background2')
    }
  });
});
