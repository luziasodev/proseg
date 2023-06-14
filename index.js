window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.loader').style.display='none';
    document.querySelector('.homepage').style.display='block';
  }, 8000);
})


function counterAbout() {
    const elementsNumbersAbout = document.querySelectorAll('.stats span');
    elementsNumbersAbout.forEach(element => {
      counterElement(element);
    });
  }
  
function counterElement(element) {
    if (element) {
      const number = Number(element.innerText);
      element.innerText = '';
      const time = 3000 / number;
  
      for (let counter = 0; counter <= number; counter++) {
        setTimeout(() => {
          element.innerText = String(counter);
        }, counter * time);
      }
    }
  }
  
  // Selecione a seção que você deseja observar
  const secaoObservada = document.querySelector('.container-sobre-anos');
  function observeSection() {
    // Crie uma instância do Intersection Observer
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          counterAbout();
          observer.disconnect();
        }
      });
    });
  
    // Observe a seção
    if (secaoObservada) {
      observer.observe(secaoObservada);
    }
  }

  observeSection()


const images = document.querySelectorAll('.pic img');
images.forEach(image => {
    const altText = image.getAttribute('alt');
    if (altText) {
        image.insertAdjacentHTML('afterend', `<span class="alt-content">${altText}</span>`);
    }
})

let ultimaCategoria = '';

const projetos = document.querySelectorAll('.pic');
const categorias = document.querySelectorAll('.categoria-projetos');
categorias.forEach(categoria => {
    categoria.addEventListener('click', ev => {
        mostrarprojetos(ev.currentTarget.innerText)
    })
})


function mostrarprojetos(categoria) {
    if(categoria === ultimaCategoria) {
        projetos.forEach(projeto => {
            projeto.classList.remove('show')
        })
        ultimaCategoria = '';
        return
    }

    if (categoria === "todos") {
        projetos.forEach(projeto => {
            projeto.classList.add('show')
        })
    } else {
        projetos.forEach(projeto => {
            if (projeto.classList.contains(categoria)) {
                projeto.classList.add('show')
            } else {
                projeto.classList.remove('show')
            }
        })
    }
    ultimaCategoria = categoria;
}

