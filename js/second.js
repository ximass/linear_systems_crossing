$('#conferir').click(function () {
    let win = checkAllEquations();
    if (win) {
        let hmodal = document.querySelector(".h-modal")
        hmodal.classList.remove("hidden")
    } else {
        let pageTitle = document.querySelector(".page-title")
        pageTitle.innerText = "Não é bem isso! Falta algo"
    }
});


$('#check-question').click(function () {
    checkAnwser()
});

function shuffleOptions() {
    const question = document.querySelector('.question');

    const options = question.querySelectorAll('.option');

    const optionsArray = Array.from(options);

    optionsArray.sort(() => Math.random() - 0.5);

    options.forEach(option => option.remove());

    optionsArray.forEach(option => question.appendChild(option));
}

function checkAnwser() {
    let radioButton = document.querySelector(".anwser-4")
    if (!radioButton.checked) {
        shuffleOptions()
        alert("Resposta incorreta, tente novamente!")
    } else {
        eraseModal()
    }
}

function eraseModal() {
    let classContent = document.querySelector(".question")
    let btnResponder = document.querySelector("#check-question")
    let avancar = document.querySelector("#avancar")
    let title = document.querySelectorAll(".modal-title")


    classContent.classList.add("hidden")
    btnResponder.classList.add("hidden")
    avancar.classList.remove("hidden")

    title[0].innerText = "Parabéns, avance para o próximo nível"
}


function checkAllEquations() {
    const eq1 = document.getElementById('1').value;
    const eq2 = document.getElementById('2').value;
    const eq3 = document.getElementById('3').value;
    const eq4 = document.getElementById('4').value;

    const validEq1 = checkFirstEquation(eq1);
    const validEq2 = checkSecondEquation(eq2);
    const validEq3 = checkThirdEquation(eq3);
    const validEq4 = checkFourthEquation(eq4);

    return validEq1 && validEq2 && validEq3 && validEq4;
}
function checkFirstEquation(expression) {
    expression = expression.replace(/\s/g, "");

    const validForms = [
        "x=475-w",
        "475-w=x",
        "-w+475=x",
        "x=-w+475",
    ];

    return validForms.some(form => expression === form);
}

function checkSecondEquation(expression) {
    expression = expression.replace(/\s/g, "");

    const validForms = [
        "y=150+w",
        "150+w=y",
        "w+150=y",
        "+w+150=y",
        "y=+w+150",
    ];

    return validForms.some(form => expression === form);
}

function checkThirdEquation(expression) {
    expression = expression.replace(/\s/g, "");

    const validForms = [
        "z=900-w",
        "900-w=z",
        "-w+900=z",
        "z=-w+900",
    ];

    return validForms.some(form => expression === form);
}

function checkFourthEquation(expression) {
    expression = expression.replace(/\s/g, "");

    const validForms = [
        "900=900"
    ];
    return validForms.some(form => expression === form);
}
