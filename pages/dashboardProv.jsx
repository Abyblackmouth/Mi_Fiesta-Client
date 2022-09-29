import Card from "../components/Card";
import Empty from "../components/empty";
import Layout from "../components/Layout";
import NavGeneral from "../components/home/NavGeneral";
import CardRequest from "../components/provider/CardRequest";
import CardTask from "../components/provider/CardTask";
import CardCalendar from "../components/provider/CardCalendar";

export default function dashboardProv (){
  return(
    <>
        <Layout style='flex justify-center ' >
            
            <NavGeneral />

            <div className="flex space-x-1 lg:space-x-3">
              <CardRequest /> 

              <CardTask /> 
          
              <CardCalendar />

            </div>
        </Layout>
    </>

  )
}
