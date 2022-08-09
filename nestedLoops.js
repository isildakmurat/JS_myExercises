//1 ila 100 arası random bir sayı üreten fonksiyon
//-------------------------------------------------
function sayiUret(){                            
   return Math.ceil(Math.random() * 100)
}


//sayiUret fonksiyonunu 5 kere çalıştır
//------------------------------------------------------------
for(i=1; i<=5; i++){                            
    console.log(sayiUret())
}

//5 kolon halinde sayiUret fonksiyonunu 5 kere çalıştır
//-------------------------------------------------------------

for(i=1; i<=5; i++){
    console.log(i + '. KOLON')
    for(j=1; j<=5; j++){
        console.log(sayiUret())
    }
}


