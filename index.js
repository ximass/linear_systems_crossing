let LEVEL = 1
$('input').blur(function () {
    validateRow(this);
});

$("#avancar").click(function () {

})

$('#conferir').click(function () {
    let validateFirstRow = changeInputColor(1, checkFirstRow());
    let validateSecondRow = changeInputColor(2, checkSecondRow());
    let validateThirdRow = changeInputColor(3, checkThirdRow());
    let validateFourthRow = changeInputColor(4, checkFourthRow());

    checkIfWinGame()

});

function checkIfWinGame() {
    let validateFirstRow = checkFirstRow();
    let validateSecondRow = checkSecondRow();
    let validateThirdRow = checkThirdRow();
    let validateFourthRow = checkFourthRow();

    let win = validateFirstRow && validateSecondRow && validateThirdRow && validateFourthRow;

    if (win) {
        let modal = document.querySelector(".h-modal");
        modal.classList.remove("hidden")

        if (LEVEL = 1) {
            let level = document.querySelector(".first-level");
            level.classList.add("hidden")
        }

        LEVEL += 1
    }
}

function changeInputColor(linha, boolean) {
    var input01 = document.getElementById(linha + '_1').value;
    var input02 = document.getElementById(linha + '_2').value;
    var input03 = document.getElementById(linha + '_3').value;
    var input04 = document.getElementById(linha + '_4').value;

    if (boolean) {
        document.getElementById(linha + '_1').style.backgroundColor = '#90EE90';
        document.getElementById(linha + '_2').style.backgroundColor = '#90EE90';
        document.getElementById(linha + '_3').style.backgroundColor = '#90EE90';
        document.getElementById(linha + '_4').style.backgroundColor = '#90EE90';
    } else {
        document.getElementById(linha + '_1').style.backgroundColor = '#FF7F7F';
        document.getElementById(linha + '_2').style.backgroundColor = '#FF7F7F';
        document.getElementById(linha + '_3').style.backgroundColor = '#FF7F7F';
        document.getElementById(linha + '_4').style.backgroundColor = '#FF7F7F';
    }
}


function checkFirstRow() {
    /*
    entrada = 350 + 125 -> 475
    saida = x + w ou w + x
    */
    let input01 = document.getElementById('1_1').value;
    let input02 = document.getElementById('1_2').value;
    let input03 = document.getElementById('1_3').value;
    let input04 = document.getElementById('1_4').value;

    //entrada
    let carIn = parseInt(input01) + parseInt(input02);
    let validateCarIn = carIn == 475;

    let carOut = input03.toLowerCase() + input04.toLowerCase();
    let validateCarOut = carOut == 'wx' || carOut == 'xw';

    return validateCarIn && validateCarOut;
}

function checkSecondRow() {
    /*
        entrada x + y -> xy || yx
        saida = 255 + 400 = 655
    */
    let input01 = document.getElementById('2_1').value;
    let input02 = document.getElementById('2_2').value;
    let input03 = document.getElementById('2_3').value;
    let input04 = document.getElementById('2_4').value;

    //entrada
    let carIn = input01.toLowerCase() + input02.toLowerCase();
    let validateCarIn = carIn == 'xy' || carIn == 'yx';

    let carOut = parseInt(input03) + parseInt(input04);
    let validateCarOut = carOut == 655;

    return validateCarIn && validateCarOut;
}

function checkThirdRow() {
    /*
        entrada 800 + 250 = 1050
        saida = y + z = yz || zy
    */

    let input01 = document.getElementById('3_1').value;
    let input02 = document.getElementById('3_2').value;
    let input03 = document.getElementById('3_3').value;
    let input04 = document.getElementById('3_4').value;

    //entrada
    let carIn = parseInt(input01) + parseInt(input02);
    let validateCarIn = carIn == 1050;

    let carOut = input03.toLowerCase() + input04.toLowerCase();
    let validateCarOut = carOut == 'yz' || carOut == 'zy';

    return validateCarIn && validateCarOut;
}

function checkFourthRow() {
    /*
        entrada z + w = zw || wz
        saida 300 + 600 = 900
    */

    let input01 = document.getElementById('4_1').value;
    let input02 = document.getElementById('4_2').value;
    let input03 = document.getElementById('4_3').value;
    let input04 = document.getElementById('4_4').value;

    let carIn = input01.toLowerCase() + input02.toLowerCase();
    let validateCarIn = carIn == 'zw' || carIn == 'wz';

    let carOut = parseInt(input03) + parseInt(input04);
    let validateCarOut = carOut == 900;

    return validateCarIn && validateCarOut;
}


function validateRow(input) {
    rowId = $(input).closest('[linha]').attr('linha');

    var input01 = document.getElementById(rowId + '_1').value;
    var input02 = document.getElementById(rowId + '_2').value;
    var input03 = document.getElementById(rowId + '_3').value;
    var input04 = document.getElementById(rowId + '_4').value;

    if (input01 !== '' && input02 !== '' &&
        input03 !== '' && input04 !== '') {
        let proximaLinha = parseInt(rowId) + 1;

        let proximaImagem = $(`#img_${proximaLinha}`);
        proximaImagem.show();

        let proximosInputs = $(`[linha="${proximaLinha}"]`).find('input');

        if (proximosInputs.length != 0) {
            $.each(proximosInputs, function (index, value) {
                $(value).prop('disabled', false);
            });
        }

        if (proximaLinha == 5) {
            $('#conferir').show();
        }
    }
}