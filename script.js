function gerarSenha(){
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const caracteresEspeciais = '!@#$%^&*()_+-={}[];\',.';

    const incluirLetrasMinusculas = document.querySelector("#chkLetrasMinusculas").checked;
    const incluirLetrasMaiusculas = document.querySelector("#chkLetrasMaiusculas").checked;
    const incluirNumeros = document.querySelector("#chkNumeros").checked;
    const incluirCaracteresEspeciais = document.querySelector("#chkCaracteresEspeciais").checked;
    const comprimentoSenha = document.querySelector("#rngComprimento").value;

    // Concatenar caracteres baseado nas opções selecionadas acima
    let caracteres = '';
    if(incluirLetrasMinusculas) caracteres += letrasMinusculas;
    if(incluirLetrasMaiusculas) caracteres += letrasMaiusculas;
    if(incluirNumeros) caracteres += numeros;
    if(incluirCaracteresEspeciais) caracteres += caracteresEspeciais;

    // Gerar senha aleatória
    let senha = '';
    for (let i = 0; i < comprimentoSenha; i++){
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    document.querySelector("#senhaGerada").value = senha;
}

// função para atualizar um tempo real o valor do comprimento da senha
function atualizarComprimento() {
    const comprimento = document.getElementById('rngComprimento').value;
    document.getElementById('ComprimentoAtual').textContent = comprimento;
  }