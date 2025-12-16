import { handleRoute, navigate } from "./router.js";

// handle the current route
handleRoute();

// you can add any startup function here,
// e.g., appending a sidebar!

// make global navigation available
window.$nav = navigate;