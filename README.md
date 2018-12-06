# Hovercard

Hovercard is a JavaScript library to get Wikipedia summary cards for terms on mouse over. It's useful in explaining concepts or to give summaries to Wikipedia links.


![Travis (.org)](https://travis-ci.org/AnandChowdhary/hovercard.svg?branch=master)
[![GitHub](https://img.shields.io/github/license/anandchowdhary/hovercard.svg)](https://github.com/AnandChowdhary/add-to-calendar/blob/master/LICENSE)
[![Made in Enschede](https://img.shields.io/badge/made%20in-Enschede-brightgreen.svg)](https://cityofenschede.com/)

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

### Links

You can have the hovercard link to the respective Wikipedia article:

```js
new Hovercard({
    link: "wikipedia"
});
```

You can also have the hovercard link to the referer (the element whose hovercard this is):

```html
<a href="https://google.com" class="hovercard">Google</a>
```

```js
new Hovercard({
    link: "inherit"
});
```

Finally, you can also supply a custom link for a hovercard using the `data-link` attribute:

```html
<span data-link="https://google.com" class="hovercard">Google</span>
```

## [Demo](https://anandchowdhary.github.io/hovercard/)

Literally made this in a few hours. Lots to be done.

**Todo:**
- [x] Support all languages, not just English Wikipedia
- [x] Place cards better (top right, etc., not just bottom left)
- [x] Keep cards visible on hover, not just link hover
- [x] Support for cards linking to article/other things
- [ ] Support multiple sources (other than Wikipedia)
- [ ] Fade cards in and out, don't just display none them
- [ ] Better loading/error states?
- [ ] Polyfill for fetch? Docs if none
- [ ] oEmbed like previews for other services
- [ ] Auto detect Wikipedia links and hovercard
