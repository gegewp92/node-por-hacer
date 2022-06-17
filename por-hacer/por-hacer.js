const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {

        if (err) throw new Error('No se pudo grabar', err);

    })

}

const cargarDB = () => {
    //require(): detecta que es un JSON y automaticamente lo serializa y lo convierte en un objeto de javascript
    //console.log(listadoPorHacer);
    //[ { descripcion: 'a comerla', completado: false } ]
    //listadoPorHacer = require('../db/data.json');

    try {

        listadoPorHacer = require('../db/data.json');

    } catch (error) {

        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer); // push() -> agregar elementos a mi array

    guardarDB();

    return porHacer;
}

const getListado = () => {

    cargarDB();

    return listadoPorHacer;

}

const actualizar = (descripcion, completado) => {

    cargarDB();

    // findIndex() devulve la posicion del array si coincide con mi "key" tarea
    let index = listadoPorHacer.findIndex(tarea => {

        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {

        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;

    } else {
        return false;
    }

}

const borrar = (descripcion) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {

        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {

        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;

    } else {
        return false;
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}