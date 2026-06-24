const calculateBtn = document.getElementById("calculate-btn");
const resetBtn = document.getElementById("reset-btn");

calculateBtn.addEventListener("click", () => {

    const inputs = document.querySelectorAll(".mark-input");

    let total = 0;
    let isValid = true;

    inputs.forEach((input) => {

        if (input.value === "") {
            isValid = false;
        } else {
            total += Number(input.value);
        }

    });

    if (!isValid) {
        alert("Please enter marks for all subjects!");
        return;
    }

    const percentage = total / inputs.length;

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
    else if (percentage >= 40) {
        grade = "D";
    }
    else {
        grade = "Fail";
    }

    let status = "";

    if (percentage >= 40) {
        status = "PASS";
    } else {
        status = "FAIL";
    }

    document.getElementById("percentage").textContent =
        `Percentage: ${percentage.toFixed(2)}%`;

    document.getElementById("grade").textContent =
        `Grade: ${grade}`;

    const statusElement = document.getElementById("status");

    statusElement.textContent =
        `Status: ${status}`;

    if (status === "PASS") {
        statusElement.style.color = "green";
    } else {
        statusElement.style.color = "red";
    }

    const card = document.querySelector(".card");

    if (grade === "A+") {
        card.style.borderColor = "gold";
    }
    else if (grade === "A") {
        card.style.borderColor = "green";
    }
    else if (grade === "B") {
        card.style.borderColor = "blue";
    }
    else if (grade === "C") {
        card.style.borderColor = "orange";
    }
    else {
        card.style.borderColor = "red";
    }

});

resetBtn.addEventListener("click", () => {

    const inputs = document.querySelectorAll(".mark-input");

    inputs.forEach((input) => {
        input.value = "";
    });

    document.getElementById("percentage").textContent =
        "Percentage: --";

    document.getElementById("grade").textContent =
        "Grade: --";

    document.getElementById("status").textContent =
        "Status: --";

    document.getElementById("status").style.color =
        "black";

    document.querySelector(".card").style.borderColor =
        "#ddd";

});