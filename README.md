BookNest

BookNest é uma plataforma digital open source que funciona como uma livraria moderna, oferecendo livros digitais gratuitos e pagos, além de possibilitar a compra de livros físicos. A plataforma também permite comentários, sugestões de livros e contato seguro via e-mail, tudo com design responsivo e funcionalidade PWA, podendo ser instalada como aplicativo móvel.

Funcionalidades

Catálogo de livros digitais e físicos:

Livros gratuitos e pagos.

Indicação se o livro está disponível digitalmente, fisicamente ou ambos.

Descrição do livro, autor e preço.

Comentários e sugestões:

Visitantes podem comentar sobre livros e sugerir novos títulos.

Comentários armazenados localmente no navegador.

Contato seguro:

Botão que abre o cliente de e-mail com o endereço infolearn8441@gmail.com sem expor o e-mail publicamente.

PWA (Progressive Web App):

Pode ser instalado como aplicativo em dispositivos móveis.

Funciona offline com cache de arquivos essenciais.

Design moderno e responsivo:

Compatível com desktops, tablets e smartphones.

Layout limpo, com navegação simples e intuitiva.

Estrutura de arquivos
booknest/
│
├─ index.html          # Página principal
├─ style.css           # Estilos CSS
├─ script.js           # Scripts JavaScript
├─ manifest.json       # Configurações PWA
├─ service-worker.js   # Service worker para cache e offline
├─ assets/
│   ├─ livros/         # Capas de livros
│   └─ logo.png        # Logo da plataforma

Como usar

Clone este repositório:

git clone https://github.com/seu-usuario/booknest.git


Abra o arquivo index.html no navegador para testar localmente.

Para instalar como PWA:

No Chrome/Edge: abra o site > clique no menu > "Instalar BookNest".

Para converter em APK (opcional):

Use ferramentas como PWABuilder ou Capacitor para gerar o APK a partir da versão PWA.

Tecnologias usadas

HTML5, CSS3, JavaScript

PWA (manifest.json + service worker)

Armazenamento local (localStorage) para comentários

Contato

Se você quiser entrar em contato, clique no botão "Fale conosco" dentro da plataforma. Isso abrirá seu cliente de e-mail diretamente para enviar uma mensagem para:
infolearn8441@gmail.com

Licença

Este projeto é open source e pode ser usado e modificado livremente.
