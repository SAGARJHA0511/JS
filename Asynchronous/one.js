// const array = [1,2,3,3,4,5,5];

//    const finddup = array => array.filter((gon,jiyan ) => arr.indexOf(item) !== jiyan)


// const dupOggy = finddup(array);



// console.log(dupOggy);

// let array = [1,2,2,3,4,4];

// let obj ={}

// obj[arr[0]]
// obj[1]  = "" +1

// for(let i=0;i<array.length;i++){
    // console.log(array[i]);
    // if(obj[array[i]]){
    //     obj[array[i]] = obj[array[i]] + 1 
    // }else{
    //     obj[array[i]] = 1 
    // }
    // obj[array[i]] = obj[array[i]] ? obj[array[i]] + 1  : 1

    // array[0]  = 1
    // array[1]  = 2
    // array[2]  = 2
    // array[3]  = 3
    // array[4]  = 4
    // array[5]  =c4

// }

// console.log(obj)




    //   let index = 0, newArr = [];
    //   const length = array.length; // to get length of array
    //   function findDuplicates(arr) {
    //      for (let i = 0; i < length - 1; i++) {
    //         for (let j = i + 1; j < length; j++) {
    //         if (arr[i] === arr[j]) {
    //               newArr[index] = arr[i];
    //               index++;
    //            }
    //         }
    //      }
    //      return newArr;
    //     }
    //     console.log(findDuplicates(array));


    const array = [3, 8, 7, 5, 3, 9, 8];
    const uniqueSet = new Set(array);
    const filteredElements = array.filter(currentValue => {
          if (uniqueSet.has(currentValue)) {
             uniqueSet.delete(currentValue);
          }
          else {
             return currentValue;
          }
       }
    );

    console.log(array);
    

    
