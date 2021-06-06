/**
 * Q1
 */

function BestProfit(arr){
  const daysEnum = ["Saturday","Sunday","Monday","Tuseday","Wednesday","Thursday"];


  const buyDay = arr.indexOf( Math.min(...arr));

  // sliced the original array so i can choose the highest value in the arr after the day that I bought USD

  const sliced = arr.slice(buyDay);

  const sellDay = sliced.indexOf( Math.max(...sliced) ) +  buyDay;

  console.log(`you should buy on ${daysEnum[buyDay]} and sell on ${daysEnum[sellDay]}`);
}

// BestProfit([150, 146, 142, 143, 145, 144]);


/**
 * Q2
 */

function checkOverlap(p1Start,p1End,p2Start,p2End){
  //check if period 2 within period 1




  //convert date format from dd-mm-yy to mm-dd-yy
  let temp = [];

  for(let i = 0;i<arguments.length;i++){
    temp = arguments[i].split('/');

    arguments[i] = [...temp];

    arguments[i][0] = temp[1];
  
    arguments[i][1] = temp[0];
  
    arguments[i] = arguments[i].join('/');
  }

  const p1StartDate = Date.parse(p1Start);
  const p1EndDate = Date.parse(p1End);
  const p2StartDate =  Date.parse(p2Start);
  const p2EndDate = Date.parse(p2End);

  // t1Start ------- t2Start ------ t2End ----- t1End

  // t1Start ------- t2Start ------ t1End ----- t2Start 

  if(p2StartDate >= p1StartDate && p2StartDate <= p1EndDate){
    return "Overlap";
  }

  else if(p1StartDate >= p2StartDate && p1StartDate <= p2EndDate){
    return "Overlap";
  }

  else{
    return "No overlap";
  }

}

// console.log(
//   checkOverlap(
//     "13/5/2021 13:00",
//     "14/5/2021 13:00",
//     "14/5/2021 13:00",
//     "16/5/2021 13:00"
//   )
// );



/**
 * Q3
 */

function howManyPairs(shoes){
  let rightCount = (shoes.match(/R/g) || []).length;

  let leftCount = (shoes.match(/L/g) || []).length;

  let result = 0;

  if(rightCount > leftCount){
    result = leftCount;
  }
  else if(leftCount > rightCount){
    result = rightCount;
  }

  else{
    result = leftCount;
  }

  return result;
}

// console.log(howManyPairs("RLRLRRLL"));

/*
  Q4
*/

function howManyLetters(word){
  const count = {};

  word = word.split('');

  word.forEach(function(i) { count[i] = ( count[i] || 0 ) + 1; });

  return count;
}

// console.log(howManyLetters("kkssffoos"));


/**
 * Q5
 */

function binarySearch(element,arr){

  //sort
  arr = arr.sort((a,b)=> a - b );

  const middle = Math.floor( (arr.length - 1)/2 );
  const upper = arr.length - 1;


  console.log(arr);


  if( element === arr[middle] ){
    return middle;
  }

  else if(element < arr[middle] ){

    for(let i=0;i<middle;i++){

      if(element === arr[i]){
        return i;
      }
    }
    return -1;
  }


  else if(element > arr[middle] ){

    for(let i=middle+1;i<=upper;i++){

      if(element === arr[i]){
        return i;
      }
    }
    return -1;
  }
}

// console.log(binarySearch(5, [4, 2, 5, 2, 1, 4, 6, 7, 9]));
// console.log(binarySearch(1, [4, 2, 5, 2, 1, 5, 6, 1, 9]));
// console.log(binarySearch(2, [4, 2, 5, 2, 1, 5, 6, 1]));



/**
 * 
 * Q6
 */


function sortArray(arr){

  let sort = [];
  while( arr.length !== 0 ){

    let min = Math.min(...arr);

    let indexOfMin = arr.indexOf(min);

    if(sort[sort.length-1] !== min || sort.length === 0){

      sort = [...sort,...arr.splice(indexOfMin,1)];

    }else{
      arr.splice(indexOfMin,1);
    }
  }

  return sort;

}

// console.log(sortArray([2, -5, 1, 4, 7, 8]));

// console.log(sortArray([38, 57, 45, 18, 47, 39]));



/**
 * Q7
 */

function minMax(arr){
  return [Math.min(...arr),Math.max(...arr)];
}


/**
 * Q8
 */

function missingNum(arr){
  arr = arr.sort((a,b)=>a-b);

  for(let i = 0;i<9;i++){
    if(i+1 !== arr[i]){
      
      return i+1;
    }
  }
  return 10;
}

// console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ) ;


/**
 * Q9
 */

 function numToEng(number){
   const ones = {0:'zero',1:'one',2:'two',3:'three',4:'four',5:'five',6:'six',7:'seven',8:'eight',9:'nine'
   ,}

   const tens = {10:'ten',11:'eleven',12:'twelev',13:'thirteen',14:'fourteen',15:'fifteen',16:'sixteen',17:'seventeen',18:'eighteen',19:'nineteen'};


   const ty = {2:'twenty',3:'thirty',4:'fourty',5:'fifty',6:'sixty'
   ,7:'seventy',8:'eighty',9:'ninety'};

   if(number<10){
     console.log(ones[number]);
   }

   else if(number >= 10 && number <= 19){
    console.log(tens[number]);
   }

   else if(number >= 20 && number < 100){
     let digitsArray = number.toString().split('');

     digitsArray.forEach((x,i)=>{
        digitsArray[i] = parseInt(x);
     });

     console.log(digitsArray);


     if(digitsArray[1] !== 0){
       console.log( `${ty[digitsArray[0]]} ${ones[digitsArray[1]]}` );
     }
     else{
      console.log( `${ty[digitsArray[0]]}` );
     }
   }

   else if(number >= 100 && number <= 999){
    let digitsArray = number.toString().split('');

    digitsArray.forEach((x,i)=>{
       digitsArray[i] = parseInt(x);
    });

    if(digitsArray[1] === 0 && digitsArray[2] === 0){
      console.log(`${ones[digitsArray[0]]} hundred`); 
    }

    else if(digitsArray[1] === 0 && digitsArray[2] !== 0){
      console.log(`${ones[digitsArray[0]]} hundred ${ones[digitsArray[2]]}`);
    }

    else if(digitsArray[1] !== 1 && digitsArray[2] === 0){
      console.log(`${ones[digitsArray[0]]} hundred ${ty[digitsArray[1]]}`);
    }

    else if(digitsArray[1] === 1){
      console.log(`${ones[digitsArray[0]]} hundred ${tens[digitsArray[1]*10+digitsArray[2]]}`);
    }

    else if(digitsArray[1]> 1){
      console.log(`${ones[digitsArray[0]]} hundred ${ty[digitsArray[1]]} ${ones[digitsArray[2]]}`);
    }




   }

}


// numToEng(0);
 
// numToEng(18);

// numToEng(126);

// numToEng(909);


/**
 * Q10 
 */

function squareDigits(number){
  let strNum = number.toString();

  let squares = 0;

  strNum = strNum.split('');

  strNum.forEach((x,i)=>{
    strNum[i] = (parseInt(x)*parseInt(x)).toString();
  });

  strNum = strNum.join('');

  squares = parseInt(strNum);

  return squares;
}

// console.log(squareDigits(9119));

// console.log( squareDigits(2483));

/**
 * Q11
 */


function fizzBuzz(number){
  let array = [];

  for(let i=1;i<=number;i++){
    if(i%3 === 0){
      array = [...array,'Fizz'];
    }

    else if(i%5 === 0){
      array = [...array,'Buzz'];
    }

    else{
      array = [...array,i];
    }

  }

  return array;
}

// console.log( fizzBuzz(10));

// console.log(  fizzBuzz(15));


/**
 * Q12
 */


function concat(){
  
  let array = [];


  Array.from(arguments).forEach((x,i)=>{
    array = [...array,...x];
  });

  return array;
}


// console.log(concat([1, 2, 3], [4, 5], [6, 7]));
 
// console.log(concat([1], [2], [3], [4], [5], [6], [7]));

// console.log(concat([1, 2], [3, 4]));


/**
 * Q13
 */

function arrayOfMultiples(num,length){
  let array = [];

  for(let i=1;i<=length;i++){
    array = [...array,num*i];
  }

  return array;
}

// console.log(  arrayOfMultiples(7, 5) );

// console.log( arrayOfMultiples(12, 10));

// console.log(arrayOfMultiples(17, 6));


/**
 * Q14
 */


 function flatten(arr) {
  arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.push(...arr[i]);
  }
  return arr2;
}


// console.log( flatten([[1, 2], [3, 4]]) );

/**
 * Q15
 */

function testJackpot(arr){
  for(let i=1;i<arr.length;i++){
    if(arr[i] !== arr[i-1]){
      return false;
    }
  }
  return true;
}

// console.log(testJackpot(["@", "@", "@", "@"]));

// console.log(testJackpot(["SS", "SS", "SS", "Ss"]));


/**
 * Q16
 */

function secondLargest(arr){
  arr.splice(arr.indexOf(Math.max(...arr)),1);
  return Math.max(...arr);
}


// console.log(secondLargest([54, 23, 11, 17, 10]));

// console.log( secondLargest([10, 40, 30, 20, 50]));




/**
 * Q17
 */

function numberSplit(number){
  return [Math.floor(number/2),number - Math.floor(number/2)];
}

// console.log( numberSplit(4) );

// console.log(numberSplit(11));

// console.log( numberSplit(-9));


/**
 * Q18
 */

function sortByLength(arr){
  arr.sort((a,b)=> a.length - b.length);

  return arr;
}


// console.log( sortByLength(["Google", "Apple", "Microsoft"]) );

// console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]));

// console.log( sortByLength(["Turing", "Einstein", "Jung"]));



/**
 * Q19
 */


function findLargestNums(arr){
  const result = [];
  arr.forEach((v,i)=>{
    result.push( Math.max(...v) );
  });

  return result
}
// console.log(
//   findLargestNums(
//     [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]
//   )
// );

// console.log(
//   findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])
// );


/**
 * Q20
 */

function set(arr){
  const nSet = new Set(arr);

  return Array.from(nSet).sort((a,b)=>a-b);
}


console.log( set([1, 3, 3, 5, 5]) );
 
// console.log( set([4, 4, 4, 4]) );

// console.log( set([5, 7, 8, 9, 10, 15]) ); 

// console.log( set([3, 3, 3, 2, 1]) );