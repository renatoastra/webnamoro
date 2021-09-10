const nomeInput = document.querySelector('#validationCustom01');
const signoInput = document.querySelector('#validationCustom02');
const twitterInput = document.querySelector('#validationCustomUsername');
const cidadeInput = document.querySelector('#validationCustom03');
const cabeloInput = document.querySelector('#validationCustom04');
const nickLolInput = document.querySelector('#validationCustom05');
const botao = document.querySelector('#botaoSubmit')
const form = document.querySelector('.row g-3 needs-validation')
const checkBox = document.querySelector('#invalidCheck')


botao.addEventListener('click', (e) => {

    if (validaCampos(nomeInput.value, 'Nome') == false) {
        e.preventDefault();
        e.stopPropagation();
    }

    if (ValidateEmail(signoInput) == false) {
        e.preventDefault();
        e.stopPropagation();
    }

    if (validaCampos(cidadeInput.value, 'Cidade') == false) {
        e.preventDefault();
        e.stopPropagation();
    }
    if (validaTwitter() == false) {
        e.preventDefault();
        e.stopPropagation();
    }
    if (validaCampos(nickLolInput.value, 'Nick') == false) {
        e.preventDefault();
        e.stopPropagation();
    }

    if (checaBox() == false) {
        e.preventDefault();
        e.stopPropagation();
    }

})

function checaBox() {
    if (checkBox.checked) {
        return true
    } else {
        alert('Você precisa ser maior de idade, volte daqui alguns anos.')
        return false
    }
}

function validaCampos(campo, nomeCampo) {

    if (campo == null || campo == '') {
        alert(errorMessage(nomeCampo))
        return false
    }

    if (campo.length > 24) {
        alert(errorMessage(nomeCampo))
        return false
    }

    if (+campo) {
        alert(errorMessage(nomeCampo))
        return false
    }
    return true
}

function errorMessage(nomeCampo) {
    return "O  campo " + nomeCampo + " parece estar inválido, tente novamente."
}

function validaTwitter() {
    if (twitterInput.value == '' || twitterInput.value == null || twitterInput.value.length > 30) {
        alert(errorMessage('Twitter'));
        return false
    }
    return true
}


function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        return true;
    }
    else {
        alert("Você precisa inserir um e-mail válido");
        return false;
    }
}