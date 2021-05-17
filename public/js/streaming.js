navigator.mediaDevices.getUserMedia(
    {
        audio: false, 
        video: true
    }
)
.then((stream) => {
    
    var video = document.getElementById("localstream");
    video.srcObject = stream;
    video.onloadeddata = () => {
        video.play();
    }
})
.catch((err) => {
    console.log(err);
})