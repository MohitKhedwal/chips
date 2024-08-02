import React from 'react'
import cgatlasbg from '../../images/AtlasBg.jpg'

function Cgatlas() {
  return (
    <div className=' w-full  h-screen {styles.nunitoFont} '>
      {/* <h1 className='text-center font-bold'> THIS IS CG ATLAS </h1> */}

      <iframe 
         src="https://gis.cgstate.gov.in/atlas33/" 
         frameborder="0" 
         style={{ 
           width: "100%", 
           height: "100%", 
           backgroundImage: "url('cgatlasbg')"
        }}>
      </iframe>
    </div>
  )
}

export default Cgatlas


