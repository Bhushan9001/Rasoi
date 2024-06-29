import React, { useState } from 'react'
import boy from '../assets/boy.png';
import like from '../assets/like.png';
import liked from '../assets/liked.png';
import ReplyComp from './ReplyComp';

const CommentComp = ({name,text,likes,days}) => {
    const [reply,setReply]=useState(false)

    const handleReply=()=>{
        setReply(!reply)
    }
    const [L_flag, setL_Flag] = useState(false)

    const handleLike = () => {
        setL_Flag(!L_flag)
    }

    const [D_flag, setD_Flag] = useState(false)

    const handleDislike = () => {
        setD_Flag(!D_flag)
    }


    return (
        <div>
            <div className='py-5 flex space-x-5 items-center w-full md:w-[60%] font-poppins'>
                <img className="w-10 h-10" src={boy} alt="avatar" />
                <div>
                    <div className='flex space-x-3 items-center'>
                        <div className='text-base '>{name}</div>
                        <div className='text-[#686767] text-sm'>{days} days ago</div>
                    </div>
                     
                    <div className='text-xl font-normal'>{text}.</div>

                    <div className='py-2 flex space-x-4'>
                        <div>
                            {
                                L_flag === false ? (
                                    <div className='flex space-x-1'>
                                        <img className="w-6 h-6 hover:cursor-pointer" src={like} onClick={handleLike} alt="like" />
                                        <span className='text-[#686767]'>{likes}</span>
                                    </div>
                                ) : (
                                    <div className='flex space-x-1'>
                                        <img className="w-6 h-6 hover:cursor-pointer" src={liked} onClick={handleLike} alt="liked" />
                                        <span className='text-[#686767]'>20k</span>
                                    </div>

                                )
                            }
                        </div>

                        <div>
                            {
                                D_flag === false ? (
                                    <img className="w-6 h-6 hover:cursor-pointer rotate-180" src={like} onClick={handleDislike} alt="dislike" />
                                ) : (
                                    <img className="w-6 h-6 hover:cursor-pointer rotate-180" src={liked} onClick={handleDislike} alt="disliked" />
                                )
                            }
                        </div>

                        <div>
                            <div onClick={handleReply} className='hover:bg-[#c7c6c6] hover:cursor-pointer px-2 py-1 rounded-[10%] text-sm'>Reply</div>

                        </div>

                    </div>

                </div>



            </div>

            <div className='flex w-[60%] md:ps-44'>
                {
                    reply === true ? (<ReplyComp />) : (<></>)
                }
            </div>

        </div>
    )
}

export default CommentComp