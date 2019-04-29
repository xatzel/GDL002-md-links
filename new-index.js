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

function validatePath(pathMd) {
	const extension = path.extname(pathMd);
	if (extension == '.md') {
		console.log('true');
		return true;
	} else {
		console.log('false');
		return false;
	}
}

function absolutePath(absolutelink) {
	const absolute = path.resolve(absolutelink);
	return absolute;
}

function readFileMd(pathMd) {
	return new Promise((resolve, reject) => {
		fs.readFile(pathMd, 'utf-8', (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
}

module.exports = {
	validatePath,
	absolutePath,
	readFileMd
};
