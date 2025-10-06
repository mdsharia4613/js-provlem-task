// problem- 12

// problem- 13
const number = -24;

if(number < 0){
    console.log("absolute vakue:", number * -1);
}
else{
    console.log('Absolute vakue:', number);
}

// problem- 14

const a = 30;
const b = 20;
const c = 40;

if((a + b) > c && (a + c) > b && (b + c) > a){
    console.log('Triangle is possible');
}
else{
    console.log('Triangle is not possible');
}

// problem 15

const buy = 200;
const sell = 240;
if(sell > buy){
    console.log('profit')
}
else{
    console.log('loss')
}

// problem 16

const x = 20;
const y = 40;
if(x < y){
    console.log('smallest number:', x)
}
else{
    console.log('smallest number:', y)
}

// ternary operator
const value = (x < y)? x : y;
console.log(value)

// problem 17
const mark = 50;
const marks = mark >= 40? 'pass': 'fail';
console.log(marks);

// problem 18

const m = -2;
if( m % 2 === 1 && m > 0){
    console.log('Number is both odd and positive')
}
else{
    console.log('Number is not both odd and positive')
}

// problem -19

const num = 153;

const q = Math.floor(num / 100);
const w = Math.floor ((num % 100) / 10);
const e = num % 10;
 
const sum = (q**3) +  (w**3) + (e**3);
if(sum === num){
    console.log(num, 'is an armstrong Number')
}
else{
    console.log(num, 'is not an armstrong Number')
}

// problem 20




const s = 75;
if(s >= 90){
    console.log('excellent');
}
else if(s >= 75){
    console.log('very good');
}
else if(s >= 50){
    console.log('Needs Improvment');
}
else{
    console.log('fail');
}