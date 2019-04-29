const fs = require('fs');
const path = require('path');
// este modulo nos permite trabajar e interactuar con los documentos
// del sistema operativo cuando se crean servidores o programas
function readAllDocs(nPath) {
	return new Promise((resolve, reject) => {
		fs.readFile(nPath, 'utf-8', function(error, data) {
			if (error) {
				reject(error);
			} else {
				//esto es un codigo asincrono y una funcion callback
				resolve(data);
				// console.log(data.datos.toString());
			}
		});
	});
}
// este metodo es para poder escribir un archivo, y en los parametros
//  puedo ver el contenido que elija, recibe otro parametro (callback) una funcion
// que ejecuta cuadno ha terminado el proceso de create archivo

/*const os = require('os'); me muestra en consola 
console.log(os.platform());
console.log(os.release());
console.log('free mem:', os.freemem);
console.log('total mem:', os.totalmem);
esto es para ver los datos de mi sistema operativo*/
