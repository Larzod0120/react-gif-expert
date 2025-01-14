import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);


    const onAddCategory = ( newCategory ) =>{

        if(categories.includes(newCategory)) return;

        //agregar una nueva categoría
        setCategories( [ newCategory, ...categories]);
        // setcategories( cat => [...cat, 'One Piece']);

    }
    




  return (
    <>

        {/* Titulo */}
        <h1>GifExpertApp</h1>


        {/* Input */}
        <AddCategory 
        
            onNewCategory={ onAddCategory }
            
        />


        { categories.map( category =>(
                <GifGrid 
                    key={ category } 
                    category={ category } 
                /> 
            )) 
        }
        {/* <li>H</li> */}



    </>
  )
}


