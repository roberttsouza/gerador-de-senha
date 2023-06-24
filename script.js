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



    const forcaSenha = document.querySelector('.forcaSenha');

    const senhaForte = verificarSenhaForte(senha);

    if(senhaForte){
        forcaSenha.innerHTML = `<p class="forcaSenha" style="background: rgb(9, 180, 52); width: 150px; text-align: center;
        position: relative; left: 41%;  color: #fff; border-radius: 3px; margin-bottom: 5px;" >Senha Forte</p>`
        console.log('a senha e forte')
    }else{
        forcaSenha.innerHTML = `<p class="forcaSenha" style="background: red; width: 150px; text-align: center;
        position: relative; left: 41%; color: #fff; border-radius: 3px; margin-bottom: 5px;" >Senha Fraca</p>`
        console.log('a senha e fraca')
    }
}

// função para atualizar um tempo real o valor do comprimento da senha
function atualizarComprimento() {
    const comprimento = document.getElementById('rngComprimento').value;
    document.getElementById('ComprimentoAtual').textContent = comprimento;
  }


  // verificar se a senha é forte
  function verificarSenhaForte(senha){
    const possuiLetraMinuscula = /[a-z]/.test(senha);
    const possuiLetraMaiuscula = /[A-Z]/.test(senha);
    const possuiNumero = /[0-9]/.test(senha);
    const possuiCaractereEspecial = /[^a-zA-Z0-9]/.test(senha);

    return possuiLetraMinuscula && possuiLetraMaiuscula && possuiNumero && possuiCaractereEspecial;
  }