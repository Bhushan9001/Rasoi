import React from 'react'

const Card = (props) => {

    console.log(props)

    return (
        <>
            <div className='m-5 p-6 rounded-lg hover:cursor-pointer' style={{ boxShadow: 'rgba(0, 0, 0, 0.2) 0px 18px 50px -10px' }}>
                <div>
                    <img className='rounded-[3%]' src={props.img} alt={props.title} />
                </div>
                <div className='flex font-barlow-condensed items-center py-3 space-x-4'>
                    <div className='text-3xl font-medium text-[#428C41]'>{props.title}</div>
                    <div className='bg-[#68F665] px-3 py-2 rounded-lg font-poppins'>{props.cuisine}</div>
                </div>
                <div className='font-extralight font-ubuntu italic'>
                    By {props.chef}
                </div>
            </div>
        </>
    )
}

export default Card