import React from 'react'
import indian from '../assets/indian.png';
import italian from '../assets/italian.png';
import french from '../assets/french.png';
import chinese from '../assets/chinese.png';

const Categories = () => {
    return (
        <>
        <div className='text-5xl font-semibold font-barlow-condensed text-center pb-3' name="Categories">
            Popular Categories
        </div>
        <div className='md:flex justify-center space-x-14'>
            <div className='text-center'>
                <div className='my-3'>
                    <img className="w-48 h-48" src={indian} alt="indian" />
                </div>
                <div className='py-5 text-4xl font-barlow-condensed font-semibold'>
                    Indian
                </div>
            </div>

            <div className='text-center'>
                <div className='my-3'>
                    <img className="w-48 h-48" src={italian} alt="italian" />
                </div>
                <div className='py-5 text-4xl font-barlow-condensed font-semibold'>
                    Italian
                </div>
            </div>

            <div className='text-center'>
                <div className='my-3'>
                    <img className="w-48 h-48" src={french} alt="french" />
                </div>
                <div className='py-5 text-4xl font-barlow-condensed font-semibold'>
                    French
                </div>
            </div>

            <div className='text-center'>
                <div className='my-3'>
                    <img className="w-48 h-48" src={chinese} alt="chinese" />
                </div>
                <div className='py-5 text-4xl font-barlow-condensed font-semibold'>
                    Chiense
                </div>
            </div>
        </div>
        </>
    )
}

export default Categories