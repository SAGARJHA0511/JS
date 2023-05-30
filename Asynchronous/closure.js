function out(){
    var oggy = ("oggy a local variable of outer function");
    console.log(oggy + "<br>");

    function inner (){
        var oggy2 = ("oggy2 a local variable of inner function");
        console.log(oggy2 )
    }
    console.log(oggy);
    

}