/*======================================
 * CopyRight (c) 2021 Norman Andrians

 * Code By Norman Andrians
 * Images By Norman Andrians & Original
 * Designer Norman Andrians

 * please appreciate me :)
=======================================*/

var intelligenceValue = 0;
var heightValue = 0;
var ageValue = 0;

//Emma's Status
var intelligenceEmma = 147;
var heightEmma = 158;
var ageEmma = 13;

//Norman's Status
var intelligenceNorman = 172;
var heightNorman = 171;
var ageNorman = 13;

//Ray's Status
var intelligenceRay = 153;
var heightRay = 168;
var ageRay = 13;

let intelligenceEmmaBar = intelligenceEmma/200*100;
let heightEmmaBar = heightEmma/200*100;
let ageEmmaBar = ageEmma/100*100;
    
let intelligenceNormanBar = intelligenceNorman/200*100;
let heightNormanBar = heightNorman/200*100;
let ageNormanBar = ageNorman/100*100;
    
let intelligenceRayBar = intelligenceRay/200*100;
let heightRayBar = heightRay/200*100;
let ageRayBar = ageRay/100*100;

window.onload = function() {
    let intelligenceBarWidth = intelligenceEmmaBar;
    let heightBarWidth = heightEmmaBar;
    let ageBarWidth = ageEmmaBar;
    
    const intelligenceValueElement = document.getElementById("intelligent-value");
    const heightValueElement = document.getElementById("height-value");
    const ageValueElement = document.getElementById("age-value");
    
    const intelligenceBar = document.getElementById("intelligent-bar");
    const heightBar = document.getElementById("height-bar");
    const ageBar = document.getElementById("age-bar");
    
    const intelligenceAnim = setInterval(function() {
        if(intelligenceValue >= intelligenceEmma) {
            clearInterval(intelligenceAnim);
        }
        else {
            intelligenceValue++;
            intelligenceValueElement.innerHTML = intelligenceValue;
        }
    }, 5);
    
    const heightAnim = setInterval(function() {
        if(heightValue >= heightEmma) {
            clearInterval(heightAnim);
        }
        else {
            heightValue++;
            heightValueElement.innerHTML = heightValue;
        }
    }, 5);
    
    const ageAnim = setInterval(function() {
        if(ageValue >= ageEmma) {
            clearInterval(ageAnim);
        }
        else {
            ageValue++;
            ageValueElement.innerHTML = ageValue;
        }
    }, 120);
    
    intelligenceBar.style.width = intelligenceBarWidth+"%";
    heightBar.style.width = heightBarWidth+"%";
    ageBar.style.width = ageBarWidth+"%";
    
    setInterval(addedDate, 1000);
};

function addedDate() {
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");
    
    var dateTime = new Date();
    
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    
    var days = dateTime.getDay();
    var month = dateTime.getDate();
    var years = dateTime.getFullYear();
    
    switch(days) {
        case 1: days = "Monday"; break;
        case 2: days = "Tuesday"; break;
        case 3: days = "Wednesday"; break;
        case 4: days = "Thursday"; break;
        case 5: days = "Friday"; break;
        case 6: days = "Saturday"; break;
        case 0: days = "Sunday"; break;
        default: days = "NaN";
    }
    
    
    switch(minutes) {
        case 1: minutes = '0'+minutes; break;
        case 2: minutes = '0'+minutes; break;
        case 3: minutes = '0'+minutes; break;
        case 4: minutes = '0'+minutes; break;
        case 5: minutes = '0'+minutes; break;
        case 6: minutes = '0'+minutes; break;
        case 7: minutes = '0'+minutes; break;
        case 8: minutes = '0'+minutes; break;
        case 9: minutes = '0'+minutes; break;
    }
    
    switch(hours) {
        case 1: hours = '0'+hours; break;
        case 2: hours = '0'+hours; break;
        case 3: hours = '0'+hours; break;
        case 4: hours = '0'+hours; break;
        case 5: hours = '0'+hours; break;
        case 6: hours = '0'+hours; break;
        case 7: hours = '0'+hours; break;
        case 8: hours = '0'+hours; break;
        case 9: hours = '0'+hours; break;
    }
    
    timeElement.innerHTML = hours+":"+minutes;
    dateElement.innerHTML = days+" "+month+", "+years;
}

