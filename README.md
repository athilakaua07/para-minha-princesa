# Uma cartinha para você ♡

Uma história romântica original, em português, feita com HTML, CSS e JavaScript. Não usa backend, bibliotecas, fontes remotas, rastreamento ou instalação de dependências.

## Personalizar pelo celular

1. Abra **script.js** no GitHub e toque no lápis para editar.
2. No início, em **💗 EDITE SOMENTE AQUI**, altere os campos de `CONFIG`.
3. Salve com **Commit changes**. Todos os textos da história, cartões, botões e mensagens ficam nessa configuração. Use `\n` para quebrar uma linha e `\n\n` para separar parágrafos; mantenha as aspas e vírgulas. Para aspas dentro de um texto, use `\"` ou aspas curvas “assim”.

### GIF

Envie seu GIF para `assets/` e mude apenas `gif: "nome-do-arquivo.gif"` em `CONFIG`. Também aceita PNG, JPG, WebP ou SVG. O GIF incluído é uma animação original da coelhinha; o SVG é a alternativa se o arquivo personalizado não carregar. Atualize `interface.gifDescricao` para descrever sua imagem. Com movimento reduzido ativado, a animação padrão usa o SVG estático. GIFs personalizados devem ser escolhidos com esse cuidado, pois a animação interna deles não pode ser pausada por CSS.

### Música

O arquivo `assets/musica.mp3` contém uma melodia instrumental curta e original de demonstração. Substitua por uma música que você tenha direito de usar ou envie outro arquivo para `assets/` e altere apenas `musica: "seu-arquivo.mp3"` em `CONFIG`. A música só toca após apertar **Nossa música**. O mesmo botão pausa. Se o arquivo faltar, a página continua funcionando e mostra uma mensagem discreta.

### Carta e fotos

Edite `textoCarta`, `nome` e `assinatura`. A carta aceita textos longos e fica totalmente escondida ao fechar. A pasta `assets/fotos/` está preparada para guardar fotos; nenhuma galeria é exibida por padrão.

## Publicar no GitHub Pages

Em **Settings → Pages → Build and deployment**, escolha **Deploy from a branch**, selecione a branch que contém estes arquivos e a pasta **/ (root)**. Salve. Quando a publicação terminar, o GitHub mostrará o endereço do site. Todos os caminhos são relativos e funcionam em subpastas de projetos.

## Abrir localmente

Abra `index.html` diretamente ou, com Python 3 instalado, execute na pasta do projeto:

```sh
python3 -m http.server 3000 --bind 0.0.0.0
```

Acesse `http://localhost:3000`. Não há build nem dependências. Para encerrar o servidor, pressione Ctrl+C.

## Arquivos

- `index.html`: estrutura e elementos acessíveis.
- `style.css`: visual, responsividade e animações; respeita `prefers-reduced-motion`.
- `script.js`: configuração, cartões, carta, player, efeitos e revelação ao rolar.
- `assets/meu-gif.gif`: coelhinha animada original, substituível.
- `assets/coelhinha.svg`: ilustração original estática e alternativa de imagem.
- `assets/musica.mp3`: melodia original de demonstração, substituível.
- `assets/fotos/`: espaço para suas fotos.

A mensagem final abre uma janela com corações e espaço para conversar; não envia nem armazena mensagens. Todos os controles funcionam por teclado; Escape fecha a janela final.
