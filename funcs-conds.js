var sayi1 = 1
var sayi2 = 2
var sayi3 = 3
var sayi4 = 4

// En büyük sayiyi bulma fonksiyonu
//İki sayı arasında

function enBuyuk2() {
    if (sayi1 > sayi2) {
        return console.log(sayi1, '>', sayi2)
    }
    else {
        return console.log(sayi1, '<', sayi2)
    }
}
enBuyuk2()


//Üç sayı arasında


// function enBuyuk3() {
//     var enBuyuk = sayi1
//     if (enBuyuk<sayi2) {
//         enBuyuk3 = sayi2
//     }
//     else if (enBuyuk<sayi3) {
//         enBuyuk3 = sayi3
//     }  
// } 
//     console.log('En büyük sayı: ' + enBuyuk3)



//veya

var enBuyuk3 = sayi1
if (enBuyuk3<sayi2) {
        enBuyuk3 = sayi2
    }
if (enBuyuk3<sayi3) {
        enBuyuk3 = sayi3
    }  
    console.log('En büyük sayı: ' + enBuyuk3)



//veya


// function enBuyuk4() {
//     if (sayi1 > sayi2 && sayi3) {
//         return console.log('En büyük sayı:', sayi1)
//     }

//     else if (sayi2 > sayi1 && sayi3) {
//         return console.log('En büyük sayı:', sayi2)
//     }
//     else if (sayi3 > sayi1 && sayi2) {
//         return console.log('En büyük sayı:', sayi3)
//     }

// }
// enBuyuk4()

