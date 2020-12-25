let tableEl = document.getElementsByClassName('table')[0];

let data = `{"especimenes":[
    {"Nombre": "Cactus" , "Clima": "Desierto" , "Flor": "Si" , "Fruta": "No" , "Hojas": "No"},
    {"Nombre": "Begonia" , "Clima": "Seco" , "Flor": "Si" , "Fruta": "No" , "Hojas": "Variadas"},
    {"Nombre": "Cerezo" , "Clima": "Templado", "Flor": "Si" , "Fruta": "Si" , "Hojas": "Grandes" },
    {"Nombre": "Orquidea" , "Clima": "Templado" , "Flor": "Si" , "Fruta": "No" , "Hojas": "Pequeñas" },
    {"Nombre": "Musgo" , "Clima": "Humedo" , "Flor": "No" , "Fruta": "No" , "Hojas": "No"}
]
}`

let dataParseada = JSON.parse(data);

let clavesEspecimenes = Object.keys(dataParseada.especimenes[0])
