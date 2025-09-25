function day(){

    let num=parseInt(document.getElementById("day").value);
    
    if(num===1){
        alert(num +": Monday");
    }else if(num===2){
        alert(num +": Tuesday");
    }else if(num===3){
        alert(num +": Wednesday");
    }else if(num===4){
        alert(num +": Thurday");
    }else if(num===5){
        alert(num +": Friday");
    }else if(num==6){
        alert(num +": Saturday");
    }else if(num==7){
        alert(num +": Sunday");
    }else{
        alert(num +": Enter a number between 1-7 !");
    }

}