//const hello = require("./module1")
//hello();

// ES6 modules

// async & await 

  /*const getDataa = async()=>{
    var getData =("Hello Oggy");
    return getData
  }
//   console.log(getData);

  getData().then(data => console.log(data));

const getData = async()=>{
    var x  = await  ("oggy")
    console.log(x);

}

console.log(1);

getData();

console.log(2);*/

// Implicit Binding


const person = {
    name : "oggy",
    age : 22,

    fan:function(){
        return `Hello ${this.name}your age is ${this.age} year old`
    }
 }

 console.log(person.fan());

// const age = 22;
//  function verifyAge(){
    // return this.age
//  }
//   console.log(verifyAge());








	// Hoisting


	function codeHoist(){
		a = 10;
		 let b = 50;
	}
	codeHoist();

	console.log(a); 
    
     console.log(b); 


    