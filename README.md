# ![Hovercard](https://raw.githubusercontent.com/AnandChowdhary/hovercard/master/logo.png)

Hovercard is a JavaScript library to get Wikipedia summary cards for terms on mouse over. It's useful in explaining concepts or to give summaries to Wikipedia links.

![Travis CI](https://travis-ci.org/AnandChowdhary/hovercard.svg?branch=master)
[![GitHub](https://img.shields.io/github/license/anandchowdhary/hovercard.svg)](https://github.com/AnandChowdhary/add-to-calendar/blob/master/LICENSE)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/AnandChowdhary/hovercard.svg)
[![Made in Enschede](https://img.shields.io/badge/made%20in-Enschede-brightgreen.svg)](https://cityofenschede.com/)

[![NPM](https://nodei.co/npm/hovercard.png)](https://npmjs.com/package/hovercard)

[![Screenshot of a Hovercard demo](https://raw.githubusercontent.com/AnandChowdhary/hovercard/master/demo.png)](https://github.com/AnandChowdhary/hovercard)

You can get Hovercard from NPM:

```bash
yarn add hovercard
```

Then import and initialize it (optionally, set your Wikipedia language):

```js
import Hovercard from "hovercard";
const cards = new Hovercard({
    lang: "en"
});
```

And add the CSS class <code>hovercard</code> on the elements you want hovercards for:

```html
<span class="hovercard">Facebook</span>
```

**Important note:** This is the README for Hovercard v2, rewritten with additional configuration in TypeScript. For information about v1, view the [README for Hovercard v1](https://github.com/AnandChowdhary/hovercard/blob/c93fcb1e31feb283f6b7293bba331ebce684f635/README.md).

## Configuration

Use English Wikipedia for the links matching CSS class "info":

```js
new Hovercard({
  selector: "a.info",
  wikipediaLanguage: "en"
});
```

Custom template for the card's contents:

```js
new Hovercard({
  template: result => `
    <h1>${result.title}</h1>
    <p>${result.text}</p>
  `
});
```

Fetch data from a custom API, disabling cache instead of Wikipedia:

```js
new Hovercard({
  noCache: true,
  getFetchEndpoint: word => `https://example.com/dictionary?q=${word}`,
  fetchConfig: {
    method: "POST"
  },
  getHeading: result => result.title,
  getBody: result => result.text
});
```

Custom function to fetch data from your API:

```js
new Hovercard({
  getData: word => new Promise((resolve, reject) => {
    fetch("my-api")
      .then(data => resolve(data))
      .catch(error => reject(error));
  })
})
```

Use a custom storage instead of local storage for caching:

```js
const memory = {};
new Hovercard({
  storage: {
    getItem: key => memory[key],
    setItem: (key, value) => (memory[key] = value)
  }
})
```

## Events

Listen to events:

```js
const cards = new Hovercard();
cards.on("created", () => {
  console.log("Hovercards created!");
});
```

Events emitted:

- created
- removed-element
- show
- hide
- update

## [Demo](https://anandchowdhary.github.io/hovercard/)

Literally made this in a few hours. Lots to be done.

**Todo:**
- [x] Support all languages, not just English Wikipedia
- [x] Place cards better (top right, etc., not just bottom left)
- [x] Keep cards visible on hover, not just link hover
- [x] Support for cards linking to article/other things
- [x] Support multiple sources (other than Wikipedia)
- [ ] Fade cards in and out, don't just display none them
- [ ] Better loading/error states?
- [ ] Polyfill for fetch? Docs if none
- [ ] oEmbed like previews for other services
- [ ] Auto detect Wikipedia links and hovercard
