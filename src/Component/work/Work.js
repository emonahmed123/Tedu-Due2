import React from 'react'
import './Work.css'
const Work = () => {
  return (
    <div>
      <h1 className='text-[20px] text-[#800080] mt-5 mb-8 ml-8  md:ml-48 font-medium'>Friends who enrolled(3)</h1>
      
         <div className=' grid  grid-cols-1 gap-4  md:grid-cols-3   ml-[40px]  md:ml-[180px]' >

         <div className='Card' >
        <div className='flex justify-between items-center mx-5 pt-5'>
          <h1 className='text-white font-bold text-2xl' >Dhiraj Saxsena</h1>
          <h1 className='text-white font-normal text-sm' >14 Sep, 2022</h1>
        </div>
        <p className='text-white pt-2 pl-5 text-sm'>Courses Enrolled(6)</p>

         <div className='grid grid-cols-3   mt-3 ml-8 gap-2  mr-16  '>
            <div className='border w-[60px] rounded-full  text-white  text-center  text-sm'>
                UI/UX
            </div>
           
            <div className='border  w-[90px] rounded-full  text-center text-white mr-7'>Photoshop</div>
          
           <div  className='border  w-[80px] rounded-full  text-center text-white ml-5 '>Illustrator</div>
          
            <div  className='border w-[70px]   rounded-full text-center text-white'>Python</div>
            <div  className='border w-[65px] rounded-full text-center text-white '>MERN</div>
           
            <div  className='w-[45px] border rounded-full text-center text-white ' >Java</div>
            

         </div>
          
          <div className='ml-6 mt-6'>
             <h1 className='text-white'>Referral Amount  <span className='text-white text-2xl ml-2'>₹185</span></h1>
          </div>
      </div>

      <div className='Card' >
        <div className='flex justify-between items-center mx-5 pt-5'>
          <h1 className='text-white font-bold text-2xl' >Dhiraj Saxsena</h1>
          <h1 className='text-white font-normal text-sm' >14 Sep, 2022</h1>
        </div>
        <p className='text-white pt-2 pl-5 text-sm'>Courses Enrolled(6)</p>
        
    
         <div className='grid grid-cols-3  mt-3 ml-5 gap-2  mr-16   '>
            <div className='border w-[60px] rounded-full  text-white  text-center  text-sm'>
                UI/UX
            </div>
           
            <div className='border  w-[90px] rounded-full  text-center text-white mr-7'>Photoshop</div>
              
           <div  className='border  w-[80px] rounded-full  text-center text-white ml-5 '>Illustrator</div>
           </div>
            <div className='grid grid-cols-4 mt-3 mx-5  '>
            <div  className='border w-[70px]   rounded-full text-center text-white '>Python</div>
            <div  className='border w-[65px] rounded-full text-center text-white '>MERN</div>
           
            <div  className='w-[45px] border rounded-full text-center text-white ' >Java</div>
            <div  className='w-[45px] border rounded-full text-center text-white ' >C++</div>
            
           
          
         </div>
         <div className='ml-6 mt-6'>
             <h1 className='text-white'>Referral Amount  <span className='text-white text-2xl ml-2'>₹485</span></h1>
          </div>
      </div>



      <div className='Hary flex  ' >
        <div className=' md:w-2/3  lag '>
        <div className='flex justify-between items-center mx-5 pt-5'>
          <h1 className='text-white font-bold text-2xl' >Dhiraj Saxsena</h1>
          <h1 className='text-white font-normal text-sm md:hidden  ' >14 Sep, 2022</h1>
        </div>
        <p className='text-white pt-2 pl-5 text-sm'>Courses Enrolled(6)</p>

         <div className='grid grid-cols-3   mt-3 ml-8 gap-2  mr-16 gap '>
            <div className='border w-[60px] rounded-full  text-white  text-center  text-sm'>
                UI/UX
            </div>
           
            <div className='border  w-[90px] rounded-full  text-center text-white mr-7 md:ml-4'>Photoshop</div>
          
           <div  className='border  w-[80px] rounded-full  text-center text-white ml-4 md:ml-16 '>Illustrator</div>
          
            <div  className='border w-[70px]   rounded-full text-center text-white'>Python</div>
            <div  className='border w-[65px]   rounded-full text-center text-white md:ml-6 '>MERN</div>
           
            <div  className='w-[45px] border rounded-full text-center text-white md:ml-12 ' >Java</div>
       
            

         </div>
         
                   
         <div className='ml-6 mt-6 '>
             <h1 className='text-white'>Referral Amount  <span className='text-white text-2xl ml-2'>₹485</span></h1>
          </div>
      </div>

      <div className=' bg-white md:w-1/3 '>
       
         </div>
         </div>
        </div>
         <h1 className='text-[#800080] ml-44 text-sm mt-8 font-semibold '>Terms & Conditions </h1>
   
    </div>
  )
}

export default Work
