$('input').blur(function () {
    validateRow(this);
});

$('#conferir').click(function () {
    console.log('conferiu');
});

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

        if (proximaLinha == 5)
        {
            $('#conferir').show();
        }
    }
}