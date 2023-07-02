let qs = (elemento) => {
    return document.querySelector(elemento);
}
window.addEventListener("load", () => {

let $inputUserNombre = qs('#nombre'),
    $inputApellido = qs('#apellido'),
    $inputEmail = qs('#email'),
    $pError=qs("#error"),
    $inputdate=qs("#date"),
    $inputPassword = qs('#password'),
    $file = qs('#avatar'),
    $form = qs('#formRegister'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;


    $inputUserNombre.addEventListener("blur", () => {
        switch (true) {
            case !$inputUserNombre.value.trim():
                $pError.innerText = "El nombre es obligatorio";
                $inputUserNombre.classList.add("is-invalid");
                break;
            case !regExAlpha.test($inputUserNombre.value):
                $pError.innerText = "Ingrese solamente caracteres alfabeticos";
                $inputUserNombre.classList.add("is-invalid");
                break;
            default:
                $inputUserNombre.classList.remove("is-invalid");
                $inputUserNombre.classList.add("is-valid");
                $pError.innerText = "";
                break;
        }
    })

    $inputApellido.addEventListener('blur', () => {
        switch (true) {
            case !$inputApellido.value.trim():
                $pError.innerText = 'El apellido es obligatorio'
                $inputApellido.classList.add('is-invalid')
                break;
            case !regExAlpha.test($inputApellido.value):
                $pError.innerText = 'Ingrese solamente caracteres alfabeticos'
                $inputApellido.classList.add('is-invalid')  
                break; 
            default:
                $inputApellido.classList.remove('is-invalid');
                $inputApellido.classList.add('is-valid');
                $pError.innerText = ''
                break;
        }
    })

    $inputEmail.addEventListener('blur', () => {
        switch (true) {
            case !$inputEmail.value.trim():
                $pError.innerText = 'El campo email es obligatorio';
                $inputEmail.classList.add('is-invalid')
                break;
            case !regExEmail.test($inputEmail.value):
                $pError.innerText = 'Debe ingresar un email válido';
                $inputEmail.classList.add('is-invalid')
                break
            default:
                $inputEmail.classList.remove('is-invalid');
                $inputEmail.classList.add('is-valid');
                $pError.innerText = ''
                break;
        }
    })


    $inputPassword.addEventListener('blur', () => {
        switch (true) {
            case !$inputPassword.value.trim():
                $pError.innerText = 'La contraseña es obligatoria';
                $inputPassword.classList.add('is-invalid')
                break;
            case !regExPass.test($inputPassword.value):
                $pError.innerText = 'La contraseña debe tener: entre 6 a 12 caracteres, al menos una mayúscula, una minúscula y un número';
                $inputPassword.classList.add('is-invalid')
                break
            default:
                $inputPassword.classList.remove('is-invalid');
                $inputPassword.classList.add('is-valid');
                $pError.innerText = ''
                break;
        }
    $inputPassword.addEventListener('blur', () => {
        switch (true) {
            case !$inputdate.value.trim():
                $pError.innerText = 'La contraseña es obligatoria';
                $inputPassword.classList.add('is-invalid')
                break;
            case !regExPass.test($inputPassword.value):
                $pError.innerText = 'La contraseña debe tener: entre 6 a 12 caracteres, al menos una mayúscula, una minúscula y un número';
                $inputPassword.classList.add('is-invalid')
                break
            default:
                $inputPassword.classList.remove('is-invalid');
                $inputPassword.classList.add('is-valid');
                $pError.innerText = ''
                break;
        }
    })
   
    $form.addEventListener("submit", (event) => {
       event.preventDefault();
       const FORM_ELEMENTS = event.target.elements;

       for (let index = 0; index < FORM_ELEMENTS.length - 1; index++) {
           const element = FORM_ELEMENTS[index];
           if(element.value === "" && element.type !== "file") {
               element.classList.add("is-invalid")
           }
       }

      
       let elementosConErrores = document.querySelectorAll(".is-invalid");
       let errores = elementosConErrores.length > 0; 

       if(errores) {
           submitErrors.innerText = "Los campos señalados son obligatorios"
       } else {
           $form.submit()
       }
    })


    $file.addEventListener('change', () => {
        let filePath = $file.value, //Capturo el valor del input
            allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i //Extensiones permitidas
        if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            $fileErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
            $file.value = '';
            return false;
        }
    })
})})
