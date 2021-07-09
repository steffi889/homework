const students = [
    { name: "Stefanny", age: 21 },
    { name: "Caesario", age: 21 },
    { name: "Risaldy", age: 22 },
    { name: "Jordy", age: 22 }
];
const displayTable = () => {
    students.forEach(({ name, age }) => {
        const tableview = document
            .getElementById("table")
            .getElementsByTagName("tbody")[0];

        tableview.insertRow().innerHTML = `<td>${name}</td><td>${age}</td>`;
    });
};

function reduce(acc, { age }) {
    return acc + age;
}

function average(students) {
    const total = students.reduce(reduce, 0);
    return total / students.length;
}

function calculateAge() {
    age = average(students);
    console.log(age);
}
console.log(average(students));
displayTable();

// const btnClick = () => {
//     const avg = average(students);
//     document.getElementById("avg").innerHTML = avg;
// };

// document.getElementById("button").addEventListener("click", btnClick);

// const wait = (time) => {
//     new promise((resolve) => {
//         setTimeout(resolve, time)
//     });
// }

// async function asyncFunc() {
//     console.log("Calculation Start");
//    await wait(2000)
//     .then(() => console.log("Second Calculation Start"));
//     wait(2000)
//     .then(() => console.log("Second Calculation End"));
//     wait(2000)
//     .then(() => console.log("Third Calculation Start"));
//     // wait(2000)
//     // .then(() => console.log(average(students)));
// }
// // asyncFunc();

// console.log(asyncFunc()); 