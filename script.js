function gerarSenha() {
    const palavras = document.getElementById('palavras').value.split(',').filter(w => w.trim() !== '');
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const caracteresEspeciais = '!@#$%^&*()_+-={}[];\',.';

    // Processar palavras e gerar parte aleatória
    let partesSenha = [...palavras];
    const comprimentoSenha = document.querySelector("#rngComprimento").value;
    const comprimentoRestante = Math.max(comprimentoSenha - partesSenha.join('').length, 0);

    const incluirLetrasMinusculas = document.querySelector("#chkLetrasMinusculas").checked;
    const incluirLetrasMaiusculas = document.querySelector("#chkLetrasMaiusculas").checked;
    const incluirNumeros = document.querySelector("#chkNumeros").checked;
    const incluirCaracteresEspeciais = document.querySelector("#chkCaracteresEspeciais").checked;

    // Concatenar caracteres baseado nas opções selecionadas acima
    let caracteres = '';
    if (incluirLetrasMinusculas) caracteres += letrasMinusculas;
    if (incluirLetrasMaiusculas) caracteres += letrasMaiusculas;
    if (incluirNumeros) caracteres += numeros;
    if (incluirCaracteresEspeciais) caracteres += caracteresEspeciais;

    // Combinar palavras com caracteres aleatórios
    let senha = partesSenha.join('');
    
    // Gerar parte aleatória para preencher o comprimento restante
    if (caracteres.length > 0) {
        for (let i = 0; i < comprimentoRestante; i++) {
            const indice = Math.floor(Math.random() * caracteres.length);
            senha += caracteres[indice];
        }
    } else {
        alert('Selecione pelo menos um tipo de caractere!');
        return;
    }

    document.querySelector("#senhaGerada").value = senha;
    atualizarForcaSenha(senha); // Atualizar a barra de força
}

// Função para copiar a senha
function copiarSenha() {
    const senha = document.getElementById('senhaGerada');
    senha.select();
    senha.setSelectionRange(0, 99999);
    
    try {
        navigator.clipboard.writeText(senha.value);
        const btn = document.querySelector('.copy-btn');
        btn.innerHTML = '<i class="fas fa-check"></i>';
        btn.style.background = '#28a745';
        setTimeout(() => {
            btn.innerHTML = '<i class="far fa-copy"></i>';
            btn.style.background = 'var(--slider-color)';
        }, 2000);
    } catch (err) {
        console.error('Falha ao copiar:', err);
    }
}

// Função para atualizar o comprimento
function atualizarComprimento() {
    const comprimento = document.getElementById('rngComprimento').value;
    document.getElementById('ComprimentoAtual').textContent = comprimento;
}


// Atualizar a barra de força da senha
function atualizarForcaSenha(senha) {
    const bar = document.querySelector('.strength-bar');
    let strength = 0;
    
    // Critérios de força
    if (senha.length >= 8) strength += 25;
    if (senha.length >= 12) strength += 15;
    if (/[A-Z]/.test(senha)) strength += 20;
    if (/[a-z]/.test(senha)) strength += 15;
    if (/[0-9]/.test(senha)) strength += 15;
    if (/[^A-Za-z0-9]/.test(senha)) strength += 20;

    // Limitar força máxima a 100%
    strength = Math.min(strength, 100);
    
    // Atualizar aparência da barra
    bar.style.width = strength + '%';
    
    // Definir cores com base na força
    if (strength < 40) {
        bar.style.backgroundColor = '#ff4444';
    } else if (strength < 70) {
        bar.style.backgroundColor = '#ffc107';
    } else {
        bar.style.backgroundColor = '#28a745';
    }
}
