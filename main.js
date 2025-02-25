document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio tradicional
    
    const formData = new FormData(this);
    const url = 'https://script.google.com/macros/s/AKfycbyUk-Fau9fcv14kXLNXhjq44YSgb4fxcPqi3XuZJaXwlL3OfLngXibXAUGMu77apdZq/exec'; // URL do seu Web App publicado
    
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if(data.status === 'success') {
            // document.getElementById('message').innerHTML = `
            //     <div class="success">${data.message}</div>
            // `;
            this.reset(); // Limpa o formulário
            toastr.success(`${data.message}`);
        } else {
            throw new Error(data.message);
        }
    })
    .catch(error => {
        document.getElementById('message').innerHTML = `
            <div class="error">Erro: ${error.message}</div>
        `;
        toastr.error('Mensagem não Enviada! Devido a Problemas Internos. \n Entre em contato por acazzoacessoria@gmail.com');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[data-section]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop; // Obtém a posição superior da seção
            const sectionHeight = section.clientHeight; // Obtém a altura da seção
            const scrollY = window.scrollY; // Obtém a posição de rolagem vertical

            // Verifica se a seção está visível no viewport
            if (scrollY >= sectionTop - 180 && scrollY < sectionTop + sectionHeight) {
                section.classList.add('anima'); // Adiciona a classe 'anima' à seção visível
           } // } else {
            //     section.classList.remove('anima'); // Remove a classe 'anima' das seções não visíveis
            // }
        
        });
     });
 });


 function scrollSuave() {
    const linksInternos = document.querySelectorAll("a[href^='#']");
    console.log(linksInternos);

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href'); // Fixed typo in currentTarget
        console.log(href);
        const section = document.querySelector(href);

        if (section) { // Added a check if section exists
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                duration: 2500,
            });
        }
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection); // Added scrollToSection as event listener
    });
}

scrollSuave();
    

function Vermais() {
    const cards = document.querySelectorAll(".card-prod");
    const btn = document.getElementById("veja");
    
    btn.addEventListener("click", () => {
        const lastThreeCards = [...cards].slice(-2); // Seleciona os últimos 3 cards
        let isHidden = lastThreeCards.some(card => card.style.display === "none" || card.style.display === "");
    
        lastThreeCards.forEach(card => {
            card.style.display = isHidden ? "grid" : "none";
        });
    
        btn.innerText = isHidden ? "Veja Menos Produtos" : "Veja Mais Produtos";
    });
    
    

   
}
Vermais();