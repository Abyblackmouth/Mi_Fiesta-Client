import Subtitle from "./Subtitle"
import Category from "./Category"

export default function Categories ({section,arrCategory}){

   const sectionsItems = arrCategory.filter((category)=>category.type == section)
   console.log('sections items:',sectionsItems)
    return(
    <>
    <Subtitle>{section}</Subtitle>
    {sectionsItems.map((item)=>{
        return <Category  key={`${item._id}`} etiqueta={item.name}/>
    })}

    </>)
}