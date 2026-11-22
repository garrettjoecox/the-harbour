
import { useLocation } from '@docusaurus/router';

export function GetPortName(sohName, twoShipName) {
    let returnName = "";
    const pathName = useLocation().pathname;
    if (pathName.includes('ship-of-harkinian')) {
        returnName = sohName;
    } else if (pathName.includes('2ship2harkinian')) {
        returnName = twoShipName;
    } else returnName = "UNDEFINED";

    return returnName;
}

// Presets for developer convenience
export function Game() {
    return GetPortName("Ocarina of Time", "Majora's Mask");
}
export function GameNickname() {
    return GetPortName('OoT', 'MM');
}
export function Port() {
    return GetPortName("Ship of Harkinian", "2 Ship 2 Harkinian");
}
export function PortNickname() {
    return GetPortName('SoH', '2Ship');
}
export function RepoName() {
    return GetPortName('Shipwright', '2ship2harkinian')
}
export function RepoURL() {
    return GetPortName('https://github.com/HarbourMasters/Shipwright', 'https://github.com/2ship2harkinian/2ship2harkinian')
}