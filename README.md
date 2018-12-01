# Hovercard

Hovercard is a JavaScript library to get Wikipedia summary cards for terms on mouse over. It's useful in explaining concepts or to give summaries to Wikipedia links.

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

## [Docs](https://anandchowdhary.github.io/hovercard/)

Literally made this in a few hours. Lots to be done.

**Todo:**
- ~~Support all languages, not just English Wikipedia~~
- Place cards better (top right, etc., not just bottom left)
- Support multiple sources (other than Wikipedia)
- Fade cards in and out, don't just display none them
- Better loading/error states?
- Polyfill for fetch? Docs if none
