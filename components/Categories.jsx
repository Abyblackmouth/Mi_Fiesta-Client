import Subtitle from "./Subtitle"
import Category from "./Category"

export default function Categories ({section,arrCategory,style}){

   const sectionsItems = arrCategory.filter((category)=>category.type == section)
   console.log('sections items:',sectionsItems)
    return(
    <>
    <Subtitle>{section}</Subtitle>
    {sectionsItems.map((item)=>{
        return <Category style={'my-2'} key={`${item._id}`} label={item.name}/>
    })}

    </>)
}