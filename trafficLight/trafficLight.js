let light=["red","yellow","green"]
let index=0

function lightchange(){
    document.getElementById("red").style.background="grey";
    document.getElementById("yellow").style.background="grey";
    document.getElementById("green").style.background="grey";

    document.getElementById(light[index]).style.background=light[index];

    index=(index+1)%light.length;
};
setInterval(lightchange,2000)
lightchange()