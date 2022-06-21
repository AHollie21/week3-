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