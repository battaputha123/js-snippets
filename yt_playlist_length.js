const videos = document.querySelectorAll('ytd-playlist-video-renderer');
const timeParse = (timeString) => {
  const timeParts = timeString.split(':').map(part => parseInt(part));
  const timePartLength = timeParts.length;
  const timeObject = {
    hours: timePartLength >= 3 ? timeParts[0] : 0,
    minutes: timePartLength >= 2 ? timeParts[timeParts.length - 2] : 0,
    seconds: timePartLength >= 1 ? timeParts[timeParts.length - 1] : 0
  };
  return timeObject
} 

let totalSec = 0
videos.forEach((vid) => {
    const timeString = vid.getElementsByClassName('style-scope ytd-thumbnail-overlay-time-status-renderer').text.innerText
    const parsed = timeParse(timeString)
    totalSec += (parsed.hours * 3600 + parsed.minutes * 60 + parsed.seconds)
})

const hours = Math.floor(totalSec / 3600);
const minutes = Math.floor((totalSec % 3600) / 60);
const seconds = totalSec % 60;

console.log(hours, minutes, seconds)
