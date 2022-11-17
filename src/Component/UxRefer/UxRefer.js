import React from 'react'
import {BiChevronRight,BiArrowLeft} from 'react-icons/bi';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import'./UxRefer.css'
const UxRefer = () => {
  return (
    <div className='max-w-[1240px] mx-auto mt-7'>
       <h1 className='mx-auto ml-8  md:mx-[127px] text-sm  text-black font-semibold'>UI/UX <BiChevronRight className='inline mr-0' /> Refer & Earn<BiChevronRight className='inline mr-0'/>Friends Referred</h1>
        <h1 className='md:hidden text-[16px] ml-7 font-medium text-[#800080] mt-8 mb-3'>
         <AiOutlineArrowLeft className='inline mr-0'size={20}/>   go back</h1> 
        
         <div className='w-full  flex justify-between '>

          
         <div className='mt-5  mx-8 md:mx-[127px]  '>
               <h1 className='text-[#800080] text-[18px] font-semibold' > Your Referral Code </h1>
 
                <div className=' w-[153px] rounded-[10px]   h-[50px] New mt-2 border-[1.5px]' >
                     <h1 className='text-center  Edit  pt-3 tracking-tight  ' >EDCH54</h1>
                </div>



                  </div>

            
            <div className='w-[145px] h-20 Nli mr-5 md:mr-32  mt-8 md:mt-5'>
                  
                  <h1 className='text-start pl-5 pt-6 text-[#800080] text-sm'>Wallet Balance</h1>
                  <h1 className='text-start  pl-5 text-[16px] font-medium'>₹ 500</h1>
                      
            </div>

         </div>
   
   
   
   
   
   
    </div>
  )
}

export default UxRefer
