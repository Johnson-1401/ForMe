
var images = [
    "file:///C:/Users/johns/OneDrive/Desktop/New/Image/1.png", 
    "file:///C:/Users/johns/OneDrive/Desktop/New/Image/2.png", 
    "file:///C:/Users/johns/OneDrive/Desktop/New/Image/3.png", 
    "file:///C:/Users/johns/OneDrive/Desktop/New/Image/4.png", 
    "file:///C:/Users/johns/OneDrive/Desktop/New/Image/5.png", 
    "file:///C:/Users/johns/OneDrive/Desktop/New/Image/6.png", 
    "file:///C:/Users/johns/OneDrive/Desktop/New/Image/7.png", 
    "file:///C:/Users/johns/OneDrive/Desktop/New/Image/8.png", 
    "file:///C:/Users/johns/OneDrive/Desktop/New/Image/9.png",
    "file:///C:/Users/johns/OneDrive/Desktop/New/Image/10.png",
    "file:///C:/Users/johns/OneDrive/Desktop/New/Image/11.png",
    "file:///C:/Users/johns/OneDrive/Desktop/New/Image/12.png",
]; 
var messages = [ 
    "Will you be my Valentine",
    "Think it again",
    "Please be my Valentine",
    "Listen to me",
    "Please, I'll give you Gifts",
    "I will tae care of you",
    "I promise to cherish and protect you",
    "Please, don't break my heart",
    "Please, Don't make me sad",
    "Please, I will cry",
    "I'm asking last time",
    "Farewell, Your badluck",
];
var yesImages = [
    "file:///C:/Users/johns/OneDrive/Desktop/New/Image/20.png", 
    "file:///C:/Users/johns/OneDrive/Desktop/New/Image/21.png", 
    "file:///C:/Users/johns/OneDrive/Desktop/New/Image/22.png", 
]; 

var yesMessages = [ 
    "Really !!!",
    "I'm glad to hear !!!",
    "The moon is beautiful isn't it !!!",
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