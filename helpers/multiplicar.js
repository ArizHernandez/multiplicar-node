const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {

    try {
    
        let salida = '';
        let consola = '';
        
        for( let i = 1; i <= hasta; i++){

            salida += (` ${base} x ${i} = ${base * i}\n`);

            consola += (` ${base} ${ 'x'.cyan } ${i} ${ '='.cyan } ${base * i}\n`);

        }

        if( listar === true ){
            
            console.log('================='.blue);
            console.log('   Tabla del'.cyan, colors.cyan(base));
            console.log('================='.blue);
            
            console.log(consola);

        }
    
        fs.writeFileSync( `./out/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`.underline.green;
        
    } catch (error) {
        throw error;   
    }


}

module.exports = {
    crearArchivo
}