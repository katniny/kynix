# 📄 Adding a New Page
Adding a new page to Kynix is very easy! 

1. Go to your project directory, go to `pages`, and create a new file. It can be named anything, e.g., "home.js", but must end in JS!
2. After doing that, you can use this as a template--I'll explain what this all means in a second:
```js
export default function secondPage() {
    document.title = "2 | My Kynix App";

    const page = document.createElement("div");

    page.innerHTML = `
        <h1>Second page!</h1>
        
        <br />
        
        <a href="/">Go back!</a>
    `;

    return page;
}
```

We use a `export default` function so the router knows that
    - This is the DEFAULT FUNCTION it needs to run, otherwise the router won't know what to do and hang
    - Export so the router can actually run the script

3. Then go to `router.js` and at the top where it says `export const routes = [`, add the following:
```js
{ path: "/myPage", loader: () => import("./pages/myPage.js") }
```

Then, you're done! Check out your new page!