function SelectEmma() {
    const characterImage = document.getElementById("char-img");
    const characterName = document.getElementById("name");

    const characterNameEmmaKanji = document.getElementById("name-emma-kanji");
    const characterNameNormanKanji = document.getElementById("name-norman-kanji");
    const characterNameRayKanji = document.getElementById("name-ray-kanji");

    const characterAbout = document.getElementById("about-text");

    const colorBackground = document.getElementById("color-background");

    const prog = document.getElementById("height-bar");

    characterName.innerHTML = "EMMA";

            characterNameEmmaKanji.style.display = "inline";
            characterNameNormanKanji.style.display = "none";
            characterNameRayKanji.style.display = "none";

            characterAbout.innerHTML = "<b>Emma</b> was born on August 22, 2034. She was sent to Grace Field House a year later in 2035. Under the parental care of Isabella and the happy times she spent with her fellow foster siblings, <b>Emma</b> had a happy childhood. Due to their close age and probably the fact that they are the top students academically, she was exceptionally close to <b>Norman</b> and <b>Ray</b> out of all the orphans in Grace Field";

            characterImage.src = "assets/image/characters/emma.png";

            EmmaTheme();
            EmmaStatus();
        }

function SelectNorman() {
    const characterImage = document.getElementById("char-img");
    const characterName = document.getElementById("name");
    
    const characterNameEmmaKanji = document.getElementById("name-emma-kanji");
    const characterNameNormanKanji = document.getElementById("name-norman-kanji");
    const characterNameRayKanji = document.getElementById("name-ray-kanji");
    
    const characterAbout = document.getElementById("about-text");
    
    characterName.innerHTML = "NORMAN";
    
    characterNameEmmaKanji.style.display = "none";
    characterNameNormanKanji.style.display = "inline";
    characterNameRayKanji.style.display = "none";
    
    characterAbout.innerHTML = "<b>Norman</b> was born on March 21, 2034, and sent to Grace Field House a year later in 2035. When <b>Norman</b> was still a young child, he was known to fall sick easily due to his weak physique and health. Most of the sicknesses he had are colds, which were gotten either during winter or even during downpours";
    
    characterImage.src = "assets/image/characters/norman.png";
    
    NormanTheme();
    NormanStatus();
}

function SelectRay() {
    const characterImage = document.getElementById("char-img");
    const characterName = document.getElementById("name");
    
    const characterNameEmmaKanji = document.getElementById("name-emma-kanji");
    const characterNameNormanKanji = document.getElementById("name-norman-kanji");
    const characterNameRayKanji = document.getElementById("name-ray-kanji");
    
    const characterAbout = document.getElementById("about-text");
    
    characterNameEmmaKanji.style.display = "none";
    characterNameNormanKanji.style.display = "none";
    characterNameRayKanji.style.display = "inline";
    
    characterAbout.innerHTML = "<b>Ray</b> was born on January 15, 2034, to Isabella through artificial insemination. A year after his birth in 2035, <b>Ray</b> was removed from his mother's hands and sent to Grace Field House. <b>Ray</b> did not suffer from childhood amnesia, and such, he remembered his life before he arrived at the orphanage; including being in his mother's womb, having the farm's tracker stapled into his ear, the infants being divided into groups of five, the human adults and demons in different facilities, and when he was sent to Grace Field House";
    
    characterName.innerHTML = "RAY";
    characterImage.src = "assets/image/characters/ray.png";
    
    RayTheme();
    RayStatus();
}

    //Emma's color theme
    var colorEmmaRed1 = 255;
    var colorEmmaGreen1 = 205;
    var colorEmmaBlue1 = 98;

    var colorEmmaRed2 = 255;
    var colorEmmaGreen2 = 174;
    var colorEmmaBlue2 = 1;

    var colorEmmaTextRed = 255;
    var colorEmmaTextGreen = 201;
    var colorEmmaTextBlue = 86;

    function EmmaTheme() {
        const colorBackground = document.getElementById("color-background");

        colorBackground.style.background = "linear-gradient(rgb("+colorEmmaRed1+", "+colorEmmaGreen1+", "+colorEmmaBlue1+"), rgb("+colorEmmaRed2+", "+colorEmmaGreen2+", "+colorEmmaBlue2+"))";
 }

//Norman's color theme
var colorNormanRed1 = 0;
var colorNormanGreen1 = 255;
var colorNormanBlue1 = 255;

var colorNormanRed2 = 0;
var colorNormanGreen2 = 200;
var colorNormanBlue2 = 200;

var colorNormanTextRed = 0;
var colorNormanTextGreen = 240;
var colorNormanTextBlue = 240;

function NormanTheme() {
    const colorBackground = document.getElementById("color-background");
    
    colorBackground.style.background = "linear-gradient(rgb("+colorNormanRed1+", "+colorNormanGreen1+", "+colorNormanBlue1+"), rgb("+colorNormanRed2+", "+colorNormanGreen2+", "+colorNormanBlue2+"))";
}

//Ray's color theme
var colorRayRed1 = 100;
var colorRayGreen1 = 100;
var colorRayBlue1 = 100;

var colorRayRed2 = 30;
var colorRayGreen2 = 30;
var colorRayBlue2 = 30;

