//==================================
/***********************************
CopyRIght (c) 2020 Norman Andrians
Licensed Under MIT License
***********************************/
//==================================

console.log("Norman Andrian's Website 0.374\n\n");
console.log("CopyRIght (c) 2020 Norman Andrians");
console.log("Licensed Under MIT License");

// boostrap dropdown
function dropDown() {
    const down = document.getElementById("dropdown");
    const invisible = document.getElementById("invisible");
    const show = document.getElementById("show");

    var posy = 0;
    
    const anim = setInterval(move, 6);

    function move() {
        if(posy >= 150) {
            clearInterval(anim);
            var textanim1 = document.getElementById("text-0");
            var textanim2 = document.getElementById("text-1");
            var textanim3 = document.getElementById("text-2");
            var textanim4 = document.getElementById("text-3");
            
            var fade = setInterval(faded, 20);
            var opc = 0;

            function faded() {
                if(opc >= 1) {
                    clearInterval(fade);
                    textanim1.style.opacity = 1;
                    textanim2.style.opacity = 1;
                    textanim3.style.opacity = 1;
                    textanim4.style.opacity = 1;
                }
                else {
                    opc += 0.1;
                    textanim1.style.opacity = opc+0;
                    textanim2.style.opacity = opc+0;
                    textanim3.style.opacity = opc+0;
                    textanim4.style.opacity = opc+0;
                }
            }
        }
        else {
            down.style.display = "block";
            posy += 3;
            down.style.height = posy+'px';
        }
    }

    invisible.style.display = "block";
    invisible.style.backgroundColor = "grey";
    show.style.display = "none";
}

// bootstrap dropup
function dropaDown() {
    const down = document.getElementById("dropdown");
    const invisible = document.getElementById("invisible");
    const show = document.getElementById("show");

    var posy = 150;
    
    const anim = setInterval(move, 6);

    function move() {
        var textanim1 = document.getElementById("text-0");
        var textanim2 = document.getElementById("text-1");
        var textanim3 = document.getElementById("text-2");
        var textanim4 = document.getElementById("text-3");
            
        var fade = setInterval(faded, 1);
        var opc = 1;

        function faded() {
            if(opc > 0) {
                clearInterval(fade);
                textanim1.style.opacity = 0;
                textanim2.style.opacity = 0;
                textanim3.style.opacity = 0;
                textanim4.style.opacity = 0;
            }
            else {
                opc -= 1;
                textanim1.style.opacity = opc+1;
                textanim2.style.opacity = opc+1;
                textanim3.style.opacity = opc+1;
                textanim4.style.opacity = opc+1;
            }
        }
        if(posy == 0) {
            clearInterval(anim);
            down.style.display = "none";
        }
        else {
            posy -= 3;
            down.style.height = posy+'px';
        }
    }
    invisible.style.display = "none";
    show.style.display = "block";
}

// Dark Mode: on
function OnDark() {
    const off = document.getElementById("off");
    const on = document.getElementById("on");

    const darkbg = document.getElementById("background");
    const darknav = document.getElementById("container-nav");
    const text = document.getElementById("text");

    const dropdown = document.getElementById("dropdown");
    
    const link = document.querySelectorAll("#link");
    
    for(var a = 0; a < link.length; a++) {
        link[a].style.color = "white";
    }
    
    dropdown.style.backgroundColor = "rgb(50, 50, 50)";

    darkbg.style.backgroundColor = "rgb(40, 40, 40)";
    darknav.style.backgroundColor = "rgb(64, 64, 64)";
    
    text.style.color = "rgb(225, 225, 225)";

    off.style.display = "none";
    on.style.display = "block";
}

// Dark Mode: on
function OffDark() {
    const off = document.getElementById("off");
    const on = document.getElementById("on");

    const darkbg = document.getElementById("background");
    const darknav = document.getElementById("container-nav");
    const text = document.getElementById("text");

    const dropdown = document.getElementById("dropdown");
    
    const link = document.querySelectorAll("#link");
    
    for(var a = 0; a < link.length; a++) {
        link[a].style.color = "black";
    }
    
    dropdown.style.backgroundColor = "rgb(199, 199, 199)";

    darkbg.style.backgroundColor = "white";
    darknav.style.backgroundColor = "rgb(226, 226, 226)";
    
    text.style.color = "inherit";

    off.style.display = "block";
    on.style.display = "none";
}