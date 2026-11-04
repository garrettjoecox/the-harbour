import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import Layout from '@theme-original/Layout';

export default function ConditionalColoring(props) {
    const currLocation = useLocation().pathname;
    
    if (currLocation.includes("docs/2ship2harkinian")) { // in the 2ship directory
        document.documentElement.setAttribute('data-special-theme', 'mm');
    } else document.documentElement.setAttribute('data-special-theme', ''); // reset theme

    return <Layout {...props} />;
}