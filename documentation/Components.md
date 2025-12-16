# Adding a Component
Kynix does not support "components" in the sense that React does, however, you can make your own.
(If this is requested, or I decide I want it, I may add this later on.)

There is no "right or wrong" way to do this, but there are 2 methods:

# 1. Make it a JavaScript file (Recommended!)
In your project directory, make a new file and name it anything. Then, add any kind of HTML that appends to the body (not `#app`!), just make sure you have it wrapped in a function and export it (`export function myFunction() {}`). Then, in main.js, add this at the top:
```js
import { myFunction } from "./myScript.js";

// start my function
myFunction();

```

This will allow the app to append your element and render it!

# 2. Put it in index.html
While you can do this as standard HTML, we feel as that this is less scalable. However, you can do this! As I said, there is no right or wrong way.