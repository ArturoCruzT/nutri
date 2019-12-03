export const Formulas = [
		{
			clave: "HBH",
			nombre: "Ecuacion de Harris-Benedict (Hombre)",
			valor: "66 + (13.7 * PESO) + (5 * ESTATURA) - (6.8 * EDAD)",
			consideraciones: [
				{nombre: "Edad", descripcion: "En años"},
				{nombre: "Peso", descripcion: "En kilogramos"},
				{nombre: "Estatura", descripcion: "En centimetros"},
				{nombre: "Nota", descripcion: "Se considera el peso ideal en caso de obesidad y sobre peso"}
			]
		}, {
			clave: "HBM",
			nombre: "Ecuacion de Harris-Benedict (Mujer)",
			valor: "665 + (9.6 * PESO) + (1.8 * ESTATURA) - (4.7 * EDAD)",
			consideraciones: [
				{nombre: "Edad", descripion: "En años"},
				{nombre: "Peso", descripion: "En kilogramos"},
				{nombre: "Estatura", descripion: "En centimetros"},
				{nombre: "Nota", descripion: "Se considera el peso ideal en caso de obesidad y sobre peso"}
			
			]
		}
	]
;