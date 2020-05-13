import { getSaludo, getId, getDespedida } from './string'

describe('Pruebas de string', () => {

    const saludo = getSaludo('Pepe')
    const placa = getId()
    const saludoDespedida = getDespedida()
    
    test('Prueba 1: function saludo', () => {
        expect(saludo).toMatch('Hi my name is')
    })

    test('Prueba 2: function id', () => {
        expect(placa).toMatch(/\d{2}-\d{3}/)
    })

    test('Prueba 3: function despedida not match', () => {
        expect(saludoDespedida).not.toMatch("Hola")
    })
    
})
