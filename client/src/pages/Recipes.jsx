import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from 'axios'
import Navbar from '../components/Navbar'

const Recipes = () => {
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
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
  }, [])

  return (
    <>
    <div className='py-5'>
      <div className='text-5xl font-semibold font-barlow-condensed text-center py-5'>
        Delicious Discoveries
      </div>
      <div className='flex flex-wrap justify-center'>
        {
          recipes && recipes.map((recipe) => (
            <Card img={recipe.imageurl} title={recipe.title} cuisine={recipe.cuisine} chef={recipe.authorName} />
          ))
        }
      </div>

      {/* <div className='ps-36 font-barlow-condensed text-4xl font-semibold py-4'>
        Delicious Discoveries
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center'>
        {recipes && recipes.map((recipe) => {
          const imgPath = recipe.imageurl.replace(/\\/g, '/');
          return (
            <Card 
              key={recipe.title} 
              img={imgPath} 
              title={recipe.title} 
              cuisine={recipe.cuisine} 
              chef={recipe.authorName} 
            />
          );
        })}
      </div> */}
    </div>
    </>
  )
}

export default Recipes
