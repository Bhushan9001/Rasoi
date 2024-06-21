import React from 'react'
import dosa from '../assets/dosa.png';

const RecipeDetail = () => {
  return (
    <div className='md:flex w-full'>
      <div className='px-6 md:px-12 py-7 w-full md:w-2/6'>
        <div className='font-semibold text-5xl font-barlow-condensed text-[#037800]'>
          Masala Dosa
        </div>

        <div className='text-3xl font-barlow-condensed font-normal py-4 flex space-x-3'>
          <div>Cuisine : <span className='font-semibold text-[#428C41]'>Indian</span></div>
          <div>Type : <span className='font-semibold text-[#428C41]'>Breakfast</span></div>
        </div>

        <div className='font-poppins font-medium text-xl'>
          Crispy rice and lentil crepes filled with a spicy potato filling.
        </div>


        <img className='mt-8 my-6 w-96 md:w-[95%] h-auto rounded-xl' src={dosa} alt='Dosa' />

      </div>

      <div className='px-6 md:px-0 py-7 w-full md:w-4/6'>
        <div>
          <div className='text-4xl font-semibold font-barlow-condensed'>
            Ingredients
          </div>
          <div className='py-6 px-4'>
            <table className='text-xl font-normal font-poppins'>
              <tbody>
                <tr>
                  <td className='w-28'>Rice</td>
                  <td className='w-28'>2 cups</td>
                </tr>
                <tr>
                  <td>Urad Dal</td>
                  <td>1 cup</td>
                </tr>
                <tr>
                  <td>Potato</td>
                  <td>4</td>
                </tr>
              </tbody>

            </table>
          </div>
        </div>

        <div className='pe-0 md:pe-24'>
          <div className='text-4xl font-semibold font-barlow-condensed'>
            Instructions
          </div>
          <div className='m-6 p-6 rounded-lg border-2 border-[#68F665] text-xl font-poppins font-normal'>
            <ol className='ps-7 list-decimal'>
              <li>Soak rice and urad dal overnight.</li>
              <li>Grind to a smooth batter and ferment overnight.</li>
              <li>Prepare the potato filling by cooking potatoes with onions, mustard seeds, and spices.</li>
              <li>Spread a ladle of batter on a hot griddle to make a thin crepe.</li>
              <li>Place the potato filling in the center and fold the dosa.</li>
              <li>Serve hot with chutney and sambar.</li>
            </ol>
          </div>

          <div className='text-right font-extralight me-10 font-ubuntu italic'>
            <div>By Bushan Pawar</div>
            <div>2 days ago</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RecipeDetail