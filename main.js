var y= Math.floor(Math.random()*100+5)

var guess=1;

document.getElementById("submitguess").onclick=function(){

    var x=document.getElementById("guessfield").value;

    if(x==y){
        alert("CONGRATULATIONS!! You have guessed the number in " + guess + "times")
    }
    else if(x>y){
        guess++;
        alert("SORRY! Enter a smaller number");
    }
    else{
        guess++;
        alert("SORRY! Enter a larger number");
    }

}