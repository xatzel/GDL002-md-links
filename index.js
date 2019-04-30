const fs = require('fs');
const path = require('path');

function validatePath(pathMd) {
	const extension = path.extname(pathMd);
	if (extension == '.md') {
		console.log('true');
		return true;
	}
}

function absolutePath(absolutelink) {
	const absolutePt = path.resolve(absolutelink);
	return absolutePt;
}

function readAllDocs(nPath) {
	return new Promise((resolve, reject) => {
		fs.readFile(nPath, 'utf-8', function(err, data) {
			if (err) {
				reject(err);
			} else {
				//esto es un codigo asincrono y una funcion callback
				resolve(data);
				// console.log(data.datos.toString());
			}
		});
	});
}
// este modulo nos permite trabajar e interactuar con los documentos
// del sistema operativo cuando se crean servidores o programas
module.exports = {
	validatePath,
	absolutePath,
	readAllDocs
};
