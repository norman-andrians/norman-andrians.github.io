/*
 * idk, i'm too lazy to make it
 */

console.log("ngapain liat-liat >:v")

var isWindows = false;
var isAndroid = false;

var windowsSize = "56MB";
var AndroidSize = "62MB";

var zip = "ZIP (.zip)";
var apk = "App Package Kit APK (.apk)";

window.onload = function() {
	const winBtn = document.getElementById('win-btn');
	const androidBtn = document.getElementById('android-btn');

	Start();

	if (isWindows && !isAndroid) {
		winBtn.style.background = "rgb(0, 124, 207)";
		winBtn.style.color = "white";

		androidBtn.style.background = "none";
		androidBtn.style.color = "black";
	} else if (isAndroid && !isWindows) {
		winBtn.style.background = "none";
		winBtn.style.color = "black";

		androidBtn.style.background = "rgb(0, 124, 207)";
		androidBtn.style.color = "white";
	}

    const downloadclick = document.getElementById('download-click').addEventListener('click', function() {
		const hided = document.getElementById('hide');
		hided.style.display = "block";

        if (isWindows) {
        	console.log("memperoses download untuk windows");
        	downloadWindows();
        } else if (navigator.userAgent.match(/Mac Os/i)) {
        	alert("I'm sorry but you can only download for Windows");
        	alert("but don't worry, we will make it for Mac Os ;)");
        } else if (isAndroid) {
        	console.log("memperoses download untuk android");
			downloadAndroid();
        } else {
			
        }
    });
};

function downloadWindows() {
	window.location.href = 'https://github.com/norman-andrians/extreme-maze-3d/releases/download/v0.47-beta/extreme_maze_3d-win-0.47-beta.zip';
    downloadclick.download = 'extreme_maze_3d-win-0.47-beta.zip';

    console.warn("bila download tidak berhasil, buka https://github.com/norman-andrians/extreme-maze-3d/releases/download/v0.47-beta");
}

function downloadAndroid() {
	window.location.href = './assets/files/android/extreme_maze_3d-android-0.47-beta.apk';
	downloadclick.download = 'extreme_maze_3d-android-0.47-beta.apk';

	console.warn("bila download tidak berhasil, buka https://github.com/norman-andrians/norman-andrians.github.io/tree/master/extreme-maze/assets/files/android/");
}

function winEvent() {
	isWindows = true;
	isAndroid = false;

	const dev0 = document.getElementById('dev-0');
	const dev5 = document.getElementById('dev-0-0');
	const dev1 = document.getElementById('dev-1');
	const dev2 = document.getElementById('dev-2');
	const dev3 = document.getElementById('dev-3');
	const dev4 = document.getElementById('dev-4');

	const gameSiz = document.getElementById('size-game');
	const formatFil = document.getElementById('format-file');

	const winBtn = document.getElementById('win-btn');
	const androidBtn = document.getElementById('android-btn');
	
	winBtn.style.background = "rgb(0, 124, 207)";
	winBtn.style.color = "white";

	gameSiz.innerHTML = windowsSize;
	formatFil.innerHTML = zip;
	
	dev0.childNodes[3].innerHTML = "Windows 7, 8.1, 10";
	dev3.childNodes[3].innerHTML = "4GB RAM";
	dev4.childNodes[3].innerHTML = "300MB free space";
	dev5.childNodes[3].innerHTML = "86x, 64-bit";

	androidBtn.style.background = "none";
	androidBtn.style.color = "black";

	console.log("beralih ke windows");
}

function androidEvent() {
	isWindows = false;
	isAndroid = true;
	
	const dev0 = document.getElementById('dev-0');
	const dev5 = document.getElementById('dev-0-0');
	const dev1 = document.getElementById('dev-1');
	const dev2 = document.getElementById('dev-2');
	const dev3 = document.getElementById('dev-3');
	const dev4 = document.getElementById('dev-4');

	const gameSiz = document.getElementById('size-game');
	const formatFil = document.getElementById('format-file');

	const winBtn = document.getElementById('win-btn');
	const androidBtn = document.getElementById('android-btn');
	
	winBtn.style.background = "none";
	winBtn.style.color = "black";

	gameSiz.innerHTML = AndroidSize;
	formatFil.innerHTML = apk;
		
	dev0.childNodes[3].innerHTML = "Android 6 or higher";
	dev3.childNodes[3].innerHTML = "2GB RAM";
	dev4.childNodes[3].innerHTML = "200MB free space";
	dev5.childNodes[3].innerHTML = "ARMv7, ARMeabi-v7a";

	androidBtn.style.background = "rgb(0, 124, 207)";
	androidBtn.style.color = "white";

	console.log("beralih ke android");
}

function Start() {
	const dev0 = document.getElementById('dev-0');
	const dev5 = document.getElementById('dev-0-0');
	const dev1 = document.getElementById('dev-1');
	const dev2 = document.getElementById('dev-2');
	const dev3 = document.getElementById('dev-3');
	const dev4 = document.getElementById('dev-4');

	const gameSiz = document.getElementById('size-game');
	const formatFil = document.getElementById('format-file');

	if (navigator.userAgent.match(/Windows/i)) {
		dev0.childNodes[3].innerHTML = "Windows 7, 8.1, 10";
		dev3.childNodes[3].innerHTML = "4GB RAM";
		dev4.childNodes[3].innerHTML = "300MB free space";
		dev5.childNodes[3].innerHTML = "86x, 64-bit";

		gameSiz.innerHTML = windowsSize;
		formatFil.innerHTML = zip;

		isWindows = true;
		isAndroid = false;

		console.log("windows user");
	}
	else if (navigator.userAgent.match(/Android/i)) {
		dev0.childNodes[3].innerHTML = "Android 6 or higher";
		dev3.childNodes[3].innerHTML = "2GB RAM";
		dev4.childNodes[3].innerHTML = "200MB free space";
		dev5.childNodes[3].innerHTML = "ARMv7, ARMeabi-v7a";

		gameSiz.innerHTML = AndroidSize;
		formatFil.innerHTML = apk;

		isWindows = false;
		isAndroid = true;

		console.log("android user");
	}
}

function SetActive(elemen, isActive) {
	if (isActive) {
		elemen.style.display = "block";
		return isActive = true;
	} else if (!isActive) {
		elemen.style.display = "none";
		return isActive = false;
	} else {
		console.error("set active must set to bool");
		return null;
	}
}