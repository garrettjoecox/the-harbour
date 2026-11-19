import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

function overridePageColor(pathname) {
    let colorSet = '' // default to none
    if (pathname.includes("docs/2ship2harkinian")) { // in the 2ship directory
        colorSet = 'mm';
    }
    document.documentElement.setAttribute('data-special-theme', colorSet);
};

export function onRouteDidUpdate({location}) {
    if (ExecutionEnvironment.canUseDOM) {
        overridePageColor(location.pathname);
    }
}