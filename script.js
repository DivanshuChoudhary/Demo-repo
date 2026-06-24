const marks = document.querySelectorAll(".mark");

let total = 0;

marks.forEach(mark => {
    total += Number(mark.textContent);
});

const percentage = total / marks.length;

let grade = "";

if (percentage >= 90) {
    grade = "A+";
}
else if (percentage >= 80) {
    grade = "A";
}
else if (percentage >= 70) {
    grade = "B";
}
else if (percentage >= 60) {
    grade = "C";
}
else {
    grade = "Fail";
}

document.getElementById("percentage").textContent =
    `Percentage: ${percentage.toFixed(2)}%`;

document.getElementById("grade").textContent =
    `Grade: ${grade}`;