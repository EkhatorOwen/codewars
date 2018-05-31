//asc order

function isAscOrder(arr)
{
 
  for(i=0;i<arr.length;i++)
  {
    if(arr[i]<arr[i-1])
    {
      return false;
    }
    else
    {
      return true;
    }
  }
  
}

console.log(isAscOrder([1,2,4,7,19]));

// Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value 'Fizz' instead
// If the value is a multiple of 5: use the value 'Buzz' instead
// If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead

var arr = [];
function FizzBuzz(n)
{
  for(i=1;i<=n;i++)
  {
    if(i%3===0&&i%5===0)
    {
      //console.log('FizzBuzz');
      arr.push('FizzBuzz')
    }
    else if(i%5===0)
    {
     // console.log('Buzz');
     arr.push('Buzz');
    }
   else if(i%3===3)
    {
     // console.log('Fizz');
     arr.push('Fizz')
    }
    else
    {
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
function replace(str)
{
  var arr = str.split('')
  for(var i=0;i<arr.length;i++)
  {
    switch (arr[i])
    {
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



function disemvowel(str)
{
    return str.replace(/[aeiou]/ig,'')
}

function disemvowel(str)
{
    var arr = str.toLowerCase().split('');

    var arrAns = str.split('');

    for(let i =arr.length-1; i>0; i--)
    {
        switch (arr[i]) {

                case 'a':   
                arrAns.splice(i,1);
                break;

                case 'e':     
                arrAns.splice(i,1);
                break;

                case 'i':   
                arrAns.splice(i,1);
                break;

                case 'o':
                arrAns.splice(i,1);
                break;
                case 'u':
      
                arrAns.splice(i,1);
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

function printer_error(str){
  let len = str.length;
  let strArr = str.split('');
  let goodArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m']
  let count = 0;
  for(let i=0; i<strArr.length;i++){

      if(!goodArr.includes(strArr[i])){
          count++
      }
  }
  console.log(`${count}/${len}`)
}

printer_error('aaaxbbbbyyhwawiwjjjwwm');

function printer_error2(str){  

}

or

function printer_error(str){
  return str.match(/[^a-m]/g).length + "/" + str.length;
}

printer_error('aaaxbbbbyyhwawiwjjjwwm');

// write a function that translates english to pig-latin
// 'truck' would be 'rucktay'
// 'igloo' would be 'iglooway'

function translate(str){

  let vowels = ['a','e','i','o','u'];
  let arr = str.split('');

      if(!vowels.includes(arr[0]))
      {
          arr.push(arr[0],'a','y')
          arr.splice(0,1);    
      }
      else{
          arr.push('a','y');
      }
      let result = arr.join('');
      console.log(result);
}

// Write a function called songDecoder that removes the terrible dubstep sounds from a song, to reveal the original, pure, un-dubstepped beauty.

// The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

// Examples:
// songDecoder("WUBWUBIWUBAMWUBWUBX") ==> I AM X
// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB") ==>  WE ARE THE CHAMPIONS MY FRIEND

function songDecoder(str){


  console.log(arr);
  var re = /WUB/g
  var found = str.replace(re,' ').trim();
  console.log(found)
}

// Write a function that, given a string, returns the number of vowels in that string.

// We will consider that a, e, i, o and u are vowels for the sake of this problem.

function count(str){

  var volwel = ['a','e','i','o','u']
  var arr = str.toLowerCase().split('');
  let count = 0;
  for(let i=0; i<arr.length;i++){

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

function count(str){
let value = str.match(/[aeiou]/ig)

return value===null ? 'null' : value

}

// Write a function to square every digit of an integer.

// For example: 
// squareEveryNum(9119) ==> 811181
// squareEveryNum(4232) ==> 16494

// Note: The function should accept an integer and return an integer

function squareEveryNum(num){

    arr = num.toString().split('')
    let result = []
  
    for(let i=0;i<arr.length;i++){
        result.push(Math.pow(Number.parseInt(arr[i],10),2))
    }

    return Number.parseInt(result.join(''))
}

console.log(squareEveryNum(4232))

// Your task is to create an array of size n with the values of the Fibonnaci sequence, and reverse the order in which the sequence is displayed.

// For example: [1, 1, 2, 3, 5] would become [5, 3, 2, 1, 1]

// You can assume that n will always be a positive integer between and including, 1 and 64.


function fibo(n){

  let a =1, b =0, temp, arr=[];
 

  while(n>=0){

    temp = a;
    a = a+b;
    b= temp;
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


function folds( dist ) {
  if ( dist < 0 ) return null;
  var distMeters = dist * 1000;
  var distanceCovered = 0.0001;
  var foldCount = 0;
  while ( distanceCovered <= distMeters ) {
    foldCount++;
    distanceCovered += distanceCovered;
   // console.log( 'distanceCovered: ', distanceCovered );
  }
  console.log( 'distMeters: ', distMeters );
  console.log( 'foldCount: ', foldCount );
  return foldCount;
}
folds( 384400 );

const posts = [
	{
		id: 1,
		username: 'mpencot0',
		text:
			'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
		date: '2017-07-26 15:44:08',
	},
	{
		id: 2,
		username: 'mpencot0',
		text:
			'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
		date: '2017-08-04 06:17:29',
	},
	{
		id: 3,
		username: 'dbrokenbrow2',
		text:
			'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
		date: '2017-07-12 10:47:03',
	},
	{
		id: 4,
		username: 'myakuntzov3',
		text:
			'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
		date: '2017-09-03 16:53:53',
	},
	{
		id: 5,
		username: 'slogesdale9',
		text:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
		date: '2017-11-05 08:24:16',
	},
	{
		id: 6,
		username: 'mpencot0',
		text:
			'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
		date: '2017-10-07 10:01:07',
	},
	{
		id: 7,
		username: 'ljeffs6',
		text:
			'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
		date: '2017-09-24 22:30:55',
	},
	{
		id: 8,
		username: 'ngedge7',
		text:
			'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
		date: '2017-11-15 13:38:29',
	},
	{
		id: 9,
		username: 'ljeffs6',
		text:
			'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
		date: '2017-06-11 00:10:04',
	},
	{
		id: 10,
		username: 'slogesdale9',
		text:
			'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
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

function validParenthesesTest(parant){
  return (parant.split("(").length-1) === ((parant.split(")").length-1))
 
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

  function findNextSquare(n){
  return  Number.isInteger( Math.sqrt(n))?Math.pow( Math.sqrt(n)+1,2): -1
  
  }
  
  console.log(findNextSquare(121))