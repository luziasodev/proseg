const image = document.querySelector('.pic');
const altText = image.getAttribute('alt');
image.style.display = 'none'; // Oculta a imagem original
image.insertAdjacentHTML('afterend', '<span class="alt-content"></span>'); // Cria um elemento <span> após a imagem
const altContent = document.querySelector('.alt-content');
altContent.textContent = altText; // Define o conteúdo do <span> como o texto alternativo
