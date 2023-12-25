const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const prgoress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//Play & Pause video function
function toggleVideoStatus()
{
    if(video.paused)
    {
        video.play();
    }
    else
    {
        video.pause();
    }
}

//update play/pause icon
function updatePlayIcon()
{
    if(video.paused)
    {
        play.innerHTML = '<i class="bi bi-play-fill"></i>'
    }
    else
    {
        play.innerHTML = '<i class="bi bi-pause-fill"></i>'

    }
}

//update video progress & timestamp
function updateProgress()
{
    prgoress.value = (video.currentTime/video.duration) * 100;

    //Get minutes
    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10)
    {
        mins = '0' + String(mins);
    }

    //Get seconds
    let sec = Math.floor(video.currentTime % 60);
    if(sec < 10)
    {
        sec = '0' + String(sec);
    }

    timestamp.innerHTML = `${mins}:${sec}`;
}

//stop video function
function stopVideo()
{
    video.currentTime = 0;
    video.pause();
}

//set video progress
function setVideoProgress()
{
    video.currentTime = (+progress.value * video.duration) / 100;
}

//Event Listeners to call different functions

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

prgoress.addEventListener('click', setVideoProgress);

