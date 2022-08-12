const firstName = "Murat";
const secondName = "Işıldak";


name1 = firstName + secondName;
console.log(name1);

name1 = firstName + " " + secondName;
console.log(name1);

name1 = "Murat "
name1 = name1 + "Işıldak"
console.log(name1);

name1 = "Murat " //isimden sonraki boşluğa dikkat!
name1 += "Işıldak"
console.log(name1);

name1 = firstName.concat(" ", secondName, " - ", "Frontend Developer")
console.log(name1);


name1 = firstName.length; //kaç karakter olduğunu yazar
console.log(name1);

name1 = firstName.toLowerCase(); //karakterleri küçültür
console.log(name1);

name1 = firstName.toUpperCase(); //karakterleri büyütür
console.log(name1);




name1 = firstName[0]; //stringten verilen indeksteki karakteri getirir
console.log(name1);

name1 = secondName[secondName.length - 1]; //karakter sayısından bir eksiği yani son indeksteki karakteri getir
console.log(name1);

name1 = secondName.charAt(1); //stringten verilen indeksteki karakteri getirir
console.log(name1);
name1 = secondName.charAt(secondName.length - 1); 
console.log(name1);

name1 = firstName.indexOf("u"); //karakterin indeksini verir
console.log(name1);


// split method

const langs = "Python, JS, HTML";

name1 = langs.split(","); // belirtilen yerden bölerek array içine koyar
console.log(name1);

name1 = firstName.split("");
console.log(name1);


// replace metod

name1 = langs.replace("HTML", "CSS"); // ilki ile ikinciyi değiştirir
console.log(name1);


// Includes

name1 = langs.includes("HTML"); // içinde "HTML" var mı diye sorgular boolean sonuç verir
console.log(name1);



