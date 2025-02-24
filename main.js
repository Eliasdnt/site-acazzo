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
    