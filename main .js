x = 0;
y = 0;
draw_circle ="";
draw_rect ="";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function staart (){
    document.getElementById("status").innerHTML= "El sisema esta escuchando. por favor, habla.";
    recognition.start();
    
}

recognition.onresult = function(event){

    console.log(event);

    var content = event.results [0] [0].transcript;
}