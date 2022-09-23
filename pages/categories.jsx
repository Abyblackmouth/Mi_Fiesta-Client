import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Steps from "../components/Steps";
import { getCategories } from "../lib/api";

export default function categories (){

const [categories, setCategories] = useState([])

useEffect( ()=>{
    getCategories()
    .then((response)=> setCategories(response.categories))
  },[])

  console.log('categories:',categories)
    return (
    <>
    <Layout style='flex justify-center'>
        <Steps step='w-1/2'/>
         
         {
          categories.map((cv,index)=>{
            
            return <p> {cv.name}</p>
          })
           
          }
        
    </Layout>
    </>
    )
}