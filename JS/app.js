
// document.getElementById("button"),onclick = function() {
//     let name = document.getElementById ("myName").value;
//     let eng = document.getElementById ("eng").value;
//     let bangla = document.getElementById ("bangla").value;
//     let ict = document.getElementById ("ict").value;
//     let math = document.getElementById ("math").value;
//     let result = (eng + bangla + ict + math) / 4
//     console.log(`${name} Your Result is ${result}`)
// }

/**
 *  Maherab
 * eng bangla ict math 400
 * 400/4 avg
 * 40 less F
 * 40 - 49 C
 * 50 - 59 B
 * 60 - 69 A-
 * 70 - 79 A
 * 80 - 100 A+
 * 100 ++ invalid
 */

let name = prompt ("Enter your name")
let eng = parseInt (prompt ("Enter your English marks"))
let bangla = parseInt (prompt ("Enter your Bangla Marks"))
let ict = parseInt (prompt ("Enter your Ict Marks"))
let math = parseInt (prompt ("Enter your Math Marks"))

let result = (eng + ict + bangla + math) / 4

if (result > 100) {
    console.log("your marks is invalid!")
} else if(result >= 80 && result <=100){
    console.log (`${name} your grade is A+ ${result}`)
}
 
else if(result >= 70 && result <=79){
    console.log (`${name} your grade is A ${result}`)
}
else if(result >= 60 && result <=69){
    console.log (`${name} your grade is A- ${result}`)
}
else if(result >= 50 && result <=59){
    console.log (`${name} your grade is B ${result}`)
}
else if(result >= 40 && result <=49){
    console.log (`${name} your grade is C ${result}`)
}
else {
    console.log (`${name} your grade is F ${result}`)
}

