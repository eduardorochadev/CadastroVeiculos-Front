
# 🚗 Aplicação de Cadastro de Veículos - Angular

Esta é uma aplicação frontend desenvolvida com **Angular** que permite **cadastrar, listar, editar e excluir veículos**. É um CRUD completo com formulário reativo e integração com backend (JSON Server, API REST, etc.).

## 🛠 Tecnologias utilizadas

- [Angular CLI 18](https://angular.io/)
- TypeScript
- HTML5 + SCSS
- Reactive Forms
- Angular Router


## 📦 Funcionalidades

- ✅ Cadastro de veículo com os seguintes campos:
  - Placa
  - Chassi
  - Renavam
  - Modelo
  - Marca
  - Ano
- ✅ Edição de veículos cadastrados
- ✅ Exclusão de veículos
- ✅ Validações nos campos do formulário
- ✅ Navegação entre as telas de listagem e edição
- ✅ Estilo responsivo básico com SCSS

## ▶️ Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento

```bash
ng serve
```

Acesse no navegador: `http://localhost:4200`

### 4. (Opcional) Inicie o JSON Server (caso use)

```bash
npx json-server --watch db.json
```

## 🗂 Estrutura de pastas

```bash
src/
├── app/
│   ├── vehicle-list/        # Listagem de veículos
│   ├── vehicle-form/        # Formulário de criação e edição
│   ├── vehicle.service.ts   # Serviço HTTP para comunicação com a API
│   ├── vehicle.model.ts     # Modelo de dados Vehicle
│   └── app.routes.ts        # Rotas principais
```

## ✍️ Autor

**Eduardo Macedo**  
Desenvolvedor Full Stack | entusiasta automotivo  
[LinkedIn](https://linkedin.com/in/eduardo-seu-perfil) • [GitHub](https://github.com/seu-usuario)
