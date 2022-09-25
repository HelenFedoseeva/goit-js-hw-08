import Player from '@vimeo/player';
var throttle = require('lodash.throttle');





const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

window.addEventListener('DOMContentLoaded', startPlayingVideoFromCurrentTime)

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });


player.on('timeupdate', throttle(savePlayingTimeHandler, 1000))
    


function savePlayingTimeHandler(data) { 
    localStorage.setItem("videoplayer-current-time", `${data.seconds}`)
    
}




function startPlayingVideoFromCurrentTime() {
    let currentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));
    player.setCurrentTime(currentTime).then(function (seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;

            default:
                // some other error occurred
                break;
        }
    })
  window.removeEventListener('DOMContentLoaded', startPlayingVideoFromCurrentTime)
}