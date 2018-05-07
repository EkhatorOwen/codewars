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