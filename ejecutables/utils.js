let tableEl = document.getElementsByClassName('table')[0];

let data = `{"especimenes":[
    {"Nombre": "Cactus" , "Reino": "Planta" , "Habitat": "Seco" , "Flor": "as" , "Alimentacion": "---"},
    {"Nombre": "Harina" , "Reino": "1kg" , "Habitat": 50 , "Flor": "alimentos" , "Alimentacion": "marolio"},
    {"Nombre": "Manzana" , "Reino": "500g", "Habitat": 80 , "Flor": "fruteria" , "Alimentacion": "generico" },
    {"Nombre": "lavandina" , "Reino": "2l" , "Habitat": 40 , "Flor": "limpieza" , "Alimentacion": "Ayudin" },
    {"Nombre": "Shampoo" , "Reino": "500ml" , "Habitat": 150 , "Flor": "higiene personal" , "Alimentacion": "plusbell"}
]
}`

let dataParseada = JSON.parse(data);

let clavesEspecimenes = Object.keys(dataParseada.especimenes[0])
