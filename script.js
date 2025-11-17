// Livros exemplo
const livros = [
    {titulo:"JavaScript Básico", autor:"R. Gustavo", preco:"Gratuito", digital:true, fisico:false, capa:"assets/livros/livro1.jpg"},
    {titulo:"Node.js Avançado", autor:"R. Gustavo", preco:"25 USD", digital:true, fisico:true, capa:"assets/livros/livro2.jpg"},
    {titulo:"CSS Moderno", autor:"R. Gustavo", preco:"Gratuito", digital:true, fisico:true, capa:"assets/livros/livro1.jpg"},
    {titulo:"React do Zero", autor:"R. Gustavo", preco:"30 USD", digital:true, fisico:true, capa:"assets/livros/livro2.jpg"}
];

// Exibir livros
const container = document.querySelector('.livros-container');
livros.forEach(livro => {
    const card = document.createElement('div');
    card.className = 'livro-card';
    card.innerHTML = `
        <img src="${livro.capa}" alt="${livro.titulo}">
        <h3>${livro.titulo}</h3>
        <p>Autor: ${livro.autor}</p>
        <p>Preço: ${livro.preco}</p>
        <p>${livro.digital ? "Digital" : ""} ${livro.fisico ? "| Físico" : ""}</p>
    `;
    container.appendChild(card);
});

// Comentários
const comentariosContainer = document.querySelector('.comentarios-container');
const btnEnviarComentario = document.getElementById('btnEnviarComentario');

btnEnviarComentario.addEventListener('click', () => {
    const txt = document.getElementById('novoComentario').value;
    if(txt.trim() !== ""){
        const p = document.createElement('p');
        p.textContent = txt;
        comentariosContainer.appendChild(p);
        document.getElementById('novoComentario').value = "";
        // opcional: armazenar localStorage
        let comentarios = JSON.parse(localStorage.getItem('comentarios') || "[]");
        comentarios.push(txt);
        localStorage.setItem('comentarios', JSON.stringify(comentarios));
    }
});

// Carregar comentários do localStorage
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

// PWA
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log("Service Worker registrado"))
    .catch(err => console.log("Service Worker erro:", err));
}
