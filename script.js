// Livros exemplo (mais de 20)
const livros = [
    {titulo:"JavaScript Básico", autor:"R. Gustavo", preco:"Gratuito", digital:true, fisico:false, capa:"assets/livros/livro1.jpg", linkDownload:"assets/livros/pdf/js_basico.pdf"},
    {titulo:"Node.js Avançado", autor:"R. Gustavo", preco:"25 USD", digital:true, fisico:true, capa:"assets/livros/livro2.jpg"},
    {titulo:"CSS Moderno", autor:"R. Gustavo", preco:"Gratuito", digital:true, fisico:true, capa:"assets/livros/livro3.jpg", linkDownload:"assets/livros/pdf/css_moderno.pdf"},
    {titulo:"React do Zero", autor:"R. Gustavo", preco:"30 USD", digital:true, fisico:true, capa:"assets/livros/livro4.jpg"},
    {titulo:"Python para Iniciantes", autor:"R. Gustavo", preco:"Gratuito", digital:true, fisico:false, capa:"assets/livros/livro5.jpg", linkDownload:"assets/livros/pdf/python.pdf"},
    {titulo:"Inteligência Artificial", autor:"R. Gustavo", preco:"40 USD", digital:true, fisico:true, capa:"assets/livros/livro6.jpg"},
    {titulo:"HTML5 Essencial", autor:"R. Gustavo", preco:"Gratuito", digital:true, fisico:false, capa:"assets/livros/livro7.jpg", linkDownload:"assets/livros/pdf/html5.pdf"},
    {titulo:"Vue.js Prático", autor:"R. Gustavo", preco:"35 USD", digital:true, fisico:true, capa:"assets/livros/livro8.jpg"},
    {titulo:"Machine Learning", autor:"R. Gustavo", preco:"50 USD", digital:true, fisico:true, capa:"assets/livros/livro9.jpg"},
    {titulo:"Banco de Dados MySQL", autor:"R. Gustavo", preco:"Gratuito", digital:true, fisico:false, capa:"assets/livros/livro10.jpg", linkDownload:"assets/livros/pdf/mysql.pdf"},
    {titulo:"Git e GitHub", autor:"R. Gustavo", preco:"Gratuito", digital:true, fisico:false, capa:"assets/livros/livro11.jpg", linkDownload:"assets/livros/pdf/git.pdf"},
    {titulo:"Docker Básico", autor:"R. Gustavo", preco:"30 USD", digital:true, fisico:true, capa:"assets/livros/livro12.jpg"},
    {titulo:"Kubernetes Avançado", autor:"R. Gustavo", preco:"45 USD", digital:true, fisico:true, capa:"assets/livros/livro13.jpg"},
    {titulo:"Segurança em Redes", autor:"R. Gustavo", preco:"Gratuito", digital:true, fisico:false, capa:"assets/livros/livro14.jpg", linkDownload:"assets/livros/pdf/seguranca.pdf"},
    {titulo:"Programação Funcional", autor:"R. Gustavo", preco:"25 USD", digital:true, fisico:true, capa:"assets/livros/livro15.jpg"},
    {titulo:"Design de Interfaces", autor:"R. Gustavo", preco:"Gratuito", digital:true, fisico:false, capa:"assets/livros/livro16.jpg", linkDownload:"assets/livros/pdf/design.pdf"},
    {titulo:"UX/UI Avançado", autor:"R. Gustavo", preco:"40 USD", digital:true, fisico:true, capa:"assets/livros/livro17.jpg"},
    {titulo:"Marketing Digital", autor:"R. Gustavo", preco:"30 USD", digital:true, fisico:true, capa:"assets/livros/livro18.jpg"},
    {titulo:"Inglês Corporativo", autor:"R. Gustavo", preco:"Gratuito", digital:true, fisico:false, capa:"assets/livros/livro19.jpg", linkDownload:"assets/livros/pdf/ingles.pdf"},
    {titulo:"Arduino do Zero", autor:"R. Gustavo", preco:"25 USD", digital:true, fisico:true, capa:"assets/livros/livro20.jpg"},
    {titulo:"Realidade Virtual", autor:"R. Gustavo", preco:"Gratuito", digital:true, fisico:false, capa:"assets/livros/livro21.jpg", linkDownload:"assets/livros/pdf/vr.pdf"}
];

// Divs separadas
const containerGratis = document.getElementById('livros-gratis');
const containerPagos = document.getElementById('livros-pagos');

// Função para criar cards
livros.forEach(livro => {
    const card = document.createElement('div');
    card.className = 'livro-card';
    let buttonHTML = '';

    if(livro.preco.toLowerCase() === "gratuito"){
        buttonHTML = `<a href="${livro.linkDownload}" download><button>Download</button></a>`;
    } else {
        buttonHTML = `<button onclick="window.location.href='mailto:infolearn8441@gmail.com?subject=Compra ${encodeURIComponent(livro.titulo)}'">Comprar / Contato</button>`;
    }

    card.innerHTML = `
        <img src="${livro.capa}" alt="${livro.titulo}">
        <h3>${livro.titulo}</h3>
        <p>Autor: ${livro.autor}</p>
        <p>${livro.digital ? "Digital" : ""} ${livro.fisico ? "| Físico" : ""}</p>
        ${buttonHTML}
    `;

    if(livro.preco.toLowerCase() === "gratuito"){
        containerGratis.appendChild(card);
    } else {
        containerPagos.appendChild(card);
    }
});

// Comentários (mantido)
const comentariosContainer = document.querySelector('.comentarios-container');
const btnEnviarComentario = document.getElementById('btnEnviarComentario');

btnEnviarComentario.addEventListener('click', () => {
    const txt = document.getElementById('novoComentario').value;
    if(txt.trim() !== ""){
        const p = document.createElement('p');
        p.textContent = txt;
        comentariosContainer.appendChild(p);
        document.getElementById('novoComentario').value = "";
        let comentarios = JSON.parse(localStorage.getItem('comentarios') || "[]");
        comentarios.push(txt);
        localStorage.setItem('comentarios', JSON.stringify(comentarios));
    }
});

const oldComentarios = JSON.parse(localStorage.getItem('comentarios') || "[]");
oldComentarios.forEach(c => {
    const p = document.createElement('p');
    p.textContent = c;
    comentariosContainer.appendChild(p);
});

// Botão de e-mail seguro
document.getElementById('btnEmail').addEventListener('click', () => {
    const email = "infolearn8441@gmail.com";
    window.location.href = `mailto:${email}?subject=Contato%20BookNest`;
});
