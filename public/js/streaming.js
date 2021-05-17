
function openCamera() {
    navigator.mediaDevices.getUserMedia(
        {
            audio: false, 
            video: true
        }
    )
    .then((stream) => {
        
        playVideo(stream, "localstream");

    })
    .catch((err) => {
        console.log(err);
    })
}

function playVideo(stream, idVideo) {
    
    var video = document.getElementById(idVideo);
    video.srcObject = stream;
    video.onloadeddata = () => {
        video.play();
    }

}

openCamera();