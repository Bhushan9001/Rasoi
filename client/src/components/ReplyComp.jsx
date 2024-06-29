import React,{useState} from 'react'
import boy from '../assets/boy.png';

const ReplyComp = () => {


    return (
        <div className='py-2 flex flex-col space-y-2'>
            <div className='flex space-x-4'>
                <img className="w-10 h-10" src={boy} alt="avatar" />
                <input
                    placeholder='Add a reply...'
                    className='outline-none border-b-2 border-[#76767744] focus:border-[#10111144] text-xl font-normal font-poppins'
                />
            </div>

                <div className='flex space-x-3 justify-end '>
                    <button
                        className='bg-[#c3c5c3] font-poppins rounded-full text-sm px-4 py-2 font-medium'
                    >
                        Cancel
                    </button>
                    <button
                        className='bg-[#68F665] font-poppins rounded-full text-sm px-4 py-2 font-medium'
                    >
                        Reply
                    </button>
                </div>
        </div>
    )
}

export default ReplyComp