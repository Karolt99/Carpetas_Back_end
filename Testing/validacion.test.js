const validarContrasena = require('./validaciones')

test('Cumplio las pruebas realizadas', ()=>{
const contrasenaValida='TatiKa123'
const contrasenaValida2='BACKEND1234'
const contrasenaNoValida1='123'
const contrasenaNoValida2='paranoia'


//Pruebas
expect(validarContrasena(contrasenaValida)).toBe(true)
expect(validarContrasena(contrasenaValida2)).toBe(true)
expect(validarContrasena(contrasenaNoValida1)).toBe(false)
expect(validarContrasena(contrasenaNoValida2)).toBe(false)
})