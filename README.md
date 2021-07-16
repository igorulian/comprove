

<h1 align="center">
     <a href="#" alt="site do ecoleta"> Comprove </a>
</h1>

<h3 align="center">
    Aplicativo para guardar, organizar e categorizar seus comprovantes.
</h3>

<p align="center">
     <a href="./README-en.md" alt="Readme english version"> English Version 🇺🇸 </a>
</p>

## 💻 Sobre o projeto

No app você pode tirar foto, enviar dos seus arquivos e até mesmo compartilhar de otros aplicativos seus comprovantes.
Dentro dele você pode categorizar o comprovante por data (caso a data que você está enviando não seja a mesma)
e categoria (que são organizadas por cores e nomes).

#### 🗃️ Categorias:
Na pagia de categorias você pode criar, excluir, editar e ver todos os comprovantes pertencentes a tal categoria.

#### 📄 Comprovantes:
Os comprovantes podem ser encontrados organizados por data, na aba 'Comprovantes'.
Na mesma pode-se editar, excluir e até mesmo compartilhar o comprovante para outro aplicativo (como whatsapp)


---
## 🎨 Layout

<p align="center">
 <img src="https://github.com/igorulian/comprove/blob/main/assets/register.png" alt="register" border="0" width="18%" heigth="18%">
 <img src="https://github.com/igorulian/comprove/blob/main/assets/login.png" alt="login" border="0" width="18%" heigth="18%">
 <img src="https://github.com/igorulian/comprove/blob/main/assets/home.png" alt="home" border="0" width="18%" heigth="18%">
 <img src="https://github.com/igorulian/comprove/blob/main/assets/file-list.png" alt="file list" border="0" width="18%" heigth="18%">
 <img src="https://github.com/igorulian/comprove/blob/main/assets/edit-file.png" alt="edit file" border="0" width="18%" heigth="18%">
 <img src="https://github.com/igorulian/comprove/blob/main/assets/list-category.png" alt="category list" border="0" width="18%" heigth="18%">
 <img src="https://github.com/igorulian/comprove/blob/main/assets/show-by-category.png" alt="edit category" border="0" width="18%" heigth="18%">
 <img src="https://github.com/igorulian/comprove/blob/main/assets/edit-categoy.png" alt="edit category" border="0" width="18%" heigth="18%">
 <img src="https://github.com/igorulian/comprove/blob/main/assets/create-category.png" alt="create category" border="0" width="18%" heigth="18%">
 <img src="https://github.com/igorulian/comprove/blob/main/assets/list-category-after-create.png" alt="edit category" border="0" width="18%" heigth="18%">
</p>

---

## 🚀 Como executar o projeto

### 🧪 Requisitos 

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina: 
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 

Após clonar o repositório em sua máquina será necessário preencher os campos do arquivo .env, para isso você poderá encontrar
o arquivo '.env-example' na pasta do servidor, que contém o exemplo das variáveis, conforme o texto abaixo.
Após preencher todos os campos, renomeie o arquivo de '.env-example' para '.env'. 

```bash
MONGO_CONNECT_LINK=

AWS_BUCKET=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
```


#### 🎲 Rodando o servidor

```bash
# Vá para a pasta do servidor
$ cd backend

# Instale as dependências
$ npm install

# "compile" os arquivos ts para js

# Rode o arquivo server.js
$ node server.js
```

#### 🧭 Rodando o aplicativo

```bash
# Vá para a pasta do aplicativo
$ cd mobile

# Instale as dependências
$ npm install

# Rode a aplicação mobile
$ npx react-native run-android (android)
$ npx react-native run-ios (ios)

#(para rodar a aplicação mobile você precisará ter instalado uma máquina virtual android ou ios)
```


---

## 🛠 Tecnologias utilizadas:

#### ⚙️ **Servidor**

-   **[Nodejs](https://www.npmjs.com/package/express)**
-   **[AWS-S3](https://www.npmjs.com/package/aws-sdk)**
-   **[TypeScript](https://www.npmjs.com/package/bcryptjs)**
-   **[MongoDB](https://www.npmjs.com/package/multer)**


#### 📱 **Aplicativo** 

-   **[React Native](https://www.npmjs.com/package/react-navigation)**
-   **[TypeScript](https://www.npmjs.com/package/react-native-deck-swiper)**

---

## 📝 [Licença](./LICENSE.md)

Esse projeto está sobre lisença MIT
---

Feito com ❤️ por Igor Ulian :)
