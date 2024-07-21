# **Food Battle App**

## 📖 Sobre

O **Food Battle App** é uma aplicação interativa que permite aos usuários comparar diferentes categorias de alimentos e bebidas. O objetivo é descobrir a opção favorita entre duas alternativas, até que reste apenas uma opção vencedora. O projeto é desenvolvido com React e utiliza roteamento para navegação entre categorias e disputas.

## 🚀 Funcionalidades

- **Seleção de Categoria**: Escolha entre várias categorias como cervejas, chocolates, bolos, salgadinhos e biscoitos.
- **Disputa de Opções**: Compare duas opções da categoria selecionada e escolha sua favorita.
- **Resultado Final**: Veja a opção vencedora após todas as rodadas de disputa.
- **Responsivo**: Design adaptativo para diferentes tamanhos de tela, fique à vontade para testar.

## 🛠 Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface.
- **React Router DOM**: Para gerenciamento das rotas e navegação entre páginas.
- **CSS Modules**: Para estilização dos componentes com escopo local.

## 🎯 Público-Alvo

Você é um criador de conteúdo que adora provocar debates sobre as maiores tendências alimentares? 🤔🍰🍩

Se sim, então o **FoodBattle** foi feito sob medida para você! 😎👌

### O que você vai encontrar aqui:

- **Comparações Épicas**: Croissant vs. Baguete, Picanha vs. Filet Mignon – você escolhe! 🥐🥖🍖
- **Interatividade Divertida**: Deixe seus seguidores decidirem qual é o melhor em batalhas de comida vibrantes e dinâmicas. 🎉
- **Visuais Imersivos**: Cards bonitinhos e imagens de dar água na boca que vão fazer seu conteúdo brilhar. 🌟🍕📸

O **FoodBattle** transforma debates gastronômicos em experiências visuais emocionantes, perfeitas para quem ama criar conteúdo envolvente e divertido! Então, prepare-se para trazer sabor e diversão para suas comparações alimentares! 🍔🥗✨

Vamos nessa? 🚀🍽️


## ✨ Adicionando Novas Categorias e Imagens
Se você deseja adicionar novas categorias e opções ao Food Battle, siga os passos abaixo:

### 1. Adicionar Nova Categoria
Atualizar o foodOptions:

- **1** No arquivo src/pages/FoodBattle.js, adicione sua nova categoria ao objeto foodOptions.
- **2** No arquivo src/pages/Home.js, adicione a nova categoria à lista categories.
- **3** Colocar Imagens no Diretório Público: Crie uma pasta para a nova categoria em public/images. O nome da pasta deve corresponder ao nome da nova categoria em minúsculas.
- **4** Adicione suas imagens à pasta. O nome dos arquivos deve ser o mesmo que os IDs definidos no foodOptions.
