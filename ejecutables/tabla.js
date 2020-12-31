'use strict'

let createHeader = (claves) => {
    
    let theadEl = document.createElement('thead');
    let trEl = document.createElement('tr');
    
    claves.forEach(element => {
        let thEl = document.createElement('th');
        let filterBtn = document.createElement('BUTTON');
        let filterDrpDwnList = document.createElement('div');
        thEl.classList.add('dropdown');
        //
        filterBtn.classList.add('btn','btn-secondary','dropdown-toggle');
        filterBtn.innerHTML = element;
        filterBtn.setAttribute('id', 'dropdownMenuButton');
        filterBtn.setAttribute('type', 'button');
        filterBtn.setAttribute('data-toggle', 'dropdown');
        filterBtn.addEventListener('click',(e) => {
            let tbody = document.getElementsByTagName('tbody')[0];
            clearArray(document.getElementsByClassName('filterInput'));
            tbody.parentElement.replaceChild(createBody(filter(e,element)),tbody);
        });
        //
        filterDrpDwnList.classList.add('dropdown-menu');
        let filterInput = document.createElement('input');
        filterInput.classList.add('filterInput');
        filterInput.addEventListener('input', (e)=>{
            let tbody = document.getElementsByTagName('tbody')[0];
            tbody.parentElement.replaceChild(createBody(filter(e,element)),tbody);
        });
        filterDrpDwnList.appendChild(filterInput);
        thEl.appendChild(filterBtn);
        thEl.appendChild(filterDrpDwnList);
        trEl.appendChild(thEl);
    });    
    theadEl.appendChild(trEl);
    tableEl.appendChild(theadEl);
};

let createRow = (element) => {
    let trEl = document.createElement('tr');
    trEl.classList.add('tr');
    for (let clave in element) {
        let tdEl = document.createElement('td');
        tdEl.innerHTML = capitalizeFirstLetter(element[clave]);
        trEl.appendChild(tdEl);
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
    btnEditEl.classList.add('btn-edit');
    btnEditEl.addEventListener('click', function(e){
        objToEdit = element
        let btnmodal =  document.getElementsByClassName('btnTablaAgregar')[0];
        editing = true ;
        modalInputArray.forEach((el) => {
            el.value = Array.from(e.target.parentNode.children)[modalInputArray.indexOf(el)].innerHTML;
        });
        rowToEdit =  e.target.parentNode;
        btnmodal.click();
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
    return tbodyEl
};

let appendBody = (body) => {
    tableEl.appendChild(body);
}

const clearArray = (array) => {
    Array.from(array).forEach((el) => {
        el.value = "";
    });
};

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
const addNewRow = () =>{
    let tbodyEl = document.getElementsByTagName('tbody')[0];
    setRequired(modalInputArray, true);
    if(areInputsFilled()){
        progBar.classList.toggle('progress-bar-full');
        setTimeout(() => {
            if(editing){
                objInEdit = {
                    Nombre : modalInputArray[0].value,
                    Clima : modalInputArray[1].value,
                    Flor : modalInputArray[2].value,
                    Fruta : modalInputArray[3].value,
                    Hojas : modalInputArray[4].value
                }
                rowToEdit.parentNode.replaceChild(createRow(objInEdit), rowToEdit)
                editing = false;
                dataParseada.especimenes[dataParseada.especimenes.indexOf(objToEdit)] = objInEdit
            }else{
                let NuevoEspecimen = {
                    Nombre : modalInputArray[0].value,
                    Clima : modalInputArray[1].value,
                    Flor : modalInputArray[2].value,
                    Fruta : modalInputArray[3].value,
                    Hojas : modalInputArray[4].value
                }
                tbodyEl.appendChild(createRow(NuevoEspecimen));
                dataParseada.especimenes.push(NuevoEspecimen);
            }
            clearArray(modalInputArray);
            $('#exampleModal').modal('hide');
            progBar.classList.toggle('progress-bar-full');
        }, 2000);
        setRequired(modalInputArray, false);
    }
}

const filter =(e, para)=>{
    let results;
    results = dataParseada.especimenes.filter(item => 
        item[para].toLowerCase().includes(e.target.value.toLowerCase())
        );
        return results
}

const setRequired=(array, bool)=>{
    Array.from(array).forEach(el =>{
        el.required = bool;
    })
}
const capitalizeFirstLetter = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

let editing = false;
var rowToEdit;
var objInEdit;
var objToEdit;
let progBar = document.getElementsByClassName('progress-bar')[0];
let btnAgregar = document.getElementById('btnTablaModalAgregar');
let btnCancelar = document.getElementsByClassName('btn-secondary')[0];
let modalInputArray = Array.from(document.getElementsByClassName('modalInput'));

window.addEventListener('load', () => {
    createHeader(clavesEspecimenes);
    appendBody(createBody(dataParseada.especimenes));
});

btnAgregar.addEventListener('click', () => {
    addNewRow();
});

btnCancelar.addEventListener('click', () => {
    clearArray(modalInputArray);
    editing = false;
});
