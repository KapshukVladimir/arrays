//1.Написать функцию, которая возвращает содержимое массива наоборот.
console.log("Задание 1");

function myReverse(){
	let arr = [1, 2, 3, 4, 5];
	console.log(arr.reverse());
}
myReverse();

/*2.Написать функцию, которая находит в массиве значения, 
повторяющиеся два и более  раз, и возвращает их*/
console.log("Задание 2");

function findSame(){
	let myArray = [2, 2, 1, 6, 6, 8, 8, 9, 9];
	let dublicateArray = [];
	for (let i = 0; i < myArray.length; i++){
		for (let j = i + 1; j < myArray.length; j++){
				if (myArray[i] === myArray[j]){
					dublicateArray.push(myArray[i]);
				}		
		}
	}
	console.log(dublicateArray);
}
findSame();

//3. Написать функцию, которая находит в массиве самое маленькое нечетное число и  возвращает его.  
console.log("Задание 3");

function lessNumber(){
	var numbers = [2, 1, 4, 5, 7, 8, 9];
	let odd = [];
	
	for (let i = 0; i < numbers.length; i++){
		if (numbers[i] % 2 != 0){
			odd.push(numbers[i]);
		}
	}
	let min = odd[0];
	for (let j = 0; j < odd.length; j++){
		if (odd[j] < min){
			min = odd[j];
		}
	}
	console.log(min);
}
lessNumber();

//4. Написать функцию для поиска среднего арифметического значений массива.  
console.log("Задание 4");
function average(){
	let avrArray = [10, 9, 9, 10];
	let count = 0;
	for (let i = 0; i < avrArray.length; i++){
		count += avrArray[i];
	}
	count /= avrArray.length;
	console.log(count);
}
average();

//
console.log("Задание 5");
//5. Задан одномерный массив чисел. Напишите сценарий, который определяет число  положительных элементов массива. 
function positive(){
	let arr = [1, -2, 3, -4, 5, -6, 9];
	sum = 0;
	for (let i = 0; i < arr.length; i++){
		if (arr[i] > 0){
			sum += arr[i]
		}
	}
	console.log(sum);
}
positive();

console.log("Задание 6");
//6. Задан одномерный массив чисел. Напишите сценарий, который определяет число  отрицательных элементов
function odd(){
	let arr = [1, -2, 3, -4, 5, -6, 9, -8];
	let sum = 0;
	for (let i = 0; i < arr.length; i++){
		if (arr[i] < 0){
			sum += arr[i];
		}
	}
	console.log(sum);
}
odd();
console.log("Задание 7");
//7. Задан одномерный массив целых чисел. Напишите сценарий, который определяет  число минимальных элементов.
function myMinNum(){
	let arr = [1, -2, 3, -4, 5, -6, 9, -8];
	let min = arr[0];
	for (let i = 0; i < arr.length; i++){
		if (arr[i] < min){
			min = arr[i]
		}
	}
	console.log(min);
}
myMinNum();
console.log("Задание 8");
//8. Задан одномерный массив целых чисел. Напишите сценарий, который определяет  число элементов, кратных 7.
function mupltiplyOfSeven(){
	let arr = [6, 7, 8, 14 , 4, 21 , 20];
	var sumOfMultiply = 0;
	for (let i = 0; i < arr.length; i++){
		if (arr[i] % 7 === 0){
			sumOfMultiply += arr[i];
		}
	}
	console.log(sumOfMultiply);
}
mupltiplyOfSeven();
console.log("Задание 9");
//9. Задан одномерный массив целых чисел. Напишите функцию, которая возвращает  номер последнего минимального значения. 
function lastMimIndex(){
	let arr = [11, 12, 6, 8, 10, 1];
	let min = arr[0];
	let i;
	for (i = 0; i < arr.length; i++){
		if (arr[i] < min){
			min = arr[i];
		}
		if (arr[i] === arr[arr.length -1]){
			console.log(arr.indexOf(min));
		}
	}
}
lastMimIndex();
console.log("Задание 10");
//10. Напишите функцию, который определяет номер первого максимального значения в  одномерном массиве целых чисел.  
function lastMaxIndex(){
	let arr = [11, 12, 6, 8, 10, 1, 333];
	let max = arr[0];
	let i;
	for (i = 0; i < arr.length; i++){
		if (arr[i] > max){
			max = arr[i];
		}
		if (arr[i] === arr[arr.length -1]){
			console.log(arr.indexOf(max));
		}
	}
}
lastMaxIndex();
console.log("Задание 11");
//11. Напишите сценарий, при работе которого определяется число элементов  одномерного массива, совпадающих с заданным массивом.  
function twoArraysEqual(){
	let arr = [111, 11, 111, 11, 1, 111, 1, 12, 6, 11, 8, 1, 333].sort();
	let equalCount = 0;
	for (let i = 0; i < arr.length; i++){
		if (arr[i] === arr[i + 1]){
			equalCount++;
			console.log(arr[i]);//выводит 4 раза 11 и 3 раза 1
		}
	}
	console.log(equalCount); //а здесь выводит 7 - число повторений
}
twoArraysEqual();
console.log("Задание 12");
//12. Напишите функцию, при работе которой определяется, есть ли в массиве элементы,  значения которых совпадают
function isEqualValue(){
	let arr = [11, 12, 6, 11, 8, 1, 333].sort();
	let isEqualCount = false;
	for (let i = 0; i < arr.length; i++){
		if (arr[i] === arr[i + 1]){
			isEqualCount = true;
		}
	}
	console.log(isEqualCount); 
}
isEqualValue();
console.log("Задание 13");
//13. Напишите функцию, определяющую все ли элементы массива различны.
function isDifferentValue(){
	let arr = [11, 1, 12, 6, 8, 333].sort();
	let arrDiferent = [];
	for (let i = 0; i < arr.length; i++){
		if (arr[i] === arr[i + 1]){
			arrDiferent.push(arr[i]);
		}
	}
	if (arrDiferent.length !== 0){
			console.log('Elements are not different');
		}else{
			console.log('Elements are different');
		}
		console.log(arrDiferent);
}
isDifferentValue();
console.log("Задание 14");
//14. Напишите сценарий, определяющий максимальную по длине неубывающую  последовательность
/*function notDecreasingSequence(){
	let arr = [1, 2, 3, 4, 0, 5, 6, 2, 1, 7, 8, 9, 10]
	let currentSequence = [arr[0]];
	let maxSequence = [arr[0]];
	for (let i = 0; i < arr.length; i++){
		if (arr[i] >= arr.[i - 1]){
			currentSequence.push(arr[i])
		}
	}
}*/
 