var colorRayTextRed = 85;
var colorRayTextGreen = 85;
var colorRayTextBlue = 85;

function RayTheme() {
    const colorBackground = document.getElementById("color-background");
    
    colorBackground.style.background = "linear-gradient(rgb("+colorRayRed1+", "+colorRayGreen1+", "+colorRayBlue1+"), rgb("+colorRayRed2+", "+colorRayGreen2+", "+colorRayBlue2+"))";
}

function EmmaStatus() {    
    const intelligenceValueElement = document.getElementById("intelligent-value");
    const heightValueElement = document.getElementById("height-value");
    const ageValueElement = document.getElementById("age-value");
    
    const intelligenceBar = document.getElementById("intelligent-bar");
    const heightBar = document.getElementById("height-bar");
    const ageBar = document.getElementById("age-bar");
    
    const intelligenceAnimValue = setInterval(function() {
        if(intelligenceEmma <= intelligenceValue) {
            if(intelligenceValue === intelligenceEmma) {
                clearInterval(intelligenceAnimValue);
            } else {
                intelligenceValue--;
                intelligenceValueElement.innerHTML = intelligenceValue;
            }
        }
        else if(intelligenceEmma >= intelligenceValue) {
            if(intelligenceValue === intelligenceEmma) {
                clearInterval(intelligenceAnimValue);
            } else {
                intelligenceValue++;
                intelligenceValueElement.innerHTML = intelligenceValue;
            }
        }
    }, 20);
    
    const heightAnimValue = setInterval(function() {
        if(heightEmma <= heightValue) {
            if(heightValue === heightEmma) {
                clearInterval(heightAnimValue);
            } else {
                heightValue--;
                heightValueElement.innerHTML = heightValue;
            }
        }
        else if(heightEmma >= heightValue) {
            if(heightValue === heightEmma) {
                clearInterval(heightAnimValue);
            } else {
                heightValue++;
                heightValueElement.innerHTML = heightValue;
            }
        }
    }, 50);
    
    ageValueElement.innerHTML = ageValue;
    
    const intelligenceBarWidthAnim = setInterval(function(){
        if(intelligenceEmmaBar <= intelligenceBarWidth) {
            if(intelligenceBarWidth === intelligenceEmmaBar) {
                clearInterval(intelligenceBarWidthAnim);
            } else {
                intelligenceBarWidth--;
                intelligenceBar.style.width = intelligenceBarWidth+"%";
            }
        }
        else if(intelligenceEmmaBar >= intelligenceBarWidth) {
            if(intelligenceBarWidth === intelligenceEmmaBar) {
                clearInterval(intelligenceBarWidthAnim);
            } else {
                intelligenceBarWidth++;
                intelligenceBar.style.width = intelligenceBarWidth+"%";
            }
        }
    }, 100);
    
    heightBar.style.width = heightEmmaBar+"%";
    ageBar.style.width = ageEmmaBar+"%";
}

function NormanStatus() {
    const intelligenceValueElement = document.getElementById("intelligent-value");
    const heightValueElement = document.getElementById("height-value");
    const ageValueElement = document.getElementById("age-value");
    
    const intelligenceBar = document.getElementById("intelligent-bar");
    const heightBar = document.getElementById("height-bar");
    const ageBar = document.getElementById("age-bar");
    
    intelligenceValue = intelligenceNorman;
    heightValue = heightNorman;
    ageValue = ageNorman;
    
    intelligenceValueElement.innerHTML = intelligenceValue;
    heightValueElement.innerHTML = heightValue;
    ageValueElement.innerHTML = ageValue;
    
    intelligenceBarWidth = intelligenceNormanBar;
    heightBarWidth = heightNormanBar;
    ageBarWidth = ageNormanBar;
    
    intelligenceBar.style.width = intelligenceBarWidth+"%";
    heightBar.style.width = heightBarWidth+"%";
    ageBar.style.width = ageBarWidth+"%";
}

function RayStatus() {
    const intelligenceValueElement = document.getElementById("intelligent-value");
    const heightValueElement = document.getElementById("height-value");
    const ageValueElement = document.getElementById("age-value");
    
    const intelligenceBar = document.getElementById("intelligent-bar");
    const heightBar = document.getElementById("height-bar");
    const ageBar = document.getElementById("age-bar");
    
    intelligenceValue = intelligenceRay;
    heightValue = heightRay;
    ageValue = ageRay;
    
    intelligenceValueElement.innerHTML = intelligenceValue;
    heightValueElement.innerHTML = heightValue;
    ageValueElement.innerHTML = ageValue;
    
    intelligenceBar.style.width = intelligenceRayBar+"%";
    heightBar.style.width = heightRayBar+"%";
    ageBar.style.width = ageRayBar+"%";
}