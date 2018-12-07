//asc order

function isAscOrder(arr) {

  for (i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    } else {
      return true;
    }
  }

}

console.log(isAscOrder([1, 2, 4, 7, 19]));

// Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value 'Fizz' instead
// If the value is a multiple of 5: use the value 'Buzz' instead
// If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead

var arr = [];

function FizzBuzz(n) {
  for (i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      //console.log('FizzBuzz');
      arr.push('FizzBuzz')
    } else if (i % 5 === 0) {
      // console.log('Buzz');
      arr.push('Buzz');
    } else if (i % 3 === 3) {
      // console.log('Fizz');
      arr.push('Fizz')
    } else {
      //console.log(i);
      arr.push(i);
    }
  }
  return arr;
}
console.log(FizzBuzz(20));

// In DNA strings, symbols "A" and "T" are complements of each other, as are "C" and "G". Given one side of the DNA, you need to find the complementary side.

// DNAStrand("ATTGC") ==>  "TAACG"
// DNAStrand("GTAT")  ==>  "CATA"
function replace(str) {
  var arr = str.split('')
  for (var i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 'A':
        arr[i] = 'T'
        break;
      case 'T':
        arr[i] = 'A'
        break;
      case 'C':
        arr[i] = 'G'
        break;
      case 'G':
        arr[i] = 'C';
        break;
    }
  }

  var dna = arr.join('');

  console.log(dna);
}

replace("ATTGC")

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".



function disemvowel(str) {
  return str.replace(/[aeiou]/ig, '')
}

function disemvowel(str) {
  var arr = str.toLowerCase().split('');

  var arrAns = str.split('');

  for (let i = arr.length - 1; i > 0; i--) {
    switch (arr[i]) {

      case 'a':
        arrAns.splice(i, 1);
        break;

      case 'e':
        arrAns.splice(i, 1);
        break;

      case 'i':
        arrAns.splice(i, 1);
        break;

      case 'o':
        arrAns.splice(i, 1);
        break;
      case 'u':

        arrAns.splice(i, 1);
        break;

      default:
        break;
    }
  }
  return arrAns.join('');
}

// A printer prints colors represented by the letters "a" through "m". At the end of the print, it puts out a control string to show what colors were printed.  A "good" control string output example might be "aaabbbbhaijjjm" due to the fact that only the letters a through m were used, and no errors (other letters) were used.

// When the printer has a malfunction, the control string marks it with a letter that isn't a through m, for example: "aaaxbbbbyyhwawiwjjjwwm".

// Write a function, printer_error, which will output the error rate of the printer as a string whose numerator is the number of errors and the denominator the length of the control string. Do not reduce the fraction.

// For example:
// printer_error("aaabbbbhaijjjm") ==> "0/14"
// printer_error("aaaxbbbbyyhwawiwjjjwwm") ==> "8/22"

function printer_error(str) {
  let len = str.length;
  let strArr = str.split('');
  let goodArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
  let count = 0;
  for (let i = 0; i < strArr.length; i++) {

    if (!goodArr.includes(strArr[i])) {
      count++
    }
  }
  console.log(`${count}/${len}`)
}

printer_error('aaaxbbbbyyhwawiwjjjwwm');

function printer_error2(str) {

}

or

function printer_error(str) {
  return str.match(/[^a-m]/g).length + "/" + str.length;
}

printer_error('aaaxbbbbyyhwawiwjjjwwm');

// write a function that translates english to pig-latin
// 'truck' would be 'rucktay'
// 'igloo' would be 'iglooway'

function translate(str) {

  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let arr = str.split('');

  if (!vowels.includes(arr[0])) {
    arr.push(arr[0], 'a', 'y')
    arr.splice(0, 1);
  } else {
    arr.push('a', 'y');
  }
  let result = arr.join('');
  return result;
  
}

// Write a function called songDecoder that removes the terrible dubstep sounds from a song, to reveal the original, pure, un-dubstepped beauty.

