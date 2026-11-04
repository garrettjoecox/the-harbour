import { useLocation } from '@docusaurus/router';
import Layout from '@theme-original/Layout';
import { useEffect } from 'react';

export default function ConditionalColoring(props) {
    let currLocation = useLocation().pathname;
    useEffect(() => {
        if (currLocation.includes("docs/2ship2harkinian")) { // in the 2ship directory
            document.documentElement.setAttribute('data-special-theme', 'mm');
        } else document.documentElement.setAttribute('data-special-theme', ''); // reset theme
    }, [currLocation]);

    return <Layout {...props} />;
}