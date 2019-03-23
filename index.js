const ofertados = require ('./cursos');

let {cursos} = ofertados

console.log('Cursos ofertados');

setTimeout(function(){
		console.log('Código: '+cursos[0].id+' Nombre: '+cursos[0].nombre+' Duración: '
			+cursos[0].duracion+' Valor : $'+ cursos[0].valor+'\n');
	},2000);

setTimeout(function(){
		console.log('Código: '+cursos[1].id+' Nombre: '+cursos[1].nombre+' Duración: '
			+cursos[1].duracion+' Valor : $'+ cursos[1].valor+'\n');
	},4000);

setTimeout(function(){
		console.log('Código: '+cursos[2].id+' Nombre: '+cursos[2].nombre+' Duración: '
			+cursos[2].duracion+' Valor : $'+ cursos[2].valor+'\n');
	},6000);
