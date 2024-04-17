# Search App Deel

An application to search that autocompletes the search value.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes, to do so clone this repo:

```zsh
git clone https://github.com/gdsrosa/search-app-deel.git
cd search-app-deel
```

### Installing

Assuming you have all the Node.js (20+) and NPM (version 10+) environment setup in your machine:

Let's install the dependencies

```zsh
npm install
```

## Setup env vars

To make sure you have all the env vars configured on your side, please go to `.env` file and add the API endpoint
Note: Is encourage to create a `.env.local` file and execute the same step

```zsh
  # on the .env
  VITE_API_ENDPOINT=https://661d327ee7b95ad7fa6c7d8b.mockapi.io/api/users
```

## Running the application in development mode

To start your local webpack-dev-server run:

```zsh
npm run dev
```

## Running the tests

To execute the unit tests:

```zsh
npm test
```

## Built With

- [Typescript](https://www.typescriptlang.org/) - The programming language used for the Client
- [React.js](https://reactjs.org/) - The UI library used for the Client
- [NPM](http://npmjs.org) - Dependency Management
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS) - Styles Management
- [Vite](https://vitejs.dev/) - Frontend Tooling
- [Vitest](https://vitest.dev/) - JavaScript Unit Test tool

## Authors

- **Gabriel Rosa** - [gdsrosa](https://github.com/gdsrosa)
