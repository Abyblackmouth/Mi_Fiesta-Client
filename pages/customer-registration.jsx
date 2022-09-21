import Button from "../components/Button"
import FormCustomer from "../components/FormCustomer"
import Layout from "../components/Layout"
import Steps from "../components/Steps"

export default function CustomerRegistration() {
  return (
    <>
    <Layout style=' flex flex-col items-center'>
        <Steps step='w-1/2'/>
        <div className="w-1/2 flex">
    <FormCustomer /> 
    </div>
    </Layout>
    </>
  )
}
