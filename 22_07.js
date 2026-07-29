// write a funtion to take numner b/w 1-9 and return in words

// function numbertowords(num){
//     const words = ["one","two","three","four","five","six","seven","eight","nine"];
//     if(num>=1&&num<=9){
//         return words[num-1];

//     }else{
//         return "enter a number";
//     }
// }
// console.log(numbertowords(5));


const towords = (digit)=>{
    switch(digit){
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
        default:
            return "enter numb";
    }
}
console.log(towords(5));

// create another funtion that takes a number and show in words with the help of towords funtion.
// const shownumberinwords = (num) =>{
//     const numStr = num.tostring();
//     for(let i=0;i<numStr.length;i++){
//         const digit = parseInt(numStr[i]);
//         console.log(towords(digit));
        
//     }
// }
// console.log(shownumberinwords(123456789));

const rollno ="2345423232";
const digits=String(rollno).split("");
console.log(digits);
for(let i=0;i<digits.length;i++){
        console.log(towords(parseInt(digits[i])));
        
    }

let inwords=" ";
digits.forEach((d) =>{
    //console.log(towords(number(d)));
    inwords +=" "+towords(Number(d));
});
console.log(inwords);
