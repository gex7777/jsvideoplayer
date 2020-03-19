const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// toggle play/pause
function toggleVideoStatus() {
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
}

//pause play icon change
function updatePlayerIcon() {
	if (video.paused) {
		play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
	} else {
		play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
	}
}

//update the progress
function updateProgress() {
	progress.value = (video.currentTime / video.duration) * 100;

	//get minutes
	mins = Math.floor(video.currentTime / 60);
	if (mins < 10) {
		mins = "0" + String(mins);
	}

	//get seconds

	sec = Math.floor(video.currentTime % 60);
	if (sec < 10) {
		sec = "0" + String(sec);
	}
	timestamp.innerText = `${mins}:${sec}`;
}

//update video on seek
function setVideoProgress() {
	video.currentTime = (+progress.value * video.duration) / 100;
}

function stopVideo() {
	video.currentTime = 0;
	video.pause();
}
//event Listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayerIcon);
video.addEventListener("play", updatePlayerIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);
progress.addEventListener("change", setVideoProgress);
