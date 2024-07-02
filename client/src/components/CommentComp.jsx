import React, { useState } from 'react';
import boy from '../assets/boy.png';
import like from '../assets/like.png';
import liked from '../assets/liked.png';
import ReplyComp from './ReplyComp';
import Avatar from './Avatar';
import { MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp } from "react-icons/md";

const CommentComp = ({ name, text, likes, days, replies, addReply }) => {
    const [reply, setReply] = useState(false);
    const [repliess, setReplies] = useState(false);

    const visibleReplies = () => {
        setReplies(!repliess);
        if (!replies) {
            setTimeout(() => {
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth',
                });
            }, 100); 
        }
    }

    const handleReply = () => {
        setReply(!reply);
        
    };

    const [L_flag, setL_Flag] = useState(false);

    const handleLike = () => {
        setL_Flag(!L_flag);
    };

    const [D_flag, setD_Flag] = useState(false);

    const handleDislike = () => {
        setD_Flag(!D_flag);
    };

    return (
        <>
            <div className='pb-3 flex space-x-5 items-center w-full md:w-[60%] font-poppins'>
                <Avatar name={name}/>
                <div>
                    <div className='flex space-x-3 items-center'>
                        <div className='text-base '>{name}</div>
                        <div className='text-[#686767] text-sm'>{days} days ago</div>
                    </div>

                    <div className='text-xl font-normal'>{text}.</div>

                    <div className='py-2 flex space-x-4'>
                        <div>
                            {L_flag === false ? (
                                <div className='flex space-x-1'>
                                    <img className="w-6 h-6 hover:cursor-pointer" src={like} onClick={handleLike} alt="like" />
                                    <span className='text-[#686767]'>{likes}</span>
                                </div>
                            ) : (
                                <div className='flex space-x-1'>
                                    <img className="w-6 h-6 hover:cursor-pointer" src={liked} onClick={handleLike} alt="liked" />
                                    <span className='text-[#686767]'>{}</span>
                                </div>
                            )}
                        </div>
                        <div>
                            {D_flag === false ? (
                                <img className="w-6 h-6 hover:cursor-pointer rotate-180" src={like} onClick={handleDislike} alt="dislike" />
                            ) : (
                                <img className="w-6 h-6 hover:cursor-pointer rotate-180" src={liked} onClick={handleDislike} alt="disliked" />
                            )}
                        </div>
                        <div>
                            <div onClick={handleReply} className='hover:bg-[#c7c6c6] hover:cursor-pointer px-2 py-1 rounded-[10%] text-sm'>Reply</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex ps-14 md:ps-24'>
                {reply && <ReplyComp addReply={addReply} />}
            </div>

            {
                replies.length > 0 && (
                    <div onClick={visibleReplies} className='mt-4 mb-2 md:mb-3 md:my-1 py-2 flex hover:cursor-pointer ms-14 md:ms-24 pe-3 text-[20px] rounded-full justify-center items-center w-[50%] md:w-[10%] hover:bg-[#c7f7c6] font-semibold font-poppins text-[#428C41]'>
                        {
                            repliess===true ? (
                                <MdOutlineKeyboardArrowUp size={30}/>
                            ):(
                                <MdOutlineKeyboardArrowDown size={30}/>
                                
                            )
                        }
                        
                        <div> {replies.length} replies</div>
                    </div>
                )
            }

            {
                repliess === true && (
                    <div className='flex flex-col space-y-4 ps-14 md:ps-24 font-poppins'>
                        {replies.map((reply, index) => (
                            <div key={index} className='flex space-x-4 py-3'>
                                <Avatar name={reply.authorName}/>
                                <div className='w-[80%] md:w-[60%]'>
                                    <div className='text-base'>{reply.authorName}</div>
                                    <div className='text-xl'>{reply.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }

            {/* {reply && replies && replies.length > 0 && (
                <div className='flex flex-col space-y-4 ps-14 md:ps-24 font-poppins'>
                    {replies.map((reply, index) => (
                        <div key={index} className='flex space-x-4 py-3'>
                            <Avatar name={reply.authorName}/>
                            <div className='w-[80%] md:w-[60%]'>
                                <div className='text-base'>{reply.authorName}</div>
                                <div className='text-xl'>{reply.text}</div>
                            </div>
                        </div>
                    ))}
                </div>
            )} */}

        </>
    );
};

export default CommentComp;
