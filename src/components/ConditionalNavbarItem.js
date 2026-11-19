import React from 'react';
import { useLocation } from '@docusaurus/router';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import {useWindowSize} from '@docusaurus/theme-common';

/*
Required props:
- label - string: text to display in navbar item
- graphic? - string: css class to display a graphic in place of text.  Check out some of the navbar items in custom.css for examples
- One of:
    to - string or array of strings*: internal path (ie doc) to navigate to when on the corresponding page
    href - string or array of strings*: external link (github, discord, etc.) to navigate to when on the corresponding page
    
    * If showIn is a string, to/href must also be a string.  
      If showIn is an array, to/href can be either a string or array of the same length
- showIn - string or array of strings: path(s) where the navbar item should be displayed

If showIn and to/href are arrays, then the navbar item will display the to/href link at the same index as the valid location in showIn.
For example, if showIn = ['one', 'two'] and to = ['oneLink', 'twoLink'], then the navbar item will display 'oneLink' when the user is
on a page with 'one' in the path, and 'twoLink' when the user is on a page with 'two' in the path.
*/
export default function ConditionalNavbarItem({ label, graphic, to, href, showIn, mobile }) {
    const currLocation = useLocation().pathname;
    let navbarItem = null;
    let locationIndex = -1;
    let renderItem = true;

    // check if current location is valid
    if (typeof showIn === 'string') {
        if (showIn.indexOf('!') == 0) // return true if path does *not* contain contents of showIn
            renderItem = !(currLocation.search(new RegExp(showIn.substring(1))) >= 1)
        else renderItem = currLocation.search(new RegExp(showIn)) >= 1
    }
    else if (Array.isArray(showIn)) { // check if current location is valid and get index of destination
        for (let i = 0; i < showIn.length; i++) {
            if (showIn[i].indexOf('!') == 0) {
                if (!(currLocation.search(new RegExp(showIn[i].substring(1))) >= 1)) { // check if current location is valid
                    locationIndex = i;
                    break;
                }
            }
            else {
                if (currLocation.search(new RegExp(showIn[i])) >= 1) { // check if current location is valid
                    locationIndex = i;
                    break;
                }
            }
        }
        if (locationIndex === -1) // don't render item if not in valid location
            renderItem = false;
    }
    else renderItem = false;
   
    if (renderItem) {
        let toFinal = null;
        let hrefFinal = null;

        if (to) { // if called with "to", render as standard item
            toFinal = (typeof to === 'string') ? to : to[locationIndex];
            navbarItem = <DefaultNavbarItem to={toFinal} label={label} mobile={mobile} />;
        }
        else if (href) { // if called with "href", render as external link
            hrefFinal = (typeof href === 'string') ? href : href[locationIndex];
            let isMobile = useWindowSize() === "mobile";
            let className = graphic ?? "";
            let renderLabel = !graphic || isMobile;

            if (graphic && isMobile) {
                className += "-mobile"; // essentially className = graphic + "-mobile"; ex: navbar-github-link-mobile 
                label = <span class="navbar-label-mobile">{label}</span>; // adds some padding on the left for the graphic
            }
            
            navbarItem = <DefaultNavbarItem className={className} href={hrefFinal} label={renderLabel ? label : ""} mobile={mobile} />;
            if (graphic && !isMobile) // display tooltip if item has graphic and user is on desktop view
                navbarItem = <div class="tooltip">{navbarItem}<span class="tooltiptext">{label}</span></div>;
        }
    }

    return navbarItem;
}