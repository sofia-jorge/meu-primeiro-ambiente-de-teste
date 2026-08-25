# 💜 Relatório de Testes de Software — PROZ

---

## 📚 Sobre o Projeto

Este repositório foi desenvolvido como parte da **Atividade Prática 1** da disciplina de **Qualidade de Software**, do **Curso Técnico em Desenvolvimento de Sistemas da PROZ Educação**.

A atividade teve como objetivo proporcionar uma experiência prática com conceitos fundamentais de **Qualidade de Software**, **planejamento de testes**, **rastreabilidade de requisitos**, **testes automatizados**, **virtualização em nuvem** e **containers Docker**.

Durante a prática, foi utilizado o **GitHub Codespaces** como ambiente de desenvolvimento e execução, permitindo trabalhar com um ambiente Linux hospedado na nuvem.

A aplicação desenvolvida consiste em uma página HTML simples contendo um título e um botão de login. Esses elementos foram utilizados como objeto para a realização dos testes automatizados.

---

# 🎯 1. Objetivos da Atividade

A atividade teve como principais objetivos:

* 📋 Criar uma **Matriz de Rastreabilidade** entre requisitos e casos de teste;
* 🧪 Elaborar e executar **testes automatizados**;
* ☁️ Utilizar o **GitHub Codespaces** como ambiente de desenvolvimento na nuvem;
* 🌐 Criar uma aplicação web simples para ser utilizada como objeto de teste;
* 🐳 Empacotar a aplicação utilizando **Docker**;
* 📦 Construir uma imagem Docker;
* 🚀 Executar a aplicação dentro de um container;
* ✅ Registrar os resultados dos testes realizados;
* 🔗 Relacionar os requisitos da aplicação aos seus respectivos casos de teste.

---

# ☁️ 2. Ambiente de Desenvolvimento

Para a realização da atividade foi utilizado o **GitHub Codespaces**, que disponibiliza um ambiente de desenvolvimento baseado em Linux diretamente na nuvem.

O ambiente permitiu criar os arquivos da aplicação, executar comandos pelo terminal, realizar os testes automatizados e construir o container Docker.

### 🛠️ Tecnologias e ferramentas utilizadas

| Tecnologia/Ferramenta | Utilização                                     |
| --------------------- | ---------------------------------------------- |
| 🐙 GitHub             | Armazenamento e versionamento do projeto       |
| ☁️ GitHub Codespaces  | Ambiente de desenvolvimento na nuvem           |
| 🐧 Linux              | Sistema operacional do ambiente virtual        |
| 🌐 HTML5              | Desenvolvimento da página utilizada nos testes |
| 🟨 JavaScript         | Desenvolvimento do script de testes            |
| 🐳 Docker             | Containerização da aplicação                   |
| 🟢 Node.js            | Execução do script de testes                   |
| 📋 Markdown           | Documentação do projeto                        |

---

# 📋 3. Planejamento dos Testes

Antes da execução dos testes, foram definidos os requisitos que deveriam ser verificados na aplicação.

Foram estabelecidos dois requisitos principais:

* **REQ-01:** A página deve apresentar o título correto.
* **REQ-02:** A página deve possuir um botão de login.

Cada requisito foi associado a um caso de teste específico.

Essa relação permite identificar **o que deve ser testado, como será testado e qual foi o resultado obtido**.

---

# 🔗 4. Matriz de Rastreabilidade

A Matriz de Rastreabilidade estabelece a relação entre os requisitos de software e os casos de teste responsáveis por verificar cada requisito.

| **ID do Requisito** | **Descrição do Requisito** | **ID do Caso de Teste** | **Status do Teste** |
| ------------------- | -------------------------- | ----------------------- | ------------------- |
| REQ-01              | Exibir título correto      | CT-01                   | 🟣 **PASSOU**       |
| REQ-02              | Conter botão de login      | CT-02                   | 🟣 **PASSOU**       |

### 📊 Resultado da Rastreabilidade

```text
REQ-01 ───────────────► CT-01 ───────────────► PASSOU
   │
   └── Exibir título correto


REQ-02 ───────────────► CT-02 ───────────────► PASSOU
   │
   └── Conter botão de login
```

A matriz demonstra que os dois requisitos definidos possuem casos de teste correspondentes e que ambos foram executados com sucesso.

---

# 🌐 5. Aplicação Desenvolvida

Como objeto de teste, foi desenvolvida uma página HTML simples denominada:

```text
index.html
```

A aplicação contém:

* Um título de página;
* Um título principal;
* Um botão de login.

### 🖥️ Estrutura da aplicação

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Portal de Qualidade PROZ</title>
</head>
<body>
    <h1>Bem-vindo ao Ambiente de Testes!</h1>
    <button id="login-btn">Entrar no Sistema</button>
</body>
</html>
```

A aplicação foi propositalmente mantida simples para que os testes pudessem se concentrar na verificação dos requisitos definidos.

---

# 🧪 6. Casos de Teste

## 🔹 CT-01 — Verificação do Título

**Requisito relacionado:** REQ-01

**Objetivo:** Verificar se o título da página corresponde ao título especificado no requisito.

### 🔍 Verificação realizada

O teste verifica se o arquivo `index.html` contém:

```html
<title>Portal de Qualidade PROZ</title>
```

### ✅ Resultado

```text
CT-01 (Verificação de Título) - PASSOU!
```

O requisito **REQ-01 foi atendido com sucesso**.

---

## 🔹 CT-02 — Verificação do Botão de Login

**Requisito relacionado:** REQ-02

**Objetivo:** Verificar se a aplicação possui o botão de login especificado.

### 🔍 Verificação realizada

O teste procura pelo identificador:

```html
id="login-btn"
```

presente no botão da aplicação.

### ✅ Resultado

```text
CT-02 (Verificação do Botão) - PASSOU!
```

O requisito **REQ-02 foi atendido com sucesso**.

---

# 🤖 7. Testes Automatizados

Para automatizar a verificação dos requisitos, foi criado o arquivo:

```text
test.js
```

O script utiliza recursos nativos do **Node.js**, principalmente os módulos:

```javascript
const fs = require('fs');
const assert = require('assert');
```

O módulo `fs` é utilizado para realizar a leitura do arquivo HTML, enquanto o módulo `assert` permite verificar automaticamente se as condições esperadas foram atendidas.

### ▶️ Execução dos testes

O teste foi executado pelo terminal do Codespace utilizando:

```bash
node test.js
```

### ✅ Resultado da execução

```text
Iniciando a execução dos testes automatizados...

✅ CT-01 (Verificação de Título) - PASSOU!
✅ CT-02 (Verificação do Botão) - PASSOU!

🎉 TODOS OS TESTES PASSARAM COM SUCESSO!
```

O resultado demonstra que os dois casos de teste foram executados e aprovados.

---

# 🐳 8. Containerização com Docker

Após a realização dos testes, a aplicação foi preparada para execução em um ambiente isolado utilizando **Docker**.

Para isso, foi criado um arquivo:

```text
Dockerfile
```

O Dockerfile define as instruções necessárias para criar a imagem da aplicação.

### 📄 Dockerfile

```dockerfile
FROM node:alpine

WORKDIR /app

RUN npm install -g http-server

COPY index.html .

EXPOSE 8080

CMD ["http-server", "-p", "8080"]
```

---

# 🔨 9. Construção da Imagem Docker

A imagem Docker foi construída utilizando o comando:

```bash
docker build -t minha-app-teste .
```

Nesse processo, o Docker utilizou o `Dockerfile` para criar uma imagem contendo o ambiente necessário para executar a aplicação.

A imagem recebeu o nome:

```text
minha-app-teste
```

---

# 🚀 10. Execução do Container

Após a construção da imagem, foi iniciado um container utilizando:

```bash
docker run -d -p 8080:8080 minha-app-teste
```

A porta **8080** foi utilizada para disponibilizar a aplicação através do servidor HTTP executado dentro do container.

O GitHub Codespaces permitiu acessar a aplicação por meio da porta disponibilizada.

### 🌐 Resultado

A aplicação pôde ser acessada no navegador apresentando:

```text
Bem-vindo ao Ambiente de Testes!

[ Entrar no Sistema ]
```

Isso demonstrou que a aplicação foi executada corretamente dentro do ambiente containerizado.

---

# 📊 11. Resultado Geral da Prática

| **Componente**                       | **Resultado**    |
| ------------------------------------ | ---------------- |
| 📋 Planejamento dos requisitos       | 🟣 **Concluído** |
| 🔗 Matriz de Rastreabilidade         | 🟣 **Concluído** |
| ☁️ Configuração do Codespace         | 🟣 **Concluído** |
| 🌐 Criação da aplicação HTML         | 🟣 **Concluído** |
| 🧪 Criação dos testes automatizados  | 🟣 **Concluído** |
| 🔹 Execução do CT-01                 | 🟣 **PASSOU**    |
| 🔹 Execução do CT-02                 | 🟣 **PASSOU**    |
| 🐳 Criação do Dockerfile             | 🟣 **Concluído** |
| 🔨 Construção da imagem Docker       | 🟣 **Concluído** |
| 🚀 Execução do container             | 🟣 **Concluído** |
| 🌐 Acesso à aplicação pelo navegador | 🟣 **Concluído** |
| 📋 Atualização da matriz             | 🟣 **Concluído** |

---

# 📈 12. Resumo dos Testes

| **Caso de Teste** | **Requisito** | **Verificação**  | **Resultado** |
| ----------------- | ------------- | ---------------- | ------------- |
| CT-01             | REQ-01        | Título da página | 🟢 **PASSOU** |
| CT-02             | REQ-02        | Botão de login   | 🟢 **PASSOU** |

### 🎯 Taxa de aprovação

```text
Total de testes:       2
Testes aprovados:      2
Testes reprovados:     0

Taxa de aprovação:    100%
```

---

# 🧩 13. Relação entre as Etapas

A prática permitiu observar o fluxo completo desde a definição dos requisitos até a execução da aplicação em um ambiente containerizado.

```text
📋 Requisitos
      ↓
🔗 Matriz de Rastreabilidade
      ↓
🌐 Aplicação HTML
      ↓
🧪 Casos de Teste
      ↓
🤖 Testes Automatizados
      ↓
✅ Validação dos Requisitos
      ↓
🐳 Dockerfile
      ↓
📦 Imagem Docker
      ↓
🚀 Container
      ↓
🌐 Aplicação em execução
```

Esse fluxo demonstra a importância de relacionar os requisitos com os testes realizados, permitindo verificar se aquilo que foi especificado realmente está presente na aplicação.

---

# 📝 14. Conclusão

A realização desta atividade possibilitou colocar em prática conceitos importantes relacionados à **Qualidade de Software e aos testes de sistemas**.

Inicialmente, foram definidos requisitos simples para a aplicação e criada uma **Matriz de Rastreabilidade**, relacionando cada requisito ao seu respectivo caso de teste.

Em seguida, o **GitHub Codespaces** foi utilizado como ambiente de desenvolvimento e execução na nuvem. Nesse ambiente foi desenvolvida uma página HTML utilizada como objeto de teste.

Por meio de um script em **JavaScript executado com Node.js**, foi possível automatizar a verificação dos requisitos definidos. Os dois casos de teste desenvolvidos, **CT-01 e CT-02**, foram executados com sucesso, apresentando uma taxa de aprovação de **100%**.

Posteriormente, a aplicação foi empacotada utilizando **Docker**, permitindo compreender na prática como uma aplicação pode ser executada dentro de um ambiente isolado e padronizado por meio de containers.

Dessa forma, a atividade permitiu relacionar conceitos teóricos de **requisitos, rastreabilidade, testes automatizados, computação em nuvem e containerização** com uma implementação prática.

---

# 🗂️ 15. Estrutura do Repositório

```text
📁 meu-primeiro-ambiente-de-teste
│
├── 📄 README.md
├── 🌐 index.html
├── 🧪 test.js
└── 🐳 Dockerfile
```

### 📄 Descrição dos arquivos

| **Arquivo**  | **Finalidade**                                            |
| ------------ | --------------------------------------------------------- |
| `README.md`  | Documentação, planejamento e Matriz de Rastreabilidade    |
| `index.html` | Aplicação utilizada como objeto de teste                  |
| `test.js`    | Script responsável pela execução dos testes automatizados |
| `Dockerfile` | Instruções para criação da imagem Docker                  |

---

## 💜 Resultado Final

A atividade foi concluída com sucesso, com os requisitos definidos devidamente relacionados aos seus casos de teste e ambos os testes apresentando resultado **PASSOU**.

```text
🟣 REQ-01 → CT-01 → PASSOU
🟣 REQ-02 → CT-02 → PASSOU

🎉 2/2 TESTES APROVADOS
📊 100% DE APROVAÇÃO
```

---

### 💜 Prática 1 — Qualidade de Software

**PROZ Educação • Curso Técnico em Desenvolvimento de Sistemas**

**Professor: Luiz Mesquita**
