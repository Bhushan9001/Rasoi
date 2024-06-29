import React, { useState } from 'react'
import boy from '../assets/boy.png';

const ReplyComp = () => {

    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleCancel = () => {
        setIsFocused(false);
        setInputValue('');
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        console.log('Comment submitted');
        setIsFocused(false);
        setInputValue('');
    };


    return (
        <div className='py-2 flex flex-col space-y-2'>
            <div className='flex space-x-4'>
                <img className="w-10 h-10" src={boy} alt="avatar" />
                <input
                    placeholder='Add a reply...'
                    className='outline-none border-b-2 border-[#76767744] focus:border-[#10111144] text-xl font-normal font-poppins'
                    onFocus={handleFocus}
                    onChange={handleChange}
                    value={inputValue}
                />
            </div>

            <div className='flex space-x-3 justify-end '>
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
                    Reply
                </button>
            </div>
        </div>
    )
}

export default ReplyComp