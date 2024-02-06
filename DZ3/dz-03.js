//task-01


const wordsArray = ["apple", "banana", "orange", "kiwi", "grape"];
const n = 5
let newArr=[]
    for(word of wordsArray){
        if (word.length>n){
            newArr.push(word)
        }
    }
console.log(newArr);


//task-02

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [3, 4, 5, 6, 7];
const combinedArray = arrayA.concat(arrayB);


const uniqueArray = [];
for (let i = 0; i < combinedArray.length; i++) {
  if (uniqueArray.indexOf(combinedArray[i]) === -1) {
    uniqueArray.push(combinedArray[i]);
  }
}

console.log(uniqueArray);
