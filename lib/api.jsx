const baseUrl = 'http://localhost:8081/'

async function registerCustomer(data) {
  let result = await fetch(
    `${baseUrl}customer`,
    {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }
  )
  console.log(result)
  let customer = await result.json()
  console.log("customer newcustomer:", customer.data)
  return customer.data
}

async function getCategories() {
  let result = await fetch(
    `${baseUrl}category`,
    {
      method: 'GET',
      mode: 'cors',
      headers: { 'Content-Type': 'aplication/json' }
    }
  )
  let categories = await result.json()
  console.log(categories)
  return categories.data
}
export { registerCustomer, getCategories }