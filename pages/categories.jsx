import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";
import Steps from "../components/Steps";
import { getCategories,registerCategory } from "../lib/api";
import Categories from "../components/Categories";
import Button from "../components/Button"
import Input from "../components/Input";
import clsx from "clsx";

export default function categories() {

  const [categories, setCategories] = useState([])
  const [categoriesSelected, setCategoriesSelected] = useState([])
  const {register,handleSubmit} = useForm()

  const onSubmit = async (data )=> {    
    console.log('data:',data)
    let resultado = await registerCategory(data)
   console.log('resultado:',resultado)
 
  }

  useEffect(() => {
    getCategories()
      .then((response) => setCategories(response.categories))
  }, [])

  console.log('categories', categories, categoriesSelected)
  return (
    <>
      <Layout style='flex flex-col items-center'>
        <Steps step='w-2/3' />
        <div>
          <div className={clsx('flex flex-col md:flex-row w-full md:space-x-3')}>
            <div>
              <Categories
                section={'lugar'}
                arrCategory={categories}
                setCategoriesSelected={setCategoriesSelected}
                categoriesSelected={categoriesSelected} />
            </div>
            <div>
              <Categories 
              section={'consumibles'} 
              arrCategory={categories}
              setCategoriesSelected={setCategoriesSelected}
              categoriesSelected={categoriesSelected} 
               />
            </div>
            <div>
              <Categories 
              section={'entretenimiento'} 
              arrCategory={categories} 
              setCategoriesSelected={setCategoriesSelected}
              categoriesSelected={categoriesSelected} />
            </div>
            <div>
              <Categories 
              section={'complementos'}
               arrCategory={categories} 
               setCategoriesSelected={setCategoriesSelected}
               categoriesSelected={categoriesSelected} />
            </div>
          </div>

          <div className="w-full flex flex-col mt-7">
            <h2 className="{clsx('w-full')}">¿Tu servicio no está en la lista?</h2>
            <form  onSubmit={handleSubmit(onSubmit)} className={clsx('flex flex-col gap-y-5 w-auto mt-3 md:flex-row flex-1 ')}>
            <Input htmlFor='type'
                id='type'
                type='string'
                placeholder='Categoria ej: Lugar'
                message='error'
                register={register}/>

              <Input htmlFor='name'
                id='name'
                type='string'
                placeholder='Otro servicio'
                message='error'
                register={register}
              />
              <Button label='Crear' style='w-full md:ml-6' isSubmit />

            </form>

          </div>

        </div>

      </Layout>
    </>
  )
}