//
const descripcion = {
    demand: true,
    alias: 'd',
    descripcion: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    descripcion: 'Marca como completado o pendiente una tarea'
}



const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado })
    .command('borrar', 'Borra una tarea', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}