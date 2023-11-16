$(document).ready(function () {
    console.log("El documento está listo. Iniciando el script...");
  
    $('#registroForm1').validate({
        rules: {
            primerNombre: 'required',
            segundoNombre: 'required',
            primerApellido: 'required',
            segundoApellido: 'required',
            fechaNacimiento: {
              required: true,
              maxDate: '2010-01-01' // Fecha máxima permitida (01 de enero de 2010)
            },
            dui: {
                required: true,
                pattern: /^[0-9]+([0-9]+)?$/
            },
            direccion: 'required',
            contacto: {
              required: true,
              pattern: /^[0-8]+([0-8]+)?$/
            },
            nombreInstitucion: 'required',
            telefonoInstitucion: 'required',
            tipoBachiller: 'required',
            tipoInstitucion: 'requerired'
            // Agrega reglas de validación para los otros campos
        },
        messages: {
            primerNombre: 'Por favor, ingresa el primer nombre.',
            segundoNombre: 'Por favor, ingresa el segundo nombre.',
            primerApellido: 'Por favor, ingresa el primer apellido.',
            segundoApellido: 'Por favor, ingresa el segundo apellido.',
            segundoNombre: 'Por favor, ingresa el segundo apellido.',
            fechaNacimiento: {
              required: 'Por favor, ingresa la fecha de nacimiento.',
              maxDate: 'La fecha debe ser anterior a 2010.'
            },
            dui: 'Por favor, ingresa la fecha de Dui con Guion.',
            direccion: 'Por favor, ingresa la direccion de domicilio actual',
            contacto: 'por favor, ingrese su información de contacto',
  
            // Agrega mensajes para los otros campos
            nombreInstitucion: 'por favor, ingrese el nombre de la intuticion',
            telefonoInstitucion: 'por favor, ingrese el telefono de la intitución',
            tipoBachiller: 'por favor, ingrese el tipo de bachiller',
            tipoInstitucion: 'por favor, ingrese el tipo de institución'
  
        },
        errorElement: 'span',
        errorPlacement: function (error, element) {
            error.addClass('invalid-feedback');
            element.closest('.form-group').append(error);
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass('is-invalid');
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass('is-invalid');
        }
    });
    $('#submitBtn').on('click', function () {
      if ($('#registroForm1').valid()) {
        // Capturar valores
        var primerNombre = $('#primerNombre').val();
        var primerApellido = $('#primerApellido').val();
    
        // Almacenar valores en localStorage
        localStorage.setItem("primerNombre", primerNombre);
        localStorage.setItem("primerApellido", primerApellido);
    
        // Redirigir a la otra página
        window.location.href = './interfaz/Eleccioncarrrera.html';
      }
    });
    
  });
  