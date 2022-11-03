import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);
player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);

player.on(
  'timeupdate',
  throttle(function (event) {
    localStorage.setItem('videoplayer-current-time', event.seconds);
  }, 1000)
);
