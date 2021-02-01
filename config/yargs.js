const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: 'false',
        describe: 'Lista la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: '10',
        description: 'Dicta hasta dónde llegara nuestra tabla'
    })
    .check( ( argv, options ) => {

        if ( isNaN(argv.b) ){
            throw 'La base tiene que ser un número'
        }

        if( isNaN(argv.h) ){
            throw '--hasta tiene que ser un numero'
        }

        return true;
    })
    .argv;

module.exports = argv;