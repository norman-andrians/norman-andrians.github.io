/*
 * idk, i'm too lazy to make it
 */

window.onload = function() {
    const downloadclick = document.getElementById('download-click').addEventListener('click', function() {
        window.location.href = './assets/files/extreme-maze-3d-0.0.4.zip';
        downloadclick.download = 'extreme-maze-3d-0.0.4';
    });
};