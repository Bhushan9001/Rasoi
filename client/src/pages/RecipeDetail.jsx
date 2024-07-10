import React, { useEffect, useState } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { IoChevronBack } from "react-icons/io5";
import boy from '../assets/boy.png';
import CommentComp from '../components/CommentComp';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../atoms/userAtom';
import Avatar from '../components/Avatar';
import { WhatsappShareButton, FacebookShareButton, WhatsappIcon, FacebookIcon, LinkedinShareButton, LinkedinIcon, TelegramShareButton, TelegramIcon } from "react-share";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import DetailsSkeleton from '../components/DetailsSkeleton';
import { Bounce, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RecipeDetail = () => {

  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState(false)
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [recipe, setRecipe] = useState({})
  const { id } = useParams();
  const user = useRecoilValue(userAtom);
  const imageurl = `http://localhost:8080${recipe.imageurl}`;
  const token = localStorage.getItem('token');

  const url = `http://localhost:5173/recipes/${recipe.id}`;
  const title = `${recipe.title} Recipe`;

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleSent = () => {
    setFlag(true);
  }

  const handleCancel = () => {
    setIsFocused(false);
    setInputValue('');
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    console.log('Comment submitted');
    const response = await toast.promise(axios.post(`http://localhost:8080/recipes/${recipe.id}/comments`, { text: inputValue }, {
      headers: {
        'Authorization': token,
      }
    }), {
      pending: 'Adding Comment',
      success: 'Comment added successfully👌',
      error: 'Error while adding comment😶'
    }, { theme: "dark", autoClose: 2000 })
    console.log(response.data);
    setIsFocused(false);
    setInputValue('');
    fetchRecipes();
  };

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND}/recipes/${id}`);
      if (response.data) {
        console.log(response.data.recipe);
        setRecipe(response.data.recipe); setLoading(false);

      }
    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
  };

  useEffect(() => {
    setLoading(true);
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
    <> <ToastContainer transition={Bounce}/>
      <Link to={"/recipes"} className='flex justify-start items-center text-center pl-5 cursor-pointer pt-7'>
        <IoChevronBack size={33} color={'#228b21'} />
        <div className='text-2xl font-barlow-condensed md:flex hidden text-[#228b21]'>Back To Recipes</div>
      </Link>

      {
        loading ?
          (
            <DetailsSkeleton />
          ) :
          (<div>
            <div className='md:flex w-full '>

              <div className='px-6 md:px-12 pt-4 pb-7 w-full md:w-2/6'>
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


                <img className='mt-8 my-6 w-96 md:w-[95%] h-60 md:h-96 rounded-xl' src={imageurl} alt='Dosa' />

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
                      {recipe && Array.isArray(recipe.instruction) && recipe.instruction.map((inst) => {
                        return <li key={inst}>{inst}</li>
                      })}
                    </ol>
                  </div>

                  <div className='md:flex justify-between px-7 items-center'>

                    <div className='flex items-center space-x-1 md:space-x-2 bg-[#68F665] border-2 border-[#68F665] px-6 md:px-8 py-3 md:py-3 font-medium font-poppins rounded-full'>
                      <div>Share with friends</div>

                      {
                        flag === false && (
                          <PiPaperPlaneTiltFill size={35} className='hover:cursor-pointer p-1' onClick={handleSent} />
                        )
                      }
                      {
                        flag === true && (
                          <>
                            <WhatsappShareButton title={title} url={url} className='icon'>
                              <WhatsappIcon size={35} round />
                            </WhatsappShareButton>

                            <FacebookShareButton url={url} quote={title} className='icon'>
                              <FacebookIcon size={35} round />
                            </FacebookShareButton>

                            <LinkedinShareButton url={url} quote={title} className='icon'>
                              <LinkedinIcon size={35} round />
                            </LinkedinShareButton>

                            <TelegramShareButton url={url} quote={title} className='icon'>
                              <TelegramIcon size={35} round />
                            </TelegramShareButton>
                          </>
                        )
                      }



                    </div>


                    <div className='text-right font-extralight me-10 font-ubuntu italic my-2 md:my-0'>
                      <div>By {recipe.authorName}</div>
                      <div>{daysSinceCreated} days ago</div>
                    </div>

                  </div>



                </div>
              </div>


            </div>

            <div className='px-10 md:px-24'>
              <div className='font-barlow-condensed text-3xl font-semibold'>
                {Array.isArray(recipe.comments) ? recipe.comments.length : 0} Comments
              </div>

              <div className='pt-6 pb-3 flex flex-col space-y-2'>
                <div className='flex space-x-4'>
                  {user ? <Avatar name={user} /> : <div>
                    <img className="w-10 h-10" src={boy} alt="Landing" />
                  </div>}
                  <input
                    placeholder='Add a comment...'
                    className='outline-none border-b-2 border-[#76767744] focus:border-[#10111144] w-[70%] md:w-[60%] text-xl font-normal font-poppins'
                    onFocus={handleFocus}
                    onChange={handleChange}
                    value={inputValue}
                  />
                </div>

                {isFocused ? (
                  <div className='flex space-x-3 justify-end w-[85%] md:w-[63%]'>
                    <button
                      className='bg-[#c3c5c3] font-poppins rounded-full text-sm px-4 py-2 font-medium'
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                    <button
                      className='bg-[#68F665] font-poppins rounded-full text-sm px-4 py-2 font-medium'
                      onClick={handleSubmit}
                    >
                      Comment
                    </button>
                  </div>
                ) : (
                  <div className='h-9'></div>
                )}
              </div>

              {recipe && Array.isArray(recipe.comments) && recipe.comments.map((comment, index) => {
                return <CommentComp key={index} name={comment.author.name} text={comment.text} commentLikes={comment.likes} days={calculateDaysSinceCreated(comment.createdAt)} replies={comment.replies} id={comment.id} recipeId={recipe.id} />
              })}

            </div>
          </div>)

      }




    </>
  )
}

export default RecipeDetail
