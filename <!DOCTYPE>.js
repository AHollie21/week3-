< !DOCTYPE >
    <
    /html>
    //1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
var ages = [];
ages.push(3, 9, 23, 64, 2, 8, 28, 93)
    //a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array
let firstValue = ages.shift();
let Lastvalue = ages.length - 1

function Subtract() { return lastValue - firstValue }
console.log(Subtract);
//Add new age to array, repeat a.
ages.push(17)

function Subtract() { return lastValue - firstValue }
console.log(Subtract);
//c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

function average(ages) {
    let avg = 0;
    for (let i = 0; i < ages.length; i++) {
        avg += ages[i];
        console.log(i + "Some=" + avg);
    }
    return avg / ages.length;
}
console.log("Average=" + average(ages));
//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
for (i = 0 i < names.length; i++) {
    sum = sum + names[i].length;
}
console.log("Average letters in names" + sum / names.length);
//3.	How do you access the last element of any array?
// length-1 finds the last element
4. //How do you access the first element of any array?
//.shift() or index(0) finds the first element
//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
var nameLengths = [];
for (i = 0; i < names.length; i++) {
    nameLengths[i].length;
}
6. //Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
sum = 0;
for (i = 0; i < nameLengths.length; i++) {
    sum = sum + nameLengths[i];
}
console.log("sum of th eelements in array:", sum);
//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.
function concentratedWord(word, n); {
    var concentrated = word;
    for (i = 1; i < = n; i++) {
        concentrated = con.concen(word)
    }
    return concentrated;
}
//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function fullNames(firstName, lastName) {
    return firstName.concentrated('', lastName);
}
//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function numbersGreater(arr) {
    sum = 0;
    for (i = 0; i < arr.length; i++) {

        sum = sum + arr[i];
    }
    return (sum / arr.length);
}
if (sum > 100) { return true; } else { return false; }
//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
function totalAvg(arr) {
    sum = 0;
    for (i - 0; i < arr.length; i++)

        [sum = sum + arr[i];]
    return (sum / arr.length);
}
//11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function buyDrink(isHotOutside, moneyInPocket); {
    if ((isHotOutside) & (moneyInPocket > 10.50)) { return true; } else { return false; }
}