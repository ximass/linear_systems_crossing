$('#conferir').click(function () {
    let win = checkAllResults();
    if (win) {
        let modalWin = document.querySelector(".h-modal")
        modalWin.classList.remove("hidden")
    } else {
        alert("Resposta incorreta, tente novamente!")
    }
});

function checkAllResults() {
    const eq2 = document.getElementById('2').value;
    const eq3 = document.getElementById('3').value;
    const eq4 = document.getElementById('4').value;

    // const validEq1 = checkFirstResult(eq1);
    const validEq2 = checkSecondResult(eq2);
    const validEq3 = checkThirdResult(eq3);
    const validEq4 = checkFourthResult(eq4);

    return validEq2 && validEq3 && validEq4;
}

// function checkFirstResult(expression) {
//     expression = expression.replace(/\s/g, "");

//     const validForms = [
//         "0"
//     ];

//     return validForms.some(form => expression === form);
// }

function checkSecondResult(expression) {
    expression = expression.replace(/\s/g, "");

    const validForms = [
        "475"
    ];

    return validForms.some(form => expression === form);
}

function checkThirdResult(expression) {
    expression = expression.replace(/\s/g, "");

    const validForms = [
        "150"
    ];

    return validForms.some(form => expression === form);
}

function checkFourthResult(expression) {
    expression = expression.replace(/\s/g, "");

    const validForms = [
        "900"
    ];
    return validForms.some(form => expression === form);
}
