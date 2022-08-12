const name = "Murat";
const department = "Frontend Developer";
const salary = 20000;


const a = "İsim: " + name + "\n" + "Department: " + department + "\n" + "Maaş: " + salary;
console.log(a)

//AltGr + ;'ya iki kere basınca `` işareti çıkar

const b = `İsim: ${name}\nDepartment: ${department}\nMaaş: ${salary}`
console.log(b)