const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function evenNumbers (numbers){
    return numbers % 2 === 0;
}
const filtered = numbers.filter(evenNumbers);
console.log(filtered);