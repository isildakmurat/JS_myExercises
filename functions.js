// Fonksiyon yazma:

function sayiUret() {
    return Math.ceil(Math.random() * 100);
}

var sayi1 = sayiUret();
var sayi2 = sayiUret();
console.log(sayi1, sayi2, sayi1 + sayi2);


//Parametre atama ile:

function sayiUret2(ustLimit) {
    return Math.ceil(Math.random() * ustLimit);
}

var sayi1 = sayiUret2(200);
var sayi2 = sayiUret2(1000);
console.log(sayi1, sayi2, sayi1 + sayi2);


//Fonksiyon üretme

function toplama() {
    return ilkSayi + sonSayi
}

var ilkSayi = 5
var sonSayi = 8
var sonuc = toplama()

console.log(ilkSayi, '+', sonSayi, '=', sonuc)