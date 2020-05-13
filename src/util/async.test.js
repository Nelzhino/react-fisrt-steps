import { getDataCallback, getDataPromise, getDataPromiseError, getUserHttp } from './async'

describe('Pruebas para callbacks', () => {
    
    test('Haciendo test a callbacks', (done) => {
        getDataCallback((user) => {
            expect(user).toMatchObject({ name: 'Pepe' })     
            done()
        })
    });

    test('Haciendo test a promesa', (done) => {
        getDataPromise()
          .then((product) => {
            expect(product).toMatchObject({ price: 25 })
            done()
          })
      })
    
      test('Haciendo test a promesa con expect', () => {
        return expect(getDataPromise()).resolves.toHaveProperty('name', 'bean')
      })
    
      test('Haciendo test a promesa rechazada', (done) => {
        getDataPromiseError()
          .then((name) => {
          })
          .catch((error) => {
            expect(error).toBe('Error')
            done()
          })
      })
    
      test('Haciendo test a promesa rechazada con expect ', () => {
        return expect(getDataPromiseError()).rejects.toBe('Error')
      })
    
      test('Haciendo test a promesa con async await expect', async() => {
            const product = await getDataPromise()
            expect(product).toMatchObject({ price: 25 })
      })

      test('Haciendo test a promesa rechazada async await con expect ', async() => {
            try {
                const product = await getDataPromiseError()
                expect(product).toMatchObject({ price: 25 })
            } catch (error) {
                expect(error).toBe('Error')
            }
      })


      test('Probando promesa con solicitud HTTP', async() => {
          const user = await getUserHttp();

          expect(user).toHaveProperty("id")
          expect(user).toHaveProperty("username")
          expect(user).toHaveProperty("email")
      })
})
