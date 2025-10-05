// provlem 1

const number =  5;

if(number % 2 === 0){
    console.log('even', number)
}
else{
    console.log('odd number', number)
}

// ternary opprator

const result = (number % 2 === 0) ? 'even':'odd';
console.log(result, number)

// peovlem 2

const value = -2;

if(value > 0){
    console.log('positive', value);
}
else if(value < 0){
    console.log('Negative', value);
}
else{
    console.log('Zero', value);
}

// problem 3

const a = 50;
const b = 20;
if(a > b){
    console.log('largest number', a)
}
else{
    console.log('largest number', b)
}

// ternary
const values =(a>b)? a : b;
console.log('largest', values);

// problem-4
// largest number
const x = 20;
const y = 30;
const z = 10;

if(x >  y && x > z){
    console.log('largest number', x)
}
else if(y > x && y > z){
    console.log('largest number', y)
}
else{
    console.log('largest number', z)
    
}

// prpblem -5

const year = 2020;

if(year % 4 === 0 && year % 100 !==0 || year % 400 === 0){
    console.log('leap year')
}
else{
    console.log('not leap year')
}

// problem -6

const age = 20;

if(age >= 18){
    console.log('Eligible')
}
else{
    console.log('not eligibile')
}

// ternary operator
 const ages = (age >= 18)? 'eligible': 'not eligible'
 console.log(ages)
// problem-7

const d = 55;
if(d % 5 === 0 && d % 11 === 0){
    console.log('divisible')
}
else{
    console.log('not divisible')
}

// problem -8

const grade = 49;
if(grade > 80){
    console.log('A+');
}
else if(grade > 70){
    console.log('B');
}
else if(grade > 60){
    console.log('C');
}
else if(grade >= 50){
    console.log('D');
}
else{
    console.log('F');
}

// problem 9

const char = 'a';

if(char >= 'A' && char <= 'Z'){
    console.log('uppercase', char);
}
else if( char >= 'a' && char <= 'z'){
    console.log('lowercase', char)
}
else{
    console.log('no alfabet')
}

//ternary operator
const chars = (char >= 'A' && char <= 'Z')? 'uppercase': 'lowercase';
console.log(chars);

// problem 10

const vowels = 's';
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ){
    console.log('vowel');
}
else{
    console.log("consonate")
}
// provlem 11
// ternary operator
 const multiple = 22;
 const s = (multiple % 3 === 0 || multiple % 7 === 0)? true: false;
 console.log(s)

