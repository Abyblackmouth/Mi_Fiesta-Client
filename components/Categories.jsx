import Subtitle from "./Subtitle"
import Category from "./Category"

export default function Categories ({section,arrCategory,style,setCategoriesSelected,categoriesSelected}){

   const sectionsItems = arrCategory.filter((category)=>category.type == section)
   console.log('sections items:',sectionsItems)

   const handleOnClick =(nameCategory)=>{
    const allCategories = [...categoriesSelected,nameCategory]
    console.log('diste clic en la categoria', nameCategory )
    console.log('all categories',allCategories)
    setCategoriesSelected(allCategories)
   }
    return(
    <>
    <Subtitle>{section}</Subtitle>
    {sectionsItems.map((item)=>{
        return <Category style={'my-2 '} key={`${item._id}`} label={item.name} onClick={()=>handleOnClick(item.name)}/>
    })}

    </>)
}