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