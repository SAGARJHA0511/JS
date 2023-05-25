// console.log("Oggy ki Dunia");

// setTimeout(() => {
//     for (let i=0; i<30; i++){

//         const lol =i;
//         console.log("This is i number " +i);
//     }
// }, 5000);

// console.log("Done with this ");




// for (var i=0; i<3; i++){
//     setTimeout(function(){alert(i);},1000 + i);
    
// }
//     console.log(i);


// function QuestionsMarks(str) { 
//     res = false;
//     for(let i=0; i<str.length; i++){
//         for(let j=i+1; j<str.length; j++){
//             if(Number(str[i]) + Number(str[j])=== 10){
//                 res = true;
//                 if(str.slice(i,j).split("?").length -1 < 3){
//                     return false;
//                 }
//             }
//         }
//     }
//     return res;
// }
   
// // keep this function call here 
// // QuestionsMarks(readline());
// console.log(QuestionsMarks(""))


function LongestWord(sen){
    var words = sen.match(/\w+/g);
    var longest = word[0];

    for (var i=0; i<words.length; i++){
        if (words[i].lenght> longest.lenght){
            longest = words[i];

        }
    }
    return longest
}
console.log(LongestWord("fun&!! time"));
