Para realizar os testes da build, basta clicar no botão build abaixo que o travis executará todos os processos.
----------------------------------------------------------------------------------------------
# poc-jasmine [![Build Status](https://travis-ci.org/jgilberto1/poc-jasmine.svg?branch=master)](https://travis-ci.org/jgilberto1/poc-jasmine)

<h1>Projeto<h1>
  <h3>O projeto consiste em criar e avaliar o funcionamento de uma calculadora testando suas operações.<h3>
  

<h1>Arquitetura do projeto<h1>

<h3>Configurando sua máquina<h3>

Necessário instalar:
* Npm: Gerenciador de pacotes Node
* Node for MacOs: linguagem de programação utilizada nos testes.
* Jasmine: Framework BDD de testes.
* Karma: Test Runner.
* Browserify: Framework conversor de chamadas require para o navegador(nesse projeto foi utilizado o mozila)

Clonando o repositório do git para execução dos testes
------------------------------------------------------

<h3>Selecionando o destino para o clone do projeto<h3>

Navegue no terminal até a pasta em que você achar mais apropriada para ser feito o clone do projeto.
ex.: cd/
cd projetos
Clonando o repositório

No terminal, digite o comando:
git clone https://github.com/conta/nomeprojeto.git
Como é possível ver, a estrutura do comando é "git clone [endereço do repositório] .

Feito isso, temos um clone do projeto para que possamos trabalhar e executar os testes automatizados localmente ou realizar modificações e/ou implementações.

Testes utilizando integração contínua
--------------------------------------
<h3>Travis<h3>

O Travis foi utilizado no projeto para a execução das builds  em integração continua. Ele é configurado através do arquivo .travis.Yml e executa os testes pré definidos a cada commit gerado pro github.

Passos para a execução do projeto
-------------------------------------

Na pasta raiz do projeto executar os comandos abaixo no terminal para suas determinadas funções:

  * npm run test-dev (Para executar os testes de forma continua;)
  * npm run test (Para execução dos testes uma unica vez;)



