import React, { useState } from 'react';
import boy from '../assets/boy.png';
import Avatar from './Avatar';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../atoms/userAtom';
import axios from 'axios';
const ReplyComp = ({ recipeId , commentsId }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const user = useRecoilValue(userAtom);
    const token = localStorage.getItem('token');
    console.log(recipeId,commentsId);
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

    const handleSubmit = async() => {
        const response = await axios.put(`http://localhost:8080/recipes/${recipeId}/comments/${commentsId}/addReply`,{reply:inputValue},{
            headers:{
                'Authorization': token,
            }
        })
        console.log(response);
        setIsFocused(false);
        setInputValue('');
    };
    
    return (
        <div className='pt-2 flex flex-col space-y-2 w-full'>
            <div className='flex space-x-4'>
            {user ? <Avatar name={user}/>: <div>
            <img className="w-10 h-10" src={boy} alt="Landing" />
          </div>}
                    <input
                        placeholder='Add a reply...'
                        className='w-[80%] md:w-[60%] outline-none border-b-2 border-[#76767744] focus:border-[#10111144] text-xl font-normal font-poppins'
                        onFocus={handleFocus}
                        onChange={handleChange}
                        value={inputValue}
                    />
            </div>
            <div className='flex space-x-3 justify-end w-full md:w-[63%]'>
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
    );
};

export default ReplyComp;
