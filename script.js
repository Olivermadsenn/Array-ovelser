"use strict"

window.addEventListener("load", start);

function start(){
    const students =
}

// const navne = ["Harry", "Ron", "Hermione"];
// const hasNeville = navne.includes("Neville");
// const ronIndex = navne.indexOf("Ron");
// const drengene = navne.slice(0,2);
// const lilleRon = navne.indexOf("ron");

// console.log(navne);
// console.log(navne.length);
// console.log(navne.at(0));
// console.log(navne[1]);
// console.log(navne[2]);
// console.log(hasNeville);
// console.log(ronIndex);
// console.log(drengene);
// console.log(lilleRon);

// const harry ={
//     firstName: "Harry",
//     lastName: "Potter"
// }

// const ron ={
//     firstName: "Ron",
//     lastName: "Weasley"
// }

// const hermione = {
//     firstName: "Hermione",
//     lastName: "Granger"
// }

// const students = [harry, ron, hermione ];

// let student = students[0];
// console.log(`${student.firstName} ${student.lastName} is a student at Hogwarts`);

function addStudent(student){
    const list = document.querySelector("#students");
    list.insertAdjacentHTML("beforeend",
    `<li>${student.firstName} ${student.lastName}</li>`);
}

    addStudent(students[0]);
    addStudent(students[1]);
    addStudent(students[2]);