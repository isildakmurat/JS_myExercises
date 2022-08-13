const numbers = [12, 235, 49, 784, 123, 0, 3];
const langs = ["Python", "Java", "JavaScript", "C++"];
const randoms = ["Selam", 26, null, undefined, 3.9];

let value; //böyle bırakıp sonra tanımlayabiliriz


//INDEKSLEME

value = numbers[0];
console.log(value);

//veya

value = numbers[numbers.length - 1];
console.log(value);


//INDEKS DEĞİŞTİRME

numbers[0] = 13;
console.log(numbers)

//Index Of

value = numbers.indexOf(235)
console.log(value)


//Array'e ekleme 

numbers.push(404) //sonuna ekleme
console.log(numbers)

numbers.unshift(404) //başına ekleme
console.log(numbers)



//Array'den çıkarma

numbers.pop() //sonundan çıkar
console.log(numbers)

numbers.shift() //başından çıkar
console.log(numbers)



//Indeks aralığını çıkarma

numbers.splice(0, 2) //0.indeksten 2.indekse kadar çıkar (2 dahil değil)
console.log(numbers)


//Sırasını ters çevirme

numbers.reverse() 
console.log(numbers)

//Sıralama

numbers.sort() // sadece ilk rakamlara göre sıralar!
console.log(numbers)

//eğer sayı büyüklüğüne göre sıralamak istenirse fonksiyon yazılmalı

numbers.sort(function(a,b){return a - b})
console.log(numbers)
//veya
numbers.sort(function(a,b){return b - a})
console.log(numbers)
