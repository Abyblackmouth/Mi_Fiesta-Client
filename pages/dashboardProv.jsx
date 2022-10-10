import Card from "../components/Card";
import Empty from "../components/empty";
import Layout from "../components/Layout";
import NavGeneral from "../components/home/NavGeneral";
import CardRequest from "../components/provider/CardRequest";
import CardTask from "../components/provider/CardTask";
import CardCalendar from "../components/provider/CardCalendar";
import CardProduct from "../components/provider/CardProduct";
import Title from "../components/Title";

export default function dashboardProv (){
  return(
    <>
        <Layout className='flex justify-center ' >
            
            <NavGeneral />

            <div className='w-ful h-12  flex justify-center bg-red items-center'>
              <Title>Mis Eventos</Title>
            </div>

            <div className="flex ">

              <CardProduct /> 

              <CardRequest /> 
              
              <CardTask />             
          
              <CardCalendar />

            </div>
        </Layout>
    </>

  )
}
