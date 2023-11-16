//---------------------------------------------------------------------------------------------Index.html.html------------------------------------------------------
$(document).ready(function () {
  // Manejar el envío del formulario
  $('#datosIngresoForm').submit(function (e) {
    e.preventDefault();  // Evitar el envío del formulario por defecto

    // Obtener valores de nombre y apellido
    var primerNombre = $('#nombreMostrado').val();
    var primerApellido = $('#apellidoMostrado').val();

    // Mostrar la alerta de inscripción registrada con SweetAlert2
    Swal.fire({
      icon: 'success',
      title: 'Inscripción registrada',
      text: 'La inscripción para ' + primerNombre + ' ' + primerApellido + ' ha sido registrada.',
      confirmButtonText: 'Ir a inicio'
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirigir a la página de inicio
        window.location.href = '../Index.html';
      }
    });
  });

  // Manejar el clic del botón Cancelar
  $('#btnCancelar').click(function (e) {
    e.preventDefault();  // Evitar el envío del formulario

    // Mostrar mensaje de cancelación
    Swal.fire({
      icon: 'info',
      title: 'Inscripción cancelada',
      text: 'La inscripción ha sido cancelada por el usuario.'
    });
  });
});

function cancelarfichaNIngreso() {
  Swal.fire({
    icon: 'question',
    title: '¿Está seguro de cancelar la inscripción?',
    showCancelButton: true,
    confirmButtonText: 'Sí, cancelar',
    cancelButtonText: 'No, mantener inscripción'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Inscripción cancelada', 'La inscripción ha sido cancelada por el usuario.', 'info');
      limpiarFormulario1();
    }
  });
}


function limpiarFormulario1(){

  var formulario1 = document.getElementById("registroForm1");
    // Resetear los valores del formulario
    formulario1.reset();
}

//---------------------------------------------------------------------------------------------EleccionCarrera.html------------------------------------------------------
// valida que selecione campos en formulario antes de inscricibir
document.getElementById('datosIngresoForm').addEventListener('submit', function(event) {
  // Obtener valores de los campos
  var carrera = document.getElementById('carrera').value;
  var turno = document.getElementById('turno').value;

  // Verificar si los campos obligatorios están vacíos
  if (carrera === '' || turno === '') {
    // Evitar el envío del formulario si faltan campos
    event.preventDefault();
    alert('Por favor, complete todos los campos obligatorios.');
  }
});


function cancelarInscripcion() {
  Swal.fire({
    icon: 'question',
    title: '¿Está seguro de cancelar la inscripción?',
    showCancelButton: true,
    confirmButtonText: 'Sí, cancelar',
    cancelButtonText: 'No, mantener inscripción'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Inscripción cancelada', 'La inscripción ha sido cancelada por el usuario.', 'info');
      limpiarFormulario();
    }
  });
}

//Funcion que limpia formulario
function limpiarFormulario() {
  // Obtener referencia al formulario
  var formulario = document.getElementById("datosIngresoForm");
  
  // Resetear los valores del formulario
  formulario.reset();
}

