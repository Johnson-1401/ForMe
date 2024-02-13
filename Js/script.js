
var images = [
    "./Image/1.png", 
    "./Image/2.png", 
    "./Image/3.png", 
    "./Image/4.png", 
    "./Image/5.png", 
    "./Image/6.png", 
    "./Image/7.png", 
    "./Image/8.png", 
    "./Image/9.png",
    "./Image/10.png",
    "./Image/11.png",
    "./Image/12.png",
]; 
var messages = [ 
    "Will you be my Valentine",
    "Think it again",
    "Please be my Valentine",
    "Listen to me",
    "Please, I'll give you Gifts",
    "I will take care of you",
    "I promise to cherish and protect you",
    "Please, don't break my heart",
    "Please, Don't make me sad",
    "Please, I will cry",
    "I'm asking last time",
    "Farewell, Your Badluck",
];
var yesImages = [
    "./Image/20.png", 
    "./Image/21.png", 
    "./Image/22.png", 
]; 

var yesMessages = [ 
    "Really !!!",
    "I'm glad to hear &#x1F604; !!!",
    "The moon is beautiful isn't it &#x2764;!!!",
];
var currentIndex = 0;
function changeNo() {
    var img = document.getElementById("myImage");
    var text = document.getElementById("mainText");
    if (currentIndex < 11) {
        currentIndex = currentIndex + 1;
        img.src = images[currentIndex];
        text.innerHTML = messages[currentIndex];
    }
}

var currentYesIndex = 0;
function changeYes() {
    var img = document.getElementById("myImage");
    var text = document.getElementById("mainText");
    var no = document.getElementById("no");
    var yes = document.getElementById("yes");
    if (currentYesIndex < 3) {
        img.src = yesImages[currentYesIndex];
        text.innerHTML = yesMessages[currentYesIndex];
        if (currentYesIndex == 2) {
            yes.style.width = "90%";
            yes.innerHTML = "Oyasumi";
            no.style.display = "none"
        }
        currentYesIndex = currentYesIndex + 1;
    }
}