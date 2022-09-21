const baseUrl = 'http://localhost:8081/'

async function registerCustomer(data) {
    let result = await fetch(
    `${baseUrl}customer`,
        {
          method: 'POST',
          mode:'cors',
            headers:{'Content-Type':'application/json'},
          body: JSON.stringify(data)
        }
      )
      console.log(result)
      let customer = await result.json()
      console.log("customer:", customer)
      return customer.data.newCustumer
}

export {registerCustomer}