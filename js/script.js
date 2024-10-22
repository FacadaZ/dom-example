//Inicializamos nuestro arreglo de personas con dos objetos
const personas = [
    {
      nombre: "Juan Perez",
      edad: 18,
      
    },
    {
      nombre: "Maria Loza",
      edad: 21,
    },
  ];
  
  function agregarPersona() {
    //Obtenemos el elemento para mostrar un error del nombre
    const msgErrorNombre = document.querySelector("#msg-error-nombre");
    //borramos el contenido del elemento
    msgErrorNombre.innerHTML = "";
  
    //Obtenemos el elemento para mostrar un error de la edad
    const msgErrorEdad = document.querySelector("#msg-error-edad");
    //borramos el contenido del elemento
    msgErrorEdad.innerHTML = "";

    const msgErrorEmail = document.querySelector("#msg-error-email");
    msgErrorEmail.innerHTML = "";
  
    //Obtenemos el input donde se ingresa el nombre
    const inputNombre = document.querySelector("#input-nombre");
  
    //Obtenemos el input donde se ingresa la edad
    const inputEdad = document.querySelector("#input-edad");

    const inputEmail = document.querySelector("#input-email");
  
    //Creamos una variable que indica si el formulario tiene error
    //Inicialmente suponemos que el fomulario NO tiene error
    let hayError = false;
  
    //Obtenemos el valor del input y le quitamos los espacios del inicio y el final
    const nombre = inputNombre.value.trim();
    //Validamos que si el valor del nombre esta vacio
    if (nombre === "") {
      //De ser asi, colocamos el mensaje de error al contenido del elemento para mostrar el error
      msgErrorNombre.innerHTML = "Debe ingresar un nombre";
      //Le asigamos el valor true indicando que el formulario tiene error
      hayError = true;
    }
  
    //Obtenemos el valor del input y obtenemos el valor convertido a un valor numérico
    let edad = inputEdad.valueAsNumber;
    //Validamos si el valor ingresado NO corresponde a un valor numerico
    if (isNaN(edad)) {
      //De ser asi, colocamos el mensaje de error al contenido del elemento para mostrar el error
      msgErrorEdad.innerHTML = "Debe ingresar una edad";
      //Le asigamos el valor true indicando que el formulario tiene error
      hayError = true;
    } else if (!Number.isInteger(edad) || edad < 0) {
      //Verificamos si la edad es un valor entero o menor que cero
      //De ser asi, colocamos el mensaje de error al contenido del elemento para mostrar el error
      msgErrorEdad.innerHTML = "Debe ingresar una edad válida";
      //Le asigamos el valor true indicando que el formulario tiene error
      hayError = true;
    }
  
    if (hayError) {
      //Es lo mismo que escribir hayError === true
      //Salimos del método por que no hay nada mas que hacer
      return;
    }
  let email = inputEmail.value.trim();

if (email === "") {
    msgErrorEmail.innerHTML = "Debe ingresar un email";
    hayError = true;
} else if (!email.endsWith("@gmail.com")) {
    msgErrorEmail.innerHTML = "El email debe ser @gmail.com";
    hayError = true;
}

if (hayError) {
    return;
}

  
    //Si llegamos aqui significa que todos los valores ingresados son válidos
  
    //Creamos un nuevo objeto con los valores ingresados
    const nuevaPersona = {
      nombre: nombre,
      edad: edad,
      email: email,
    };
  
    //Ingresamos el nuevo objeto persona dentro del arreglo
    personas.push(nuevaPersona);
    //Limpiamos los inputs
    inputNombre.value = "";
    inputEdad.value = "";
    inputEmail.value = "";
  
    actualizarLista();
  }
  
  function eliminar(i) {
    const respuesta = confirm("¿Esta seguro que desea eliminar el nombre?");
    if (respuesta === false) {
      return;
    }
    personas.splice(i, 1);
    actualizarLista();
  }
  
  function actualizarLista() {
    const listaNombresHtml = document.getElementById("lista-nombres");
    if (personas.length === 0) {
      listaNombresHtml.innerHTML = `
              <tr>
                  <td colspan="4">No hay personas registradas</td>
              </tr>`;
      return;
    }

    let html = "";

    for (let i in personas) {
      const persona = personas[i];
      html +=
        `<tr><td><input class="btn-delete" type="button" onclick="eliminar(${i})" value="Eliminar"></td>` +
        "<td>" +
        persona.nombre +
        "</td><td>" +
        persona.edad +
        "</td><td>" +
        persona.email +
        "</td></tr >";
    }
  
    listaNombresHtml.innerHTML = html;
  }
