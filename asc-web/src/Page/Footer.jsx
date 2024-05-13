// import React from 'react'
// import {FaInbox, FaPhone, FaSearchLocation, FaVoicemail } from 'react-icons/fa'
// import {logoasc, snn} from '../assets/index'

// const Footer = () => {
//   return (
//     <div className='flex gap-32 border-t-2 mb-12'>
//         <div className='mt-10'>
//         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d732.2695514844901!2d-60.64705750112747!3d-32.94535676890072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab3e02e23ee3%3A0xe31441af851a61bd!2sEspa%C3%B1a%20810%2C%20S2000%20DBR%2C%20Santa%20Fe!5e0!3m2!1sen!2sar!4v1715121671306!5m2!1sen!2sar" width="300" height="200"  loading="lazy" ></iframe>
//         </div>
//         <div className='flex justify-center mt-10'>
//         <h1 className=''>Contactanos: </h1>
//         </div>
//         <div className='grid justify-center mt-10 gap-11'>
//             <div className='flex gap-6'>  
//         <FaSearchLocation className='m-1' /> 
//         <p> España 810, Rosario, Santa fe</p>
//             </div>
//             <div className='flex gap-6'>
//         <FaPhone className='m-1' />
//         <p>+549 341 720 5016</p>
//             </div>
//             <div className='flex gap-6'>
//         <FaInbox className='m-1' />
//         <p>gestion@somosasc.com.ar</p>
//             </div>
//         </div>            
//         <div className='mt-14'>
//         <img src={logoasc} alt="Logo asc" className='h-20 mb-2'/>
//         <img src={snn} alt='SNN' className='h-12' />
//         </div>
//     </div>
//   )
// }

// export default Footer

//!---------------------

// import React from 'react'
// import { FaInbox, FaPhone, FaSearchLocation } from 'react-icons/fa'
// import { logoasc, snn } from '../assets/index'

// const Footer = () => {
//   return (
//     <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4 border-t-2 mb-12'>
//       <div className=''>
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d732.2695514844901!2d-60.64705750112747!3d-32.94535676890072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab3e02e23ee3%3A0xe31441af851a61bd!2sEspa%C3%B1a%20810%2C%20S2000%20DBR%2C%20Santa%20Fe!5e0!3m2!1sen!2sar!4v1715121671306!5m2!1sen!2sar"
//           width="300"
//           height="200"
//           loading="lazy"
//           className='w-full'
//         ></iframe>
//       </div>
//       <div className='flex justify-center'></div>
//       <div className='flex flex-col items-start justify-center'>
//         <h1 className=''>Contactanos: </h1>
//         <div className='flex gap-6'>
//           <FaSearchLocation className='m-1' />
//           <p> España 810, Rosario, Santa fe</p>
//         </div>
//         <div className='flex gap-6'>
//           <FaPhone className='m-1' />
//           <p>+549 341 720 5016</p>
//         </div>
//         <div className='flex gap-6'>
//           <FaInbox className='m-1' />
//           <p>gestion@somosasc.com.ar</p>
//         </div>
//       </div>
//       <div className='flex flex-col items-center'>
//         <img src={logoasc} alt="Logo asc" className='h-20 mb-2' />
//         <img src={snn} alt='SNN' className='h-12' />
//       </div>
//     </div>
//   )
// }

// export default Footer

import React from 'react'
import { FaInbox, FaPhone, FaSearchLocation } from 'react-icons/fa'
import { logoasc, snn } from '../assets/index'

const Footer = () => {
  return (
<div className='grid gap-6 md:grid-cols-3 lg:grid-cols-3 border-t-2 mb-12'>
  <div className='mt-20'>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d732.2695514844901!2d-60.64705750112747!3d-32.94535676890072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab3e02e23ee3%3A0xe31441af851a61bd!2sEspa%C3%B1a%20810%2C%20S2000%20DBR%2C%20Santa%20Fe!5e0!3m2!1sen!2sar!4v1715121671306!5m2!1sen!2sar"
      width="300"
      height="200"
      loading="lazy"
      className='w-full'
    ></iframe>
  </div>

  <div className='flex items-start justify-center mt-20'>
  <div className='grid justify-center items-center'>
  <h1 className=''>Contactanos: </h1>
    <div className='flex items-center gap-6 h-12'>
      <FaSearchLocation className='m-1' />
      <p> España 810, Rosario, Santa fe</p>
    </div>
    <div className='flex items-center gap-6 h-12'>
      <FaPhone className='m-1' />
      <p>+549 341 720 5016</p>
    </div>
    <div className='flex items-center gap-6 h-12'>
      <FaInbox className='m-1' />
      <p>gestion@somosasc.com.ar</p>
</div>
    </div>
  </div>
  <div className='flex flex-col items-center mt-20'>
    <img src={logoasc} alt="Logo asc" className='h-20 mb-2' />
    <img src={snn} alt='SNN' className='h-12' />
  </div>
</div>
  )
}

export default Footer