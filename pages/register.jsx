import Layout from "../components/Layout";
import Register from "../components/Register";
import Steps from "../components/Steps";

export default function RegisterPage(){
    return(
        <Layout style=' flex flex-col items-center'>
            <Steps step='w-1/4'></Steps>
            <Register></Register>
        </Layout>
    )
}
