function verificarCPF() {
    let cpf = document.getElementById('cpf').value.replace(/\D/g, '');
    
    if (cpf.length !== 11 || cpf.match(/(\d)\1{10}/)) {
        document.getElementById('aviso').innerText = 'CPF inválido';
        return;
    }

    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = 11 - (sum % 11);
    let digit1 = remainder > 9 ? 0 : remainder;

    if (parseInt(cpf.charAt(9)) !== digit1) {
        document.getElementById('aviso').innerText = 'CPF inválido';
        return;
    }

    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = 11 - (sum % 11);
    let digit2 = remainder > 9 ? 0 : remainder;

    if (parseInt(cpf.charAt(10)) !== digit2) {
        document.getElementById('aviso').innerText = 'CPF inválido';
        return;
    }

    document.getElementById('aviso').innerText = 'CPF válido';
}
