import React, { useState } from 'react'
import { AddCategory,GifGrid } from './components'

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['One punch']);

  //Agregar una categoria
  
  const onAddCategory = ( newCategory ) => 
  {
    // console.log(newCategory);
    if( categories.includes(newCategory) ) {
      return alert('La categoria ya existe!!')
    };

    setCategories([newCategory, ...categories] );

  }

  return (
    <>
        <h1>GifExpertApp</h1>


        <AddCategory 
            onNewCategory={ onAddCategory }
        />

        { 
          categories.map( category => (
            <GifGrid
              key={category} 
              category={ category }/>
          )
          )
        }

    </>
  )
} 
  