//seguir essa logica
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
        "y=180-w",
        "180-w=y",
        "-w+180=y",
        "y=-w+180",
    ];

    return validForms.some(form => expression === form);
}

function checkThirdEquation(expression) {
    expression = expression.replace(/\s/g, "");

    const validForms = [
        "z=250-x",
        "250-x=z",
        "-x+250=z",
        "z=-x+250",
    ];

    return validForms.some(form => expression === form);
}