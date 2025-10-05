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
    console.log('Eligble')
}
else{
    console.log('not eligibile')
}

// problem-7



