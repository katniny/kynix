// export: we need this accessible to the router
// default: we need this to be the default function of the script, since we dont call a function to render pages!
export default function indexPage() {
    // you can run any normal js function,
    // since this is just fancier JS and HTML!
    // e.g., set the title:
    document.title = "Index | My Kynix App";

    // create the page, which can be any element, but i recommend divs
    const page = document.createElement("div");

    // then set the content
    // this is just html so, you can do anything normal JS innerHTML can
    page.innerHTML = `
        <h1>Welcome to your Kynix app!</h1>
        <p>Learn more about Kynix <a href="https://github.com/katniny/kynix" target="_blank">here</a>.</p>
        <p>Learn how to use Kynix from our documentation <a href="https://github.com/katniny/kynix/blob/main/documentation" target="_blank">here</a>.</p>
        
        <br />
        
        <a href="/2">Try navigating!</a>
    `;

    // return the page or the router wont know what its wanting this page to render! 
    return page;
}