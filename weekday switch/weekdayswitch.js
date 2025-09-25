function check(){
    let num=parseInt(document.getElementById("weekday").value);

    switch (num){
        case 1:
        document.getElementById("display").innerHTML=`${num} -- monday`;
        break;

        case 2:
        document.getElementById("display").innerHTML=`${num} -- Tuesday`;
        break;

        case 3:
        document.getElementById("display").innerHTML=`${num} -- Wednesday`;
        break;

        case 4:
        document.getElementById("display").innerHTML=`${num} -- Thursday`;
        break;

        case 5:
        document.getElementById("display").innerHTML=`${num} -- Friday`;
        break;

        case 6:
        document.getElementById("display").innerHTML=`${num} -- Saturday`;
        break;

        case 7:
        document.getElementById("display").innerHTML=`${num} -- Sunday`;
        break;

        default :
        document.getElementById("display").innerHTML="Enter a number between 1-7 !";
        break;

    }
    
}