# Hovercard

Hovercard is a JavaScript library to get Wikipedia summary cards for terms on mouse over. It's useful in explaining concepts or to give summaries to Wikipedia links.

![Screenshot of a Hovercard demo](https://raw.githubusercontent.com/AnandChowdhary/hovercard/master/demo.png)

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
