let a = 8.6
let b = 1.4

console.log(a)

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b) //bölümünden kalan
console.log(Math.pow(a,2)) //kuvvetini hesaplar

console.log(Math.ceil(a)) //yukarı yuvarla
console.log(Math.floor(a)) //aşağı yuvarla

console.log(Math.round(b))  //yuvarla (nereye yakınsa)


console.log(Math.sqrt(a)) //karekök

//-----------------------------------------


console.log(Math.random()) // 0 ila 1 arası değer üretir. 0 dahil 1 hariç.

console.log(Math.random()*100) 
console.log(Math.round((Math.random()*100))) // 0 ila 100 arası değer üretir. 
console.log(Math.round((Math.random()*100 + 1))) // 1 ila 100 arası değer üretir. 

//-----------------------------------------

console.log(Math.max(a,b))
console.log(Math.min(a,b))