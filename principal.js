const {cursos} = require ('./cursos');
const fs = require('fs');
const express = require('express');
const app = express();

const opciones = {
	id : {
		demand: true, 
		alias: 'd'
	},
	nombre : {
		demand: true, 
		alias: 'n'
	},
	cedula : {
		demand: true, 
		alias: 'c'
	} 
};

const argv = require('yargs')
			.command('inscribir','Inscribirse en un curso', opciones)
			.argv;

if(argv._.length > 0){
	let curso = cursos.find(elemento => elemento.id == argv.id);

	if(curso){
		texto ='Curso seleccionado: '+curso.nombre+' tiene una duración de '+curso.duracion+' por un valor de '+curso.valor;
		dataEstudiante = ' Estudiante '+argv.nombre+' con cedula '+argv.cedula;
		
		app.get('/', function (req, res) {
  		res.send(texto+dataEstudiante);
		})
 
		app.listen(3000)

		/**fs.writeFile('archivo.txt',' '+texto+'\n'+dataEstudiante+' ', (err) => {
			
			if(err) {
				return console.log(err);
			}else {
				console.log('Se almaceno inscripcion con exito');
			}
		})**/

	}else{
		console.log('El curso digitado no éxiste');
	}

}else{
	const oferta = require ('./index');	
}