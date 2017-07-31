// JavaScript Document

var img_array = ['./images/fayeface.png', './images/fayeface_pressed.png'];
var caption_array = ['Hello :)','Fuck You!'];
//var audio = new Audio('./audio/tts_download.mp3');
//var audio_angry = new Audio('./audio/tts_download_angry.mp3');
i = 0;

function myFunction() {
    i++;
    document.getElementById("myImg").src = img_array[i];
	document.getElementById("captionid").innerHTML = caption_array[i];
	if (i== 1) {
		//audio_angry.play
		document.getElementById('angry').play();
	};
    if (i == img_array.length - 1) {
        i = -1;

    }
}

function playaudio() {
	document.getElementById('welcome').play();
	//audio.play;
}