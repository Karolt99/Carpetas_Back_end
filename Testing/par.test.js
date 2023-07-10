const {esPar} = require('./par')

test('Todas las pruebas se cumplieron con exito', () => {
expect(esPar(4)).toBe(true)
expect(esPar(7)).toBe(false)
expect(esPar(0)).toBe(true)
expect(esPar(-3)).toBe(false)
expect(esPar(3.5)).toBe(false)
})