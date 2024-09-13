document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#switch-button button');
    const img = document.querySelector('#profile img');

    // Define o tamanho e outros estilos das imagens
    const imageStyle = {
        width: '112px',
        height: '112px',
        textAlign: 'center',
        marginTop: '-38px'
    };

    // Função para alternar o modo
    function toggleMode() {
        const html = document.documentElement;
        html.classList.toggle('light');
        updateImage(); // Atualiza a imagem após alternar o modo
    }

    // Função para atualizar a imagem de acordo com o modo
    function updateImage() {
        const html = document.documentElement;
        if (html.classList.contains('light')) {
            img.setAttribute('src', './assets/rafaphoto2.png'); // Modo claro
        } else {
            img.setAttribute('src', './assets/rafaphoto.png'); // Modo escuro
        }

        // Aplica o estilo da imagem
        img.style.width = imageStyle.width;
        img.style.height = imageStyle.height;
        img.style.textAlign = imageStyle.textAlign;
        img.style.marginTop = imageStyle.marginTop;
    }

    // Adiciona o evento de clique ao botão
    button.addEventListener('click', toggleMode);

    // Garante que a imagem inicial esteja correta com base no modo atual
    updateImage();
});