// The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

// Examples:
// songDecoder("WUBWUBIWUBAMWUBWUBX") ==> I AM X
// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB") ==>  WE ARE THE CHAMPIONS MY FRIEND

function songDecoder(str) {


  console.log(arr);
  var re = /WUB/g
  var found = str.replace(re, ' ').trim();
  console.log(found)
}

// Write a function that, given a string, returns the number of vowels in that string.

// We will consider that a, e, i, o and u are vowels for the sake of this problem.

function count(str) {

  var vowel = ['a', 'e', 'i', 'o', 'u']
  var arr = str.toLowerCase().split('');
  let count = 0;
  for (let i = 0; i < arr.length; i++) {

    switch (arr[i]) {
      case 'a':
        count++
        break;
      case 'e':
        count++
        break;
      case 'i':
        count++
        break;
      case 'o':
        count++
        break;
      case 'u':
        count++
        break;
    }
  }
  return count;
}

function count(str) {
  let value = str.match(/[aeiou]/ig)

  return value === null ? 'null' : value

}

// Write a function to square every digit of an integer.

// For example: 
// squareEveryNum(9119) ==> 811181
// squareEveryNum(4232) ==> 16494

// Note: The function should accept an integer and return an integer

function squareEveryNum(num) {

  arr = num.toString().split('')
  let result = []

  for (let i = 0; i < arr.length; i++) {
    result.push(Math.pow(Number.parseInt(arr[i], 10), 2))
  }

  return Number.parseInt(result.join(''))
}

console.log(squareEveryNum(4232))

// Your task is to create an array of size n with the values of the Fibonnaci sequence, and reverse the order in which the sequence is displayed.

// For example: [1, 1, 2, 3, 5] would become [5, 3, 2, 1, 1]

// You can assume that n will always be a positive integer between and including, 1 and 64.


function fibo(n) {

  let a = 1,
    b = 0,
    temp, arr = [];


  while (n >= 0) {

    temp = a;
    a = a + b;
    b = temp;
    num--
  }

  arr.push[b]
}

// Description:

// Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you do, but exactly how many? Maybe it's time to write a program to figure it out.

// You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
// (If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

// Note: Of course you can't do half a fold. You should know what this means ;P

// Also, if somebody is giving you a non-positive distance, it's clearly bogus and you should yell at them by returning null/NULL.

//384,400 km to the moon

//https://www.codewars.com/kata/folding-your-way-to-the-moon


function folds(dist) {
  if (dist < 0) return null;
  var distMeters = dist * 1000;
  var distanceCovered = 0.0001;
  var foldCount = 0;
  while (distanceCovered <= distMeters) {
    foldCount++;
    distanceCovered += distanceCovered;
    // console.log( 'distanceCovered: ', distanceCovered );
  }
  console.log('distMeters: ', distMeters);
  console.log('foldCount: ', foldCount);
  return foldCount;
}
folds(384400);

const posts = [{
    id: 1,
    username: 'mpencot0',
    text: 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    date: '2017-07-26 15:44:08',
  },
  {
    id: 2,
    username: 'mpencot0',
    text: 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    date: '2017-08-04 06:17:29',
  },
  {
    id: 3,
    username: 'dbrokenbrow2',
    text: 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    date: '2017-07-12 10:47:03',
  },
  {
    id: 4,
    username: 'myakuntzov3',
    text: 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    date: '2017-09-03 16:53:53',
  },
  {
    id: 5,
    username: 'slogesdale9',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    date: '2017-11-05 08:24:16',
  },
  {
    id: 6,
    username: 'mpencot0',
    text: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    date: '2017-10-07 10:01:07',
  },
  {
    id: 7,
    username: 'ljeffs6',
    text: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    date: '2017-09-24 22:30:55',
  },
  {
    id: 8,
    username: 'ngedge7',
    text: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    date: '2017-11-15 13:38:29',
  },
  {
    id: 9,
    username: 'ljeffs6',
    text: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    date: '2017-06-11 00:10:04',
  },
  {
    id: 10,
    username: 'slogesdale9',
    text: 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    date: '2017-10-09 12:34:55',
  },
];

/* This week we'll be looking at potential operations we may need
        to run on social media post data.

    For today's problem, we'd like to be able to view all the posts
      from a given user, display a collection that includes the number
      of posts the user made and all the post data from that user.

    (e.g ljeffs6 => {
      count: 2,
      posts: [{
        id: 9,
        username: "ljeffs6",
        text:
          "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
        date: "2017-06-11 00:10:04"},
        {
          id: 7,
        username: "ljeffs6",
        text:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        date: "2017-09-24 22:30:55"
        }]
      }
    )

  Once that's completed, organize the collection by the datetime the
    post was made.
*/

// Standard Solution
function userPosts(arr, user) {
  const posts = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].username === user) {
      posts.push(arr[i]);
    }
  }
  return {
    count: posts.length,
    posts: posts
  };
  // or with object shorthand { count: posts.length, posts }
}

//

// // Filter
// const userPosts = (arr, user) => {
//   const userFilter = arr.filter(post => post.username === user);
//   return {
//     count: userFilter.length,
//     posts: userFilter
//   };
// };

/**** Part Two ****/
//Returning the correct user posts AND organized by date and time of post

// const userPosts = (arr, user) => {
//   const userFilter = arr
//     .filter(post => post.username === user)
//     .sort((a, b) => Date.parse(a.date) > Date.parse(b.date));
//   return {
//     count: userFilter.length,
//     posts: userFilter
//   };
// };

userPosts(posts, "slogesdale9");
// Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.

// Examples: 
// validParentheses( "()" ) => returns true 
// validParentheses( ")(()))" ) => returns false 
// validParentheses( "(" ) => returns false 
// validParentheses( "(())((()())())" ) => returns true 

// All input strings will be nonempty, and will only consist of open parentheses '(' and/or closed parentheses ')'

function validParenthesesTest(parant) {
  return (parant.split("(").length - 1) === ((parant.split(")").length - 1))

}
// function validParenthesis(str){

//   let arr = str.split('');
//   let count = 0;
//   let count2 = 0;

//   for(let i = 0;i<arr.length; i++){
//       if(arr[i]==')'){
//           count++
//           console.log(count)
//       }else{
//           count2++
//           console.log(count2)  
//       }
//   }

//  return count ==count2
// }

// Create a function that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

// Examples:

// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect

function findNextSquare(n) {
  return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1

}

console.log(findNextSquare(121))

//   There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.

function uniq(arr) {
  var last = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] == arr[1]) {
      if (arr[0] != arr[i]) {
        return arr[i]
      }
    } else {
      if (arr[last] == arr[last - 1]) {
        if (arr[last] != arr[i]) {
          return arr[i]
        }
      }
    }

  }

}

//given a multidimentional array, write a function that takes in an array and returns the sume of the averages
//of those array 
//let arr= [[1,2,3,4],[1,2,3]]
function average(arr) {
  let sum = 0
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum = sum + arr[i][j];
    }
    total = sum / arr[i].length + total;
    sum = 0;
  }
  return total;
}

//write a function that takes an array and returns the element in the array that appears an odd number of times
function findOdd(arr) {
  //happy coding!

  for (let i = 0; i < arr.length; i++) {

    if (arr.filter(element => element == arr[i]).length % 2 != 0) {
      return arr[i]
    }

  }
}

//   You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

function sortArray(array) {
  let odds = array.filter(element => element % 2 !== 0).sort((a, b) => a > b);
  console.log(odds)
  return array.map(element => {
    if (element % 2 !== 0) {
      return odds.shift()
    } else {
      return element
    }
  })
}
//find the largeset and smallest numbers a given array
function minmax(arr) {
  let min = Math.min(...arr)
  let max = Math.max(...arr)

  return `max is ${max} and min is ${min}`
}

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

var moveZeros = function (arr) {
  // TODO: Program me
  let newArr = []

  arr.forEach((element, index, arr) => {
    if (element !== 0) {
      newArr.push(element)

    }
  })

  for (let i = 0; i < arr.filter(element => element === 0).length; i++) {
    newArr.push(0)
  }

  return newArr;
}

// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
// IPs should be considered valid if they consist of four octets, with values between 0..255 (included).
const isValid = (str) => {

  let ans = true;

  let arr = str.split('.')
  if (arr.length !== 4) {
    ans = false;
  }
  arr.forEach(element => {


    if (+element > 255 || element.match(/\D/g)) {
      ans = false;
    }

    if (element.split('')[0] == 0 && element.length > 1) {
      ans = false
    }

  })
  return ans;
}

//flatten an array

let arr = [1, [1, 2, 3],
  [1, 2, [1, 2, 3]], 2
]

function flatten(arr) {

  const flatArr = []

  arr.forEach(element => {
    if (Array.isArray(element)) {
      flatArr.push(...flatten(element))
    } else {
      flatArr.push(element)
    }
  })

  return flatArr
}

//Maximum difference between two elements such that larger element appears after the smaller number
function difference(arr) {
  let diff = arr[1] - arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - min > diff) {
      diff = arr[i] - min
    }
    if (arr[i] > min) {
      min = arr[i]
    }

  }

  return diff;
}

//bubble sort

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j - 1] > arr[j]) {
        swap(arr, j - 1, j)
      }
    }
  }

  return arr;
}


//format a string
// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
//  returns 'Bart, Lisa & Maggie'

function list(names) {
  //your code here
  let res = names.reduce((acc, curr, index, arr) => {
    if (index === 0) {
      return curr.name
    } else if (index === arr.length - 1) {
      return acc + ' & ' + curr.name
    } else {

      return acc + ', ' + curr.name
    }
  }, '')

  return res;
}

// Write a function named firstNonRepeatingLetter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

function nonRepeat(str) {
  let orgArr = s.split('');
  let arr = str.toLowerCase().split('');

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      return orgArr[i]
    }
  }
  return '';
}

// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers.
//  You are provided with consecutive elements of an Arithmetic Progression. 
//  There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. 
//  The rest of the given series is the same as the original AP. Find the missing term.

function findMissing(arr) {
  let diff1 = arr[1] - arr[0];
  let diff2 = arr[2] - arr[1];
  if (arr[1] <= 0) {
    // if(diff1 > diff2){
    //   diff = diff1
    // } else{
    //   diff = diff2;
    // }

    diff = diff1 > diff2 ? diff1 : diff2

  } else {
    // if(diff1 > diff2){
    //   diff = diff2
    // } else{
    //   diff = diff1;
    // } 

    diff = diff1 > diff2 ? diff2 : diff1;
  }
  //console.log(diff)
  let num = arr[0];

  for (let i = 0; i < arr.length; i++) {
    // console.log(num)
    if (num !== arr[i]) {
      return num
    }
    num += diff;
  }

}

/*Given the triangle of consecutive odd numbers:
rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29 */

function rowSumOddNumbers(n) {
  // TODO
  let ini = 1;
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      // console.log(i)
      if (i === n) {
        // console.log(ini)
        sum = sum + ini
      }
      //  console.log(ini)
      ini = ini + 2;
    }
  }
  return sum;
}
//return Math.pow(n, 3);

/* 

Given a string str, reverse it omitting all non-alphabetic characters.
*/
function reverseLetter(str) {
  return str.match(/[a-zA-Z]/gm).reverse().join('')
}

//Timmy & Sarah think they are in love,
// but around where they live, they will only know once they pick a flower each. 
//If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
//Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2) {
  // moment of truth
  // console.log(flower1%2)
  if (flower1 % 2 === 0 && flower2 % 2 === 0) {
    return false
  } else if (flower1 % 2 == !0 && flower2 % 2 == !0) {

    return false
  }

  return true

}

/* imed Reading is an educational tool used in many schools to improve and advance reading skills. 
A young elementary student has just finished his very first timed reading exercise.
Unfortunately he's not a very good reader yet, so whenever he encountered a word longer than maxLength, he simply skipped it and read on.*/
function timedReading(maxLength, text) {
  //coding and coding..
  let newArr = text.match(/\w+/ig)

  let count = 0;

  newArr && newArr.forEach(element => {
    if (maxLength >= element.length) {
      count++
    }
  })
  return count
}

/*Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. 
If the board is valid return 'Finished!', otherwise return 'Try again!' 
Test.assertEquals(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]]), "Finished!");
*/
function doneOrNot(board) {

  for (let i = 0; i < board.length; i++) {
    if (!checkDuplicates(board[i])) {
      return 'Try again!';
    }
  }
  let newArr = [];
  let arrz = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      newArr.push(board[j][i])
    }
    if (!checkDuplicates(newArr)) {
      return 'Try again!';
    }
    newArr = [];
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {

      newArr.push(board[j][i])
    }
    arrz = [...arrz, ...newArr]
    newArr = [];
  }
  if (!checkDuplicates(arrz)) {
    return 'Try again!';
  }

  return 'Finished!'
}

function checkDuplicates(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i])
    }
  }
  return arr.length === newArr.length
}

// Return an array consisting of the largest number from each provided sub-array.
//  For simplicity, the provided array will contain exactly 4 sub-arrays
function largestOfFour(arr) {
  // You can do this!
  let max = arr[0][0];
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    max = arr[i][0]
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j]
      }
    }
    ans.push(max)
  }
  return ans;
}

/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
 But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead. */

function confirmEnding(str, target) {
  let len = target.length;

  let newStr = str.slice(-len)

  return target === newStr;
}

confirmEnding("Bastian", "n");

//  Repeat a given string str (first argument) for num times (second argument).
//   Return an empty string if num is not a positive number.
function repeatStringNumTimes(str, num) {
  // repeat after me
  // let arr = str.split('')
  let newStr = ''
  if (num < 0) {
    return ''
  }
  for (let i = 0; i < num; i++) {
    newStr = newStr + str
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
//  Return the truncated string with a ... ending.
function truncateString(str, num) {
  // Clear out that junk in your trunk
  //console.log(str)
  if (num < str.length) {
    return str.slice(0, num).concat('...');
  }
  return str
}

// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). 
// If no element passes the test, return undefined.
function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i]
    }
  }
  return undefined
}

//Check if a value is classified as a boolean primitive. Return true or false.
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (typeof bool === "boolean") {
    return true
  }
  return false;
}

booWho(true);
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
  //console.log(str.split(' '))
  let arr = str.split(' ');
  let newArr = [];
  arr.forEach(element => {
    newArr.push(element.charAt().toUpperCase() + element.substring(1).toLowerCase())
  })
  return newArr.join(' ');
}
//Use the array methods slice and splice to copy each element of the first array into the second array, in order.

// function frankenSplice(arr1, arr2, n) {
//   // It's alive. It's alive!
//   let localArray = arr2.slice();
//   for (let i = 0; i < arr1.length; i++) {
//     localArray.splice(n, 0, arr1[i]);
//     n++;
//   }
//   return localArray;
// }

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}

//Remove all falsy values from an array.
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let newArr = []
  for (let i = 0; i < arr.length; i++) {

    if (arr[i]) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}

//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
// The returned value should be a number.
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.

  let newArr = arr.sort((a, b) => {
    return a > b
  })
  for (let i = 0; i < newArr.length; i++) {

    if (newArr[i] == num) {
      return i;
    } else if (num > newArr[i] && num < newArr[i + 1]) {

      return i + 1
    } else if (num > newArr[newArr.length - 1]) {
      return newArr.length
    }

  }
  return 0;
}

//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
  let word = arr[0].toLowerCase();

  let target = arr[1].toLowerCase().split('');
  let count = 0;
  for (let i = 0; i < target.length; i++) {
    if (word.includes(target[i])) {
      count++
    }
  }
  return count == target.length
}

//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
  // Break it up.
  let count = 0;
  let newArr = [];
  let ans = []
  for (let i = 0; i < arr.length; i++) {
    count++
    newArr.push(arr[i])
    // console.log(newArr)
    // console.log(count)
    if (count == size) {
      //console.log(newArr)
      ans.push(newArr)
      count = 0;
      newArr = []
    }
    if (i == arr.length - 1 && newArr.length !== 0) {
      ans.push(newArr)
    }
  }
  //console.log(ans)
  return ans;
}

//We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
function sumAll(arr) {
  let sum = arr[0] + arr[1];
  let small, large;
  if (arr[0] > arr[1]) {
    small = arr[1];
    large = arr[0];
  } else {
    small = arr[0];
    large = arr[1];
  }
  for (let i = small + 1; i < large; i++) {
    sum += i;
  }
  return sum;
}

//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
function diffArray(arr1, arr2) {
  var newArr = [];

  arr1.forEach(element => {
    if(!arr2.includes(element)){
      newArr.push(element)
    }
  })
  arr2.forEach(element =>{
      if(!arr1.includes(element)){
        newArr.push(element)
      }
  })
  return newArr;
}

//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr,...args) {
  console.log(args)
  // Remove all the values
  // let newArr = [];
  // var args = Array.prototype.slice.call(arguments)
  // let arr1 = args.shift();
  // let arr2 = args;
  // //console.log(args.shift())
  // //console.log(arr1)
  // for(let i=0; i<arr1.length; i++){
  //     if(!newArr.includes(arr1[i])){

  //     }

  // }
  return arr.filter(ele=>!args.includes(ele));
}

// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument).
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  let keys = Object.keys(source);
  
  return collection.filter(elem=>{
    for(let i=0;i<keys.length; i++){
     
      if(!elem.hasOwnProperty(keys[i])||elem[keys[i]]!==source[keys[i]]){
          return false
      }
    }
    return true;
  })
}
//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let small = str.toLowerCase();
  //console.log(small);
  let arr = small.replace(/[^a-z]/gm,'-')
 // let arr = small.split(' ');

  //console.log(arr)
  return str.replace(/([a-z])([A-Z])/gm,'$1 $2').toLowerCase().replace(/[^a-z]/gm,'-');
}

//piglatin
function translatePigLatin(str) {
  var strArr = [];
  var tmpChar;

  // check if the char is consonant using RegEx
  function isConsonant(char) {
      return !/[aeiou]/.test(char);
  }

  // return initial str + "way" if it starts with vowel
  // if not - convert str to array
  if (!isConsonant(str.charAt(0)))
      return str + "way";
  else
      strArr = str.split("");

  // push all consonats to the end of the array
  while (isConsonant(strArr[0])) {
      tmpChar = strArr.shift();
      strArr.push(tmpChar);
  }
// convert array to string and concatenate "ay" at the end  
return strArr.join("")+"ay";
}

// test here
translatePigLatin("consonant");


function myReplace(str, before, after) {
  let replace;

  let arr = str.split(' ');
  let arr2 = arr.slice()
  let index= arr.indexOf(before);
 
  let num = arr.splice(index,1,after).join()

  //Perform a search and replace on the sentence using the arguments provided and return the new sentence.
  
  let res = num.match(/[A-Z]/g)
  if(res!==null){
    replace = after.split('')[0].toUpperCase() + after.substring(1)
    console.log(replace)
  } else{
    replace = after.split('')[0].toLowerCase() + after.substring(1)
  }
  let ans = arr2.splice(index,1,replace).join()

  //console.log(arr2)
  return arr2.join(' '); 
}


//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
//Base pairs are a pair of AT and CG. Match the missing element to the provided character.
//Return the provided character as the first element in each array.
function pairElement(str) {
  let arr = str.split('');
  let newArr = [];
  let tempArr = [];
  for(let i=0;i<arr.length; i++){
    //console.log(arr[i])
     switch(arr[i]){
      case 'A':
      tempArr.push('A')
      tempArr.push('T')
      newArr.push(tempArr)
      tempArr = [];
      break
      case 'T':
      tempArr.push('T')
      tempArr.push('A')
      newArr.push(tempArr)
      tempArr = [];
      break
      case 'C':
      tempArr.push('C')
      tempArr.push('G')
      newArr.push(tempArr)
      tempArr = [];
      break
      case 'G':
      tempArr.push('G')
      tempArr.push('C')
      newArr.push(tempArr)
      tempArr = [];
      break
    }
  }//console.log(newArr)
  return newArr;
}

pairElement("GCG");

//Find the missing letter in the passed letter range and return it.

function fearNotLetter(str) {

  let alph = 'abcdefghijklmnopqrstuvwxyz';
  let arr = alph.split('');
  let newArr = str.split('');
  let a = newArr[0];
  let index = arr.indexOf(a);

  for(let i=0;i<newArr.length;i++){

      if(arr[index]!==newArr[i]){
          return arr[index]
      } 
      index++
  }
 
   return undefined
    
  
}

//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
function uniteUnique(...arr) {
  let newArr = [];
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){


      if(!newArr.includes(arr[i][j])){

        newArr.push(arr[i][j])
      }
      
    }
  }
  return newArr
}
//merge two words together letter by letter. then add what is left to the end of the merged string.
function merge(a,b){
  let arr1 = a;
  let arr2 = b;
  let arr3 = [];
  
  for(let i=0;i<arr1.length;i++){
     arr3.push(arr1[i]);
     arr3.push(arr2[i])
  }
  
  let index = a.length;

  let str = b.substring(index)
  
  return arr3.join('') + str
}

//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convertHTML(str) {
  
  let obj = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  }

  let replace;
  let dict = ['&', '<', '>', '"', "'"]
  let arr = str.split('');
 
  for(let i=0;i<arr.length;i++){
    if(dict.includes(arr[i])){
      replace = obj[arr[i]]
      arr.splice(i,1,replace)
    }
  }
  return arr.join('');
}

/*Write a function:
that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
*/
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let large = A[0];
  let small = A[0];
  let ans;
  for(let i=0;i<A.length;i++){
    if(large<A[i]){
      large=A[i]
    }
    if(small>A[i]){
      small=A[i]
    }
  }

  for(let i=small;i<large;i++){
   
    if(!A.includes(i)){
      ans = i;
      if(ans<0){
        return 1
      }
      return ans
    }
  }

  if(large<0){
    return 1
  } 

    return ++large ;
  
}

//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

function sumFibs (num) {
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;
  while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
          result += currNumber;
      }

      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
  }

  return result;
}

// test here
sumFibs(4);

//Sum all the prime numbers up to and including the provided number.


function sumPrimes(num) {
  
  let arr = Array.from({length: num+1}, (v, k) => k).slice(2); 
  
  let onlyPrimes = arr.filter( (n) => { 
    let m = n-1;
    while (m > 1 && m >= Math.sqrt(n)) { 
      if ((n % m) === 0) 
        return false;
        m--;
    }
      return true;
  });
  
  return onlyPrimes.reduce((a,b) => a+b); 
}


//LCM
function smallestCommons(arr) {
  // Sort array from greater to lowest
  // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
  arr.sort(function(a, b) {
    return b - a;
  });

  // Create new array and add all values from greater to smaller from the
  // original array.
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  // Variables needed declared outside the loops.
  var quot = 0;
  var loop = 1;
  var n;

  // Run code while n is not the same as the array length.
  do {
    quot = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }

    loop++;
  } while (n !== newArr.length);

  return quot;
}

smallestCommons([1,5]);