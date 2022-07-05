const calculadora = document.getElementById('calculadora');
const resultado = document.getElementById('resultado');


//Validación
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else{event.preventDefault();calcular()}
  
        form.classList.add('was-validated')
      }, false)
    })
  })()





function calcular(){
    const nombre = document.querySelector('#nombre');
    const edad = document.querySelector('#edad');
    const id = document.querySelector('#id');
    const altura = document.querySelector('#altura');
    const peso = document.querySelector('#peso');
    const genero = document.querySelector('input[id="genero"]:checked');
    const actividad = document.querySelector('#actividad');

    console.log(actividad.value,genero.value)
    
    const multiplicadorTMB = {
      peso: 10,
      altura: 6.25,
      edad: 5
  }

let grupo = '';
let calculoCalorias;

if (edad.value < 29){
  grupo = 'Joven';
}else if(edad.value > 29 && edad.value < 59){
  grupo = 'Adultos';
} else { grupo = "Adultos mayores";}

if (genero.value === 'M') {
    //Formula hombres: valor actividad x (10 x peso en kg) + (6,25 × altura en cm) - (5 × edad en años) + 5
    calculoCalorias = actividad.value * ((multiplicadorTMB.peso * peso.value) +
                                         (multiplicadorTMB.altura * altura.value) -
                                         (multiplicadorTMB.edad * edad.value)) + 5;
} else {
    //Formula mujeres: valor actividad x (10 x peso en kg) + (6,25 × altura en cm) - (5 × edad en años) - 161
    calculoCalorias = actividad.value * ((multiplicadorTMB.peso * peso.value) +
                                         (multiplicadorTMB.altura * altura.value) -
                                         (multiplicadorTMB.edad * edad.value)) -161;
}




console.log(`${Math.floor(calculoCalorias)} kcal`)

resultado.innerHTML = `
    <div class=" card-body d-flex flex-column justify-content-center align-items-center h-100" id="calculo">
        <h5 class="card-title h2">Resultados</h5>
        <p class="card-text lead" >El paciente ${nombre.value} identificado con número de documento
        ${id.value} requiere un total de calorias de: </p>
        <div class="mb-3 w-100">
            <input class="form-control text-center" value="${Math.floor(calculoCalorias)} kcal" style="font-size: 2rem" disabled>
        </div>
        <p><strong>Grupo Poblacional:</strong> ${grupo} </p>
    </div>
`


}
