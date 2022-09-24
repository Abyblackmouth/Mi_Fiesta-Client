import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";
import Steps from "../components/Steps";
import { getCategories } from "../lib/api";
import Category from "../components/Category";
import Categories from "../components/Categories";
import Input from "../components/Input";
import clsx from "clsx";
export default function categories (){

const [categories, setCategories] = useState([])
const [categoriesSelected,setCategoriesSelected]=useState([])
const {register,handleSubmit} = useForm()
const addCategory = category =>{
  setCategoriesSelected([...categories,category])
}

useEffect( ()=>{
    getCategories()
    .then((response)=> setCategories(response.categories))
  },[])

  console.log('categories',categories)
    return (
    <>
    <Layout style=' flex flex-col items-center'>
        <Steps step='w-2/3'/>
         <div>
        <main className={clsx('md:flex justify-evenly gap-0  w-full')}>
          <div >
            <Categories section={'lugar'} arrCategory={categories}/>
          </div>
          <div>
          <Categories section={'consumibles'} arrCategory={categories}/>
          </div>
          <div>
          <Categories section={'entretenimiento'} arrCategory={categories}/>
          </div>
          <div>
          <Categories section={'complementos'} arrCategory={categories}/>
          </div>
        </main>
       <h2>¿Tienes algún otro servicio que no está en la lista?</h2>
       <Input htmlFor='service' 
                id='service'
                type='string'
                placeholder='Otro servicio'
                message='error'
                register={register}
                />
        </div>

    </Layout>
    </>
    )
}