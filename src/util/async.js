
export const getDataCallback = (callback) => {

    const user = {
        name: 'Pepe',
        age: 21
    }
    
    setTimeout(() => {
        callback(user)
    }, 2000);
}

export const getDataPromise = () => {

    const product = {
        name: 'bean',
        price: 25
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(product)
      }, 300)
    })
  }
  
  export const getDataPromiseError = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Error')
      }, 300)
    })
  }


  export const getUserHttp = async () => {
      const response = await fetch('http://jsonplaceholder.typicode.com/users/3')
      const user = await response.json()
      return user;
  }