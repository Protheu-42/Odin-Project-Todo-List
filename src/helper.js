export function attributeSetter(element, attributes) {
    for(let key in attributes){
        element.setAttribute(key, attributes[key])
    }
}

export function clearContentPage(contentDiv) {
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
}