# Do I append to body or app?
In vanilla JS, it is not an uncommon occurance to append to body with `document.body.appendChild(element)`. However, in Kynix, there *are* use cases for this.

## Appending to Body
Appending to body is intended for elements that *plan* to stay visible, such as sidebars or headers.

## Appending to App
Appending to `#app` is intended for elements that do *not* plan to stick around after navigation, such as page-specific content.
