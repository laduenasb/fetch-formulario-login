// Declarar la variable que tendra la URL de la API a la que se hará la solicitud

let url = "https://jsonplaceholder.typicode.com/users";

// Inicializar la función para realizar la petición GET a la URL de la API

fetch(url)
	// Inicializando una promesa que me permitirá operar y mostrar el resultado de la consulta que estamos solicitando
	.then(response => response.json())
	//Inicializamos una promesa que representará los datos obtenidos dentro de la tabla del HTML
	.then(data=>mostrarData(data))
	// Capturar los errores que se visualicen en la consola por si surgen
	.catch(error=>console.log(error))

	// Declarar la función mostrarData que recibe los datos y los muestra en la consola y en el cuerpo de la tabla del HTML

	const mostrarData = (data) =>{
		//Imprimir los datos en la consola
		console.log(data);
		// Inicializar una variable que almacenará el contenido HTML de la tabla
		let body = "";

		// Inicializar un bucle que itera sobre los elementos en 'data' y construira las filas de la tabla con los datos obtenidos
		for(let i=0;i<data.length;i++){
			body+=`<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`;
		}
		let tbody=document.getElementById("data");
		tbody.innerHTML=body;
	}