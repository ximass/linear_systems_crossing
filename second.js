//seguir essa logica
function checkFirstEquation(expression) {
    expression = expression.replace(/\s/g, "");

    const validForms = [
        "-x=-w+475",
        "x=475-w",
        "475-w=x",
        "-w+475=x",
        "x=-w+475",
    ];

    return validForms.some(form => expression === form);
}
