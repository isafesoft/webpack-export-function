function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = 'hi2'

    return element;
}

let obj = {name: 'mark', gender: 'gender'}
if (window.hasOwnProperty('finesse')) {
    console.log('mainjs, has own property', window)
}

document.body.appendChild(component());

function testExport() {
    alert('hi, this2 is exported');
}

module.exports = {
    testExport
};

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;
