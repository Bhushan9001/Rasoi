import React from 'react'
import addrecipe from '../assets/addrecipe.png'

const AddRecipe = () => {
    return (
        <>
            <div>
                <div className='w-full h-screen md:w-1/2 flex justify-center'>
                    <div className='w-[80%] bg-[#78ED75] -ml-32'></div>
                    <img className='w-60 md:w-72 h-64 md:h-80 z-20 -ml-32 self-center' src={addrecipe} alt='img' />
                </div>
            </div>
            <div>

            </div>
        </>
    )
}

export default AddRecipe