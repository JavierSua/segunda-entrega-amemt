'use strict'

let createHeader = (claves) => {
    
    let theadEl = document.createElement("thead");
    let trEl = document.createElement("tr");
    
    claves.forEach(element => {
        let thEl = document.createElement("th");
        thEl.classList.add()
        thEl.innerHTML = element;
        trEl.appendChild(thEl);  
    });

    theadEl.appendChild(trEl);
    tableEl.appendChild(theadEl);
}

let createRow = (element) => {
    let trEl = document.createElement("tr");
    for (let clave in element) {
        let tdEl = document.createElement("td");
        tdEl.innerHTML = element[clave];
        trEl.appendChild(tdEl)
    }
    return trEl
}

let createBody = (elements)=> {
    let tbodyEl = document.createElement('tbody');
    elements.forEach(el => {
        tbodyEl.appendChild(createRow(el));
    });
    tableEl.appendChild(tbodyEl);
};

window.addEventListener('load', () => {
    createHeader(clavesEspecimenes);
    createBody(dataParseada.especimenes);
});
