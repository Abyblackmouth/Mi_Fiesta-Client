import Button from "../components/Button"
import FormCustomer from "../components/FormCustomer"
import Layout from "../components/Layout"
import FormProv from "../components/FormProv"
import Steps from "../components/Steps"

export default function CustomerRegistration() {
  return (
<>
    <Layout style=' flex flex-col items-center'>
        <Steps step='w-1/2'/>
        <div className="w-1/2 flex">
            <FormProv> </FormProv>
        </div>

    </Layout>


</>


  )
}