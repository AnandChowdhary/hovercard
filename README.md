# 📦 Typestart

[![Travis CI](https://img.shields.io/travis/AnandChowdhary/typestart.svg)](https://travis-ci.org/AnandChowdhary/typestart)
[![Coverage Status](https://coveralls.io/repos/github/AnandChowdhary/typestart/badge.svg?branch=master)](https://coveralls.io/github/AnandChowdhary/typestart?branch=master)
[![GitHub](https://img.shields.io/github/license/anandchowdhary/typestart.svg)](https://github.com/AnandChowdhary/typestart/blob/master/LICENSE)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/AnandChowdhary/typestart.svg)
[![Minzipped size](https://img.shields.io/bundlephobia/minzip/typestart.svg)](https://www.npmjs.com/package/typestart)

Typestart is a web/DOM library starter with these features:

- [x] Written in Typescript
- [x] Built-in demo with GitHub pages (`./docs/` folder)
- [x] main/module/types in `package.json`
- [x] Bundled as UMD (works as a module)
- [x] Exposes `window.Library` (works with CDNs)
- [x] Style with Sass
- [x] Test with Jest
- [x] Build with Travis CI
- [x] Clean with Prettier

## ⭐ Getting started

Clone and start your project:

```bash
git clone git@github.com:AnandChowdhary/typestart
mv typestart my-library && cd my-library
sudo rm -r .git && git init
```

Find and replace "typestart" with your library name and "AnandChowdhary" with your GitHub username.

### GitHub configuration

Setup GitHub Pages demo by going to Settings → GitHub Pages → Source → master branch /docs folder.

### Development

Start development server with HMR and prettier:

```bash
yarn start
```

### Production

Build a production version:

```bash
yarn build
```

## 🛠️ Using a Typestart library

Install the library as a dependency:

```bash
npm install typestart
```

Or, if you're using Yarn:

```bash
yarn add typestart
```

Then import the library:

```js
import Typestart from "typestart";
```

And initialize it with an optional selector:

```js
const typestart = new Typestart("#heading");
```

You can also use a CDN:

```html
<script src="https://unpkg.com/typestart"></script>
```

## 💡 Why another starter?

I've used a bunch of different Typescript library starters, but they all have tons of boilerplate (super long build rules, scripts for releases, publishing, building, etc.) 

Typestart is—like the name suggests—a starting point.

## 📝 License

Unlicense (public domain, do whatever you want)
