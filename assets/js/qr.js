// qr.js – QR scanner logic

const video = document.getElementById('video');
const status = document.getElementById('status');

navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
  .then(stream => {
    video.srcObject = stream;
    status.textContent = "Camera active. Awaiting QR code...";
  })
  .catch(err => {
    status.textContent = "Camera access denied or unavailable.";
    console.error(err);
  });

// Future: integrate QR code decoding and attendance marking
