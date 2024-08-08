// Seleciona o elemento com o id 'text-texto'
var novo = document.querySelector(".text-texto");
var novoTitle = document.querySelector(".text-titulo");

// Função para carregar as configurações salvas
function carregarConfiguracoes() {
    const corTitulo = localStorage.getItem('corTitulo');
    const corTexto = localStorage.getItem('corTexto');
    const tamanhoTitulo = localStorage.getItem('tamanhoTitulo');
    const tamanhoTexto = localStorage.getItem('tamanhoTexto');
    const corFundo = localStorage.getItem('corFundo');
    const imagemFundo = localStorage.getItem('imagemFundo');
    const fonteTitulo = localStorage.getItem('fonteTitulo');
    const fonteTexto = localStorage.getItem('fonteTexto');

    if (corTexto) novo.style.color = corTexto;
    if (corTitulo) novoTitle.style.color = corTitulo;
    
    if (tamanhoTexto) novo.style.fontSize = tamanhoTexto;
    if (tamanhoTitulo) novoTitle.style.fontSize = tamanhoTitulo;

    if (corFundo) document.body.style.backgroundColor = corFundo;
    if (imagemFundo) {
        document.body.style.backgroundImage = `url(${imagemFundo})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
    }
    if (fonteTexto) novo.style.fontFamily = fonteTexto;
    if (fonteTitulo) novoTitle.style.fontFamily = fonteTitulo;
    
}

// Função para mudar a cor do texto e salvar no localStorage
function mudarCor(cor) {
    novo.style.color = cor;
    
    localStorage.setItem('corTexto', cor);
}

// Função para mudar a cor do titulo e salvar no localStorage
function mudarCorTitulo(cor) {
    novoTitle.style.color = cor;
    
    localStorage.setItem('corTitulo', cor);
}


// Função para mudar o tamanho do texto e salvar no localStorage
function tamanhos(tamanho) {
    novo.style.fontSize = tamanho + "px";
    
    localStorage.setItem('tamanhoTexto', tamanho + "px");
}

// Função para mudar o tamanho do titulo e salvar no localStorage
function tamanhosTitulo(tamanho) {
    novoTitle.style.fontSize = tamanho + "px";
    
    localStorage.setItem('tamanhoTitulo', tamanho + "px");
}

// Função para mudar a cor de fundo do body e salvar no localStorage
function bGround(cor) {
    document.body.style.backgroundColor = cor;
    document.body.style.backgroundImage = 'none';
    
    localStorage.setItem('corFundo', cor);
}

// Função para mudar a fonte do texto e salvar no localStorage
function fontF(letra) {
    novo.style.fontFamily = letra;
    
    localStorage.setItem('fonteTexto', letra);
}

// Função para mudar a fonte do texto e salvar no localStorage
function fontT(letra) {
    novoTitle.style.fontFamily = letra;
    
    localStorage.setItem('fonteTitulo', letra);
}

// Função para mudar a imagem de fundo do body e salvar no localStorage
function imgGround(opcao) {
    document.body.style.backgroundImage = `url(${opcao})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    localStorage.setItem('imagemFundo', opcao);
}

// Função para restaurar a cor de fundo original e salvar no localStorage
function imgPadrao(cor) {
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = cor;
    localStorage.setItem('imagemFundo', ''); // Limpa a configuração da imagem de fundo
    localStorage.setItem('corFundo', cor);
}

// Carregar as configurações salvas quando a página é carregada
document.addEventListener('DOMContentLoaded', carregarConfiguracoes);


// Função para restaurar as configurações padrão
function restaurarPadrao() {
    
    localStorage.clear();// Limpa as configurações no localStorage


    novo.style.color = ''; // Remove a cor do texto
    novoTitle.style.color = ''; // Remove a cor do título

    novo.style.fontSize = ''; // Remove o tamanho do texto
    novoTitle.style.fontSize = ''; // Remove o tamanho do título

    document.body.style.backgroundColor = ''; // Remove a cor de fundo
    document.body.style.backgroundImage = ''; // Remove a imagem de fundo
    document.body.style.backgroundSize = ''; // Remove o tamanho da imagem de fundo
    document.body.style.backgroundRepeat = ''; // Remove a repetição da imagem de fundo

    novo.style.fontFamily = ''; // Remove a fonte do texto
    novoTitle.style.fontFamily = ''; // Remove a fonte do título
}