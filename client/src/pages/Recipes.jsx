import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from 'axios'

const Recipes = () => {
  const [recipes,setRecipes]=useState([])
  useEffect(()=>{
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/recipe/getRecipes');
        if (response.data) {
          console.log(response.data.recipes)
          setRecipes(response.data.recipes);
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  },[])

  return (
    <>
      <div className='ps-36 font-barlow-condensed text-4xl font-semibold py-4'>
        Delicious Discoveries
      </div>
      <div className='flex flex-wrap justify-center'>

        {
          recipes && recipes.map((recipe)=>(
            <Card img={recipe.imageurl} title={recipe.title} cuisine={recipe.cuisine} chef={recipe.authorName}/>
          ))
        }
        
      </div>
    </>

  )
}

export default Recipes
