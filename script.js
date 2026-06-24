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
    else if (percentage >= 40) {
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