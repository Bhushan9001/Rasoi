import React, { useState } from 'react'
import IngredientComp from '../components/IngredientComp'
import InstructionComp from '../components/InstructionComp'
import { IoChevronBack } from "react-icons/io5";
import { Link } from 'react-router-dom'

const AddRecipe = () => {


    const [image, setImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChangeClick = () => {
        document.getElementById('dropzone-file').click();
    };

    return (
        <>

            <div className='px-10 py-8'>

                <div className='flex justify-center items-center space-x-10 px-5 md:px-0'>

                    <Link to={"/"} className='flex justify-center items-center text-center pl-5 fixed left-0 cursor-pointer'>
                        <IoChevronBack size={33} color={'#228b21'} />
                        <div className='text-2xl font-barlow-condensed md:flex hidden text-[#228b21]'>Back To Home</div>
                    </Link>

                    <div className='md:px-20 font-barlow-condensed text-4xl font-semibold mt-3 text-[#228b21]'>Create Your Own Recipe</div>
                </div>

                

                <div className='md:flex w-full space-x-9 my-5'>

                    <div className='w-full md:w-1/3 flex text-center justify-center my-5 md:my-0'>
                        <label
                            htmlFor="dropzone-file"
                            className={`flex flex-col items-center justify-center w-full h-64 md:w-96 md:h-96 rounded-lg cursor-pointer ${image ? '' : 'bg-gray-200 hover:bg-gray-100 border-2 border-gray-300 border-dashed'}`}
                        >
                            <div className="flex flex-col items-center justify-center w-full h-full pt-5 pb-6">
                                {image ? (
                                    <>
                                        <img src={image} alt="Uploaded" className="w-full h-full object-contain" />
                                        <button
                                            type="button"
                                            onClick={handleChangeClick}
                                            className='font-medium font-poppins text-[#279025] mt-2'
                                        >
                                            Would you like to Change?
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <svg
                                            className="w-8 h-8 mb-4 text-gray-500"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 16"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                            />
                                        </svg>
                                        <p className="mb-2 text-xl text-gray-500">
                                            <span className="font-semibold">Click to upload</span> or drag and drop
                                        </p>
                                        <p className="text-sm text-gray-800">SVG, PNG, JPG</p>
                                    </>
                                )}
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" onChange={handleImageUpload} />
                        </label>
                    </div>


                    <div className='w-full md:w-2/3 md:flex'>

                        <div className='w-full md:w-1/2'>
                            <div className='py-2 md:pb-1'>
                                <div className='font-barlow-condensed text-2xl py-2 font-medium'>Recipe Title</div>
                                <input type="text" className="font-barlow-condensed px-1 py-2 border-b-2 border-[#83f181] outline-none w-[70%] text-2xl" placeholder="Title" required />
                            </div>

                            <div className='py-2 md:py-1'>
                                <div className='font-barlow-condensed text-2xl py-2 font-medium'>Cuisine</div>
                                <input type="text" className="font-barlow-condensed px-1 py-2 border-b-2 border-[#83f181] outline-none w-[70%] text-2xl" placeholder="Indian ,Italian ,etc.." required />
                            </div>

                            <div className='py-2 md:py-1'>
                                <div className='font-barlow-condensed text-2xl py-2 font-medium'>Type</div>
                                <input type="text" className="font-barlow-condensed px-1 py-2 border-b-2 border-[#83f181] outline-none w-[70%] text-2xl" placeholder="Breakfast ,Lunch ,etc.." required />
                            </div>
                        </div>

                        <div className='py-2 md:py-1 w-full md:w-1/2'>
                            <div className='font-barlow-condensed text-2xl py-2 font-medium'>Description</div>
                            <textarea type="textarea" rows="5" className="font-barlow-condensed px-1 py-2 border-b-2 border-[#83f181] outline-none w-[70%] text-2xl" placeholder="Description" required />
                        </div>

                    </div>
                </div>

                <div className='md:flex w-full space-x-9 font-barlow-condensed'>
                    <div className='w-full md:w-1/3 ps-8 md:ps-28 pb-5 md:pb-0'>
                        <div className='text-3xl py-2 font-medium'>
                            Add Ingredients
                        </div>

                        <IngredientComp />

                    </div>

                    <div className='w-full md:w-2/3'>
                        <div className='text-3xl py-2 font-medium'>
                            Instructions
                        </div>

                        <InstructionComp />

                    </div>
                </div>

                <div className='flex justify-center pt-24'>
                    <button className='bg-[#68F665] px-6 md:px-10 py-3 md:py-4 font-medium font-poppins mt-5 md:mt-7 rounded-full'>
                        Submit
                    </button>
                </div>




            </div>
        </>
    )
}

export default AddRecipe