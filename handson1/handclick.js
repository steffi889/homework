const students = [
    { name: "Stefanny", age: 21 },
    { name: "Caesario", age: 21 },
    { name: "Risaldy", age: 22 },
    { name: "Jordy", age: 22 }
];

function reduce(acc, { age }) {
    return acc + age;
}

function average(students) {
    const total = students.reduce(reduce, 0);
    return total / students.length;
}

const displayTable = () => {
    students.forEach(({ name, age }) => {
        const tableview = document
            .getElementById("table")
            .getElementsByTagName("tbody")[0];

        tableview.insertRow().innerHTML = `<td>${name}</td><td>${age}</td>`;
    });
};

const btnClick = () => {
    const avg = average(students);
    document.getElementById("avg").innerHTML = avg;
};
document.getElementById("button").addEventListener("click", btnClick);

console.log(average(students));
displayTable();