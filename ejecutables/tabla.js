'use strict'

let createHeader = (claves) => {
    
    let theadEl = document.createElement('thead');
    let trEl = document.createElement('tr');
    let thEl = document.createElement('th');
    
    claves.forEach(element => {
        let thEl = document.createElement('th');
        thEl.innerHTML = element;
        trEl.appendChild(thEl);  
    });
    thEl.innerHTML = 'Borrar';
    trEl.appendChild(thEl);  

    theadEl.appendChild(trEl);
    tableEl.appendChild(theadEl);
}

let createRow = (element) => {
    let trEl = document.createElement('tr');
    for (let clave in element) {
        let tdEl = document.createElement('td');
        tdEl.innerHTML = element[clave];
        trEl.appendChild(tdEl)
    }
    let tdEl = document.createElement('BUTTON');
    tdEl.innerHTML = 'X';
    tdEl.classList.add('btn-borrar');
    trEl.appendChild(tdEl);
    return trEl
}

let createBody = (elements)=> {
    let tbodyEl = document.createElement('tbody');
    elements.forEach(el => {
        tbodyEl.appendChild(createRow(el));
    });
    tableEl.appendChild(tbodyEl);
};

const clearArray = (array) => {
    Array.from(array).forEach((el) => {
        el.value = "";
    });
};

let btnAgregar = document.getElementById('btnTablaModalAgregar');
let modalInputArray = document.getElementsByClassName('modalInput');

window.addEventListener('load', () => {
    createHeader(clavesEspecimenes);
    createBody(dataParseada.especimenes);
});

btnAgregar.addEventListener('click', () => {
    let tbodyEl = document.getElementsByTagName('tbody')[0];
    
    let NuevoEspecimen = {
        Nombre : modalInputArray[0].value,
        Clima : modalInputArray[1].value,
        Flor : modalInputArray[2].value,
        Fruta : modalInputArray[3].value,
        Hojas : modalInputArray[4].value
    } 
    tbodyEl.appendChild(createRow(NuevoEspecimen));
    clearArray(modalInputArray);
    $('#exampleModal').modal('hide');
});
