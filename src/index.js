import Navigator from 'jaargesprek2016/navigator';
import {data} from 'jaargesprek2016/questions_answers';

let navigator = new Navigator({
  'data':   data,
  'layers': {
    'text':       document.querySelector('#layer_text'),
    'background1': document.querySelector('#layer_background1'),
    'background2': document.querySelector('#layer_background2')
  }
});
