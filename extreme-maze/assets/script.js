/*
 * idk, i'm too lazy to make it
 */

window.onload = function() {
    const downloadclick = document.getElementById('download-click').addEventListener('click', function() {
        if (navigator.userAgent.match(/Windows/i)) {
        	window.location.href = './assets/files/extreme-maze-3d-0.44-beta-windows-64x.zip';
        	downloadclick.download = 'extreme-maze-3d-0.44-beta-windows-64x.zip';
        } else if (navigator.userAgent.match(/Mac Os/i)) {
        	alert("I'm sorry but you can only download for Windows");
        	alert("but don't worry, we will make it for Mac Os ;)");
        } else if (navigator.userAgent.match(/Linux/i)) {
        	alert("I'm sorry but you can only download for Windows");
        	alert("but don't worry, we will make it for Linux ;)");
        } else if (navigator.userAgent.match(/Android/i)) {
        	alert("I'm sorry but you can only download for windows");
        	alert("but don't worry, we will make it for Android ;)");
        } else {
        	alert("I'm sorry but you can only download for windows");
        	alert("but don't worry, we will make it for your Device ;)");
        }
    });
};