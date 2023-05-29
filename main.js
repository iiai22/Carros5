// Array de imagens com nomes associados
const imagens = [
  { nome: 'BMW XM 02', url: 'bmw-xm-02.jpg' },
  { nome: 'Mercedes GTR', url: 'download.jpg' },
  { nome: 'Porsche 911', url: 'porsche.jpg' },
];

let imagemAtual = null;

// Função para exibir uma imagem aleatória
function exibirImagemAleatoria() {
  const inputValue = document.getElementById('inputNome').value.toLowerCase();

  // Verifica se o valor inserido corresponde ao nome original da imagem atual
  if (imagemAtual && inputValue === imagemAtual.nome.toLowerCase()) {
    // Seleciona uma nova imagem aleatória, exceto a imagem atual
    let novaImagem;
    do {
      novaImagem = imagens[Math.floor(Math.random() * imagens.length)];
    } while (novaImagem === imagemAtual);

    // Atualiza a imagem exibida
    const imgElement = document.getElementById('imagem');
    imgElement.src = novaImagem.url;
    imagemAtual = novaImagem;
  }
}

// Função para exibir uma imagem aleatória no início da aplicação
function exibirImagemInicial() {
  const imgElement = document.getElementById('imagem');

  // Seleciona uma imagem aleatória para exibir no início
  imagemAtual = imagens[Math.floor(Math.random() * imagens.length)];
  imgElement.src = imagemAtual.url;
}

// Chama a função para exibir uma imagem aleatória no início da aplicação
window.onload = function () {
  exibirImagemInicial();
};

// Adiciona um ouvinte de eventos de teclado para o campo de entrada
document
  .getElementById('inputNome')
  .addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
      // Verifica se a tecla pressionada é Enter (código 13)
      exibirImagemAleatoria();
    }
  });
