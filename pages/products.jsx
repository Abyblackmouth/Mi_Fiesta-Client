import Empty from "../components/empty";
import Layout from "../components/Layout";
import NavGeneral from "../components/home/NavGeneral";
import Title from "../components/Title";
import GridProducts from "../components/provider/GridProducts";

export default function products (){
  return(
    <>
        <Layout style='flex justify-center' >

            <NavGeneral />

            <div className="flex flex-col  w-full">

              <div className='w-ful h-12  flex flex-col justify-center bg-red items-center'>
                <Title>Productos</Title>
              </div>
            
              <GridProducts />

            </div>
        </Layout>
    </>

  )
}

