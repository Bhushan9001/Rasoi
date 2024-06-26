import React, { useEffect, useState } from 'react'
import dosa from '../assets/dosa.png';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeDetail = () => {

  const [recipe, setRecipe] = useState({})
  const { id } = useParams();
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/recipe/getRecipes/${id}`);
        if (response.data) {
          console.log(response.data.recipe);
          setRecipe(response.data.recipe);
        }
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipes();
  }, [])

  const calculateDaysSinceCreated = (createdDate) => {
    const created = new Date(createdDate);
    const now = new Date();
    const differenceInTime = now - created;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
};

const daysSinceCreated = calculateDaysSinceCreated(recipe.createdAt);

  return (
    <div className='md:flex w-full'>
      <div className='px-6 md:px-12 py-7 w-full md:w-2/6'>
        <div className='font-semibold text-5xl font-barlow-condensed text-[#037800]'>
          {recipe.title}
        </div>

        <div className='text-3xl font-barlow-condensed font-normal py-4 flex space-x-3'>
          <div>Cuisine : <span className='font-semibold text-[#428C41]'>{recipe.cuisine}</span></div>
          <div>Type : <span className='font-semibold text-[#428C41]'>{recipe.type}</span></div>
        </div>

        <div className='font-poppins font-medium text-xl'>
          {recipe.description}
        </div>


        <img className='mt-8 my-6 w-96 md:w-[95%] h-60 rounded-xl' src={recipe.imageurl} alt='Dosa' />

      </div>

      <div className='px-6 md:px-0 py-7 w-full md:w-4/6'>
        <div>
          <div className='text-4xl font-semibold font-barlow-condensed'>
            Ingredients
          </div>
          <div className='py-6 px-4'>
            <table className='text-xl font-normal font-poppins'>
              <tbody>
                {recipe && Array.isArray(recipe.ingredients) && recipe.ingredients.map((ingredient, index) => {
                  return (
                    <tr key={index}>
                      <td className='w-28'>{ingredient.name}</td>
                      <td className='w-28'>{ingredient.quantity}</td>
                    </tr>
                  );
                })}

              </tbody>

            </table>
          </div>
        </div>

        <div className='pe-0 md:pe-24'>
          <div className='text-4xl font-semibold font-barlow-condensed'>
            Instructions
          </div>
          <div className='m-6 p-6 rounded-lg border-2 border-[#68F665] text-xl font-poppins font-normal'>
            <ol className='ps-7 list-decimal space-y-3'>
              {recipe&&Array.isArray(recipe.instruction)&&recipe.instruction.map((inst)=>{
                return <li key={inst}>{inst}</li>
              })}
            </ol>
          </div>

          <div className='text-right font-extralight me-10 font-ubuntu italic'>
            <div>By {recipe.authorName}</div>
            <div>{daysSinceCreated} days ago</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RecipeDetail