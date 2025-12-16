// export: we need this accessible to the router
// default: we need this to be the default function of the script, since we dont call a function to render pages!
export default function secondPage() {
    // you can run any normal js function,
    // since this is just fancier JS and HTML!
    // e.g., set the title:
    document.title = "2 | My Kynix App";

    // create the page, which can be any element, but i recommend divs
    const page = document.createElement("div");

    // then set the content
    // this is just html so, you can do anything normal JS innerHTML can
    page.innerHTML = `
        <h1>Second page!</h1>
        
        <br />
        
        <a href="/">Go back!</a>
    `;

    // return the page or the router wont know what its wanting this page to render! 
    return page;
}