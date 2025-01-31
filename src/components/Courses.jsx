import React from 'react'
import { features } from '../constants'
import styles, {layout} from '../style'
import buttons from './buttons'

const Courses = () => {
  return (
    <section id="courses" >
       <div className={`${styles.flexCenter}`}>
         <h2 className='font-poppins font-semibold px-16 text-[26px] '>Courses</h2>
       </div>
       <div>
       
        <div class={`h-auto overflow-x-auto flex container::-webkit-scrollbar `}>
      {features.map((feature) =>  (
        <div class="font-poppins justify-items-center mx-1 min-w-m bg-black-gradient rounded-lg py-2 px-2 xs:py-2 px-2 text-white-700 hover:text-white-900 ">
          <button className="  text-[12px]  xs:text-[15px] font-poppins px-4 py-2 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue  ">
            <a href={`${feature.link}`}>{feature.title}</a>
            
          </button>
          <p className={`font-poppins text-[12px]  xs:text-[15px] sm:text-overflow-hidden py-2 px-2 `}>
            {feature.content}
          </p>
        </div>
      ))}
    </div>
     
       </div>
       
    </section>
  )
}

export default Courses