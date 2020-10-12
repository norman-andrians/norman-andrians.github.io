window.onload = function() {
	var timer = 0;
	var text = document.getElementById('loading');

	var progress = setInterval(function() {
		if (timer == 1) {
			text.innerHTML = "Loading.";
		} if (timer == 2) {
			text.innerHTML = "Loading..";
		} if (timer == 3) {
			text.innerHTML = "Loading...";
		} if (timer == 4) {
			text.innerHTML = "Loading";
			return timer = 0;
		} else {
			timer += 1;
		}
	}, 500);
}

function SelectAll() {
	var among_us = document.getElementById("among-us");
	var odading = document.getElementById("odading");

	among_us.style.display = "inline-block";
	odading.style.display = "inline-block";
}

function SelectApp() {
	var among_us = document.getElementById("among-us");
	var odading = document.getElementById("odading");

	among_us.style.display = "inline-block";
	odading.style.display = "none";
}

function SelectVideos() {
	var among_us = document.getElementById("among-us");
	var odading = document.getElementById("odading");

	among_us.style.display = "none";
	odading.style.display = "inline-block";
}