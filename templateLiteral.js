const name = "Murat";
const department = "Frontend Developer";
const salary = 20000;

function ornekFonc (){
    return "Selam"
}

const a = "İsim: " + name + "\n" + "Department: " + department + "\n" + "Maaş: " + salary;
console.log(a)

//AltGr + ;'ya iki kere basınca `` işareti çıkar

const b = `İsim: ${name}\nDepartment: ${department}\nMaaş: ${salary}`
console.log(b)

// const html = "<ul>" +
//             "<li>" + name + "</li>" +
//             "<li>" + department + "</li>" +
//             "<li>" + salary + "</li>" +
//             "</ul>"
// document.body.innerHTML = html;



const html = `
    <ul>
        <li>${name}</li>
        <li>${department}</li>
        <li>${salary}</li>
        <li>${2**2}</li>
        <li>${ornekFonc()}</li>
    </ul>
`;
document.body.innerHTML = html;
            