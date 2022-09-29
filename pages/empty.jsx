import Empty from "../components/empty";
import Layout from "../components/Layout";
import NavGeneral from "../components/home/NavGeneral";

export default function HomeEmpty (){
  return(
    <>
        <Layout style='flex justify-center' >
            <NavGeneral />
            <Empty />
        
        </Layout>
    </>

  )
}

