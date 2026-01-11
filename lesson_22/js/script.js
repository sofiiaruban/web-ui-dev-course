//Task 1
let someVar = 0;
++someVar;

if (someVar) {
	console.log(someVar);
}
//Output: 1


//Task 2
let itemsTotal = 10;

for (let i = 1; i <= itemsTotal; i++) {
  console.log(`Пункт №${i}`);
}

//Task 3 
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000');
}
// Nothing is logged because all conditions joined by || evaluate to false.
// The && part is also false because not both expressions are truthy.


//Task 4 
const RESULT_TEXT = 'Division result: ';

function isValidNumber(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return false;
  }

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return false;
  }

  if (b === 0) {
    return false;
  }

  return true;
}

function divide(a = 0, b = 1) {
  if (!isValidNumber(a, b)) {
    return `${RESULT_TEXT}0`;
  }

  return `${RESULT_TEXT}${a / b}`;
}

console.log(divide());
console.log(divide(10, 2));  
console.log(divide(5, 0)); 

//Task 5
const arr = [3, 15, 10, 9, 7];

arr.forEach(item => {
  if (item === 10) {
    console.log(item);
  }
});