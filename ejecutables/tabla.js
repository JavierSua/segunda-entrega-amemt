'use strict'

let createHeader = (claves) => {
    
    let theadEl = document.createElement('thead');
    let trEl = document.createElement('tr');
    
    claves.forEach(element => {
        let thEl = document.createElement('th');
        thEl.innerHTML = element;
        trEl.appendChild(thEl);  
    });
    
    theadEl.appendChild(trEl);
    tableEl.appendChild(theadEl);
}

let createRow = (element) => {
    let trEl = document.createElement('tr');
    trEl.classList.add('tr')
    for (let clave in element) {
        let tdEl = document.createElement('td');
        tdEl.innerHTML = element[clave];
        trEl.appendChild(tdEl)
    }
    let btnBorrarEl = document.createElement('BUTTON');
    btnBorrarEl.innerHTML = 'X';
    btnBorrarEl.classList.add('btn-borrar');
    btnBorrarEl.addEventListener('click', function(e){
        e.target.parentNode.remove();
    });
    let btnEditEl = document.createElement('BUTTON');
    btnEditEl.innerHTML = 'Editar';
    btnEditEl.classList.add('btn-borrar');
    btnEditEl.addEventListener('click', function(e){
        let modal =  document.getElementsByClassName('btnTablaAgregar')[0]
        console.log(modal)
        modal.click();//con esto abro el modal de agregar. buscar forma para hacer que edite equisdededede
        Array.from(e.target.parentNode.children).forEach(el => {
            console.log (el.innerHTML)   
        });
    });
    trEl.appendChild(btnBorrarEl);
    trEl.appendChild(btnEditEl);
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

const deleteRow = (event) => {
    console.log($('.btn-borrar'))
    console.log($('.tr'))
    console.log(event)
}

const areInputsFilled = () => {
    var isValid = true;
    $('input').filter('[required]').each(function() {
        if ($(this).val() === '') {
            isValid = false;
            return false;
        }
    });
    return isValid;
}
const setRequired=(array,boolean)=>{
    Array.from(array).forEach(el =>{
        el.required = boolean
    })
}

let progBar = document.getElementsByClassName('progress-bar')[0];
let btnAgregar = document.getElementById('btnTablaModalAgregar');
let modalInputArray = Array.from(document.getElementsByClassName('modalInput'));

window.addEventListener('load', () => {
    createHeader(clavesEspecimenes);
    createBody(dataParseada.especimenes);
});

btnAgregar.addEventListener('click', () => {
    let tbodyEl = document.getElementsByTagName('tbody')[0];
    setRequired(modalInputArray, true);
    if(areInputsFilled()){
        progBar.classList.toggle('progress-bar-full');
        setTimeout(() => {
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
            progBar.classList.toggle('progress-bar-full');
        }, 2000);
        setRequired(modalInputArray, false);
    }
    
});
