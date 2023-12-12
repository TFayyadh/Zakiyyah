function twoNumbers(num1, num2){
    if (num1 >  num2)
    return num1;
    else
    return num2;
}

let max = twoNumbers(10,7)
console.log(max)

twoNumbers(5,5)

function isLandscape(width, height){
    return (width > height);
}

console.log(isLandscape(200,19))


function fizzBuzz(input){

    if(typeof input !== 'number') {
        return "Input is not a number"
    }
    else if(input % 3 === 0 && input % 5 === 0 ){
        return "FizzBuzz";
    }
    else if (input % 3 === 0){
        return "Fizz";
    }
    else if (input % 5 === 0){
        return "Buzz";
    }
    else{
        return input;   
    }

}

const output = fizzBuzz(5)
console.log(output)

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed < speedLimit + kmPerPoint){
        console.log("Ok");
    }
    else{
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
    
    if(points >=12)
        console.log("License suspended");
    else
    console.log("Points:", points);
    }
}

checkSpeed(74)

function showNumbers(limit){


    for(let i = 0; i<=limit; i++){
        
        if(i % 2 === 0)
            console.log(`${i} "Even"`);
        else
        console.log(`${i} "Odd"`);
    }

};

console.log(showNumbers(10))


function countTruthy(array){
    let count = 0 
        for(let item of array){
        if(item)
            count++
    }
    return count;
}

const array = [0, null,2,3]

console.log(countTruthy(array));


function showProperties(obj){

    for(let value in obj){
        if (typeof obj[value] === "string" ){
            console.log(value, obj[value]);
        }
    }
}

const movie = {
    title : "Anak",
    release: 2028,
    rating: 7,
    director: "Michael Bay"
};

showProperties(movie)

function sum(limit){
    let sum = 0;
    for(let i = 0; i<=limit; i++)
        if(i % 3 === 0 || i % 5 === 0 )
        sum += i;

    return sum;
}

console.log(sum(10));

function calculateGrade(marks){
    const average = calculateAverage(marks);
     
    if(average < 60) return 'F';
    if(average < 70) return 'D';
    if(average < 80) return 'C';
    if(average < 90) return 'B';
    return 'A';
}

function calculateAverage(array){

    let sum = 0
    for(let value of array){
        sum +=value
    }

    return sum / array.length;
}   

const marks = [80,60,50]

console.log(calculateGrade(marks));

function showStars(rows){
    for(row = 1; row <=rows; row++){
        let stars = "";
        for(i=0; i<row; i++){
            stars +="*";
        }
        console.log(stars) 
    } 
}

showStars(5)

function showPrimes(limit){
    for(let number = 2; number<=limit;number++){

        let isPrime = true
        
        for(let factor = 2; factor < number; factor++){
            if(number % factor === 0){
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(number);
    }
}

showPrimes(10)

function lgInteger(int1,int2){
    if(int1 > int2)
        console.log("INT 1: ", int1 );
    if(int2 > int1)
        console.log("INT 2:", int2);
    if(int2 === int1)
        console.log("INT 1:",int1,"INT 2 :", int2);
}

lgInteger(10,8)

function oddEven(max){
    for(i=0;i<=max;i++){
        if(i % 2 === 0){
            console.log( i,"Even");
        }
        else 
            console.log(i, "Odd");
    }
}

oddEven(15)

let markah = [80,77,88,95,68]

function averageMarks(markah){
    let sum = 0 
    for(let mark of markah){
        sum +=mark;
    }
    let average = sum / markah.length
    return average;
}

function kiraGrade(array){

    const average = averageMarks(markah)

    if(average<60)
        console.log("F");
    else if(average <70)
        console.log("D");
    else if(average < 80)
        console.log("C");
    else if(average < 90)
        console.log("B");
    else
        console.log("A");

}

kiraGrade(markah)
