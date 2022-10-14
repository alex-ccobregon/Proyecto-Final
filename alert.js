//Swal.fire({
//    title: 'Bienvenido!!',
//    text: 'clickea fuera del cuadro para continuar...',
//    backdrop: 'true',
//    showConfirmButton: false
//});
Swal.fire({
    icon: 'warning',
    title: 'Bienvenido!!',
    input: 'checkbox',
    inputValue: 1,
    inputPlaceholder:
      'Acepto las cookies para mejora de experiencia de usuario.🤖',
    confirmButtonText:
      'Continuar <i class="fa fa-arrow-right"></i>',
    inputValidator: (result) => {
      return !result && 'Si no aceptas no tendras la mejor experiencia que ofrecemos.😐'
    }
  })
