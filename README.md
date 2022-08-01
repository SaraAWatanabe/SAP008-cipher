# Cifra de César

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto e Objetivos](#2-resumo-do-projeto)
* [3. Definição do produto](#3-definição-do-produto)
* [4. Funcionalidades da interface](#4-funcionalidade-da-interface)
* [5. Etapas de produção](#5-etapas-de-produção)

***

## 1. Prefácio

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.


## 2. Resumo do projeto e Objetivos

O objetivo desde projeto é criar uma aplicação web, na qual a pessoa usuária
poderá cifrar e decifrar um texto indicando a chave de deslocamento (_offset_).
A construção da aplicação será feita a partir de um boilerplate disponibilizado
pela Laboratória, contendo uma estrutura de arquivos como ponto de partida, assim
como toda a configuração de dependências e testes. O projeto será elaborado 
utilizando somente HTML, CSS e Javascript como ferramentas.


## 3. Definição do produto.

* Quem são os principais usuário do produto?

Este produto é destinado ao público geral, interessado em criptografar palavras e/ou mensagens importantes.

* Quais são os objetivos do usuário em relação com o produto?

O usuário tem como objetivo criptofrafar palavras e/ou mensagens importantes.

* Como você acredita que o produto está resolvendo os problemas do usuário?

O produto é capaz de criptografar palavras e/ou mensagens importantes.


## 4. Funcionalidades da interface

A interface deverá permitir ao usuário:

* Eleger um _offset_ indicando quantas posições de deslocamento de caracteres
(letras maiúsculas e minúsculas, e alguns caracteres especiais)quer que a 
cifra utilize.
* Inserir uma mensagem (texto) para ser cifrada.
* Ver o resultado da mensagem cifrada.
* Inserir uma mensagem (texto) para ser decifrada.
* Ver o resultado da mensagem decifrada.


## 5.  Etapas de produção e testes

O projeto foi desenvolvido ao longo de 3 sprints de trabalho, totalizando 
aproximadamente 3 semanas. 




