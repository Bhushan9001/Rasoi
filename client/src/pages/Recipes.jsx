import React, { Suspense, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import axios from 'axios'
import plus from '../assets/plus.png'
import search from '../assets/search.png'
import { IoChevronBack } from "react-icons/io5";
import CardSkeleton from '../components/CardSkeleton'

const Recipes = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([])
  const random = [1,2,3,4,5,6];
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/addrecipe');
  }


  useEffect(() => {
    setLoading(true);
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/recipes');
        if (response.data) {
          console.log(response.data.recipes)
          setRecipes(response.data.recipes);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

   setInterval(()=>{
    fetchRecipes()
   },500)
  }, [])

  return (
    <>
      <div className='py-5'>
        <div className='flex justify-start items-center space-x-10 px-5 md:px-0'>

          <Link to={"/"} className='flex justify-start items-center text-center pl-5 cursor-pointer'>
            <IoChevronBack size={33} color={'#228b21'} />
            <div className='text-2xl font-barlow-condensed md:flex hidden text-[#228b21]'>Back To Home</div>
          </Link>
          <div className='w-80 hidden md:flex'></div>


          <div className='text-5xl font-semibold font-barlow-condensed text-center py-5'>
            Delicious Discoveries
          </div>
        </div>


        <div className='md:flex px-6 md:px-60 items-center justify-between'>

          <div className='md:flex justify-center items-center mx-4 md:mx-4 space-x-4 md:space-x-14'>
            <div className="w-full md:flex-shrink-0 md:max-w-md flex items-center">
              <div className="relative mb-4 mt-5 flex items-stretch border-2 h-10 pl-4 border-solid border-[#4fd64d] rounded-md w-full">
                <input
                  type="search"
                  className='w-full border-none outline-none text-xl font-barlow-condensed'
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                  value={searchQuery}
                  onChange={handleSearch}
                />
                <img src={search} alt="Search" className='p-2' />
              </div>
            </div>

            <form className="px-3 md:flex-shrink-0">
              <select id="underline_select" className="block w-full md:w-auto px-4 py-3 text-xl font-barlow-condensed bg-transparent border-0 border-b-2 border-[#4fd64d] focus:outline-none focus:ring-0 focus:border-[#4fd64d] peer">
                <option selected>Choose Cuisine</option>
                <option value="">Indian</option>
                <option value="">Italian</option>
                <option value="">French</option>
                <option value="">Chinese</option>
              </select>
            </form>
          </div>

          <div className='flex space-x-3 md:space-x-5 pt-8 ps-10'>
            <div className='text-4xl md:text-5xl font-semibold font-barlow-condensed text-[#228b21]'>Add Yours</div>
            <img className='w-12 h-12 md:w-16 md:h-16 animate-bounce hover:cursor-pointer' src={plus} alt='plus' onClick={handleClick} />
          </div>
        </div>


        {
          loading ? <div className='flex flex-wrap justify-center'>{random.map(()=><CardSkeleton/>)}</div> : 
          <div className='flex flex-wrap justify-center'>
            {
              recipes && recipes.filter((recipe) =>
                recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                recipe.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
                recipe.authorName.toLowerCase().includes(searchQuery.toLowerCase())
              ).map((recipe) => (

                <Card key={recipe.id} img={recipe.imageurl} title={recipe.title} cuisine={recipe.cuisine} chef={recipe.authorName} id={recipe.id} />

              ))
            }
          </div>
        }

      </div>
    </>
  )
}
export default Recipes
