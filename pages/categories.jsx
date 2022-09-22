import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Steps from "../components/Steps";
import Category from "../components/Category";

export default function categories (){

const [categories, setCategories] = useState([])

useEffect( ()=>{
    fetch("http://localhost:8081/category/")
    .then((response)=> response.json())
    .then(json =>{
      setCategories(json.data)
     
    console.log(json.data)
    })
  },[])

    return (
    <>
    <Layout style='flex justify-center'>
        <Steps step='w-1/2'/>
         
         {
            console.log("esto es categories",categories)
          }
        
    </Layout>
    </>
    )
}