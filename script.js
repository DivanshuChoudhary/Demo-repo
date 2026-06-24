const button = document.getElementById("calculate-btn");

button.addEventListener("click", () => {

    const inputs = document.querySelectorAll(".mark-input");

    let total = 0;
    let isValid = true;

    inputs.forEach(input => {

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
    else if (percentage >= 33) {
        grade = "D";
    }
    else {
        grade = "Fail";
    }

    document.getElementById("percentage").textContent =
        `Percentage: ${percentage.toFixed(2)}%`;

    document.getElementById("grade").textContent =
        `Grade: ${grade}`;
});

let status = "";

if (percentage >= 33){
    status = "Pass";
} else {
    status = "Fail";
}

document.getElementById("grade").textContent =
    `Grade: ${grade}`;

    const statusElement = document.getElementById("status");

statusElement.textContent = `Status: ${status}`;

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