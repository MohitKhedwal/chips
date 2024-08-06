import React from 'react'
import Card from '../Container/Card'
import Forest from '../../images/Forest.jpg'
import forest from '../../images/foresttt.jpg'

function Project1() {
  const cardinfo=[
    {
      id:1,
      para:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae assumenda odit dignissimos enim. Voluptate dolor magnam nesciunt. Ex, ea sapiente? ",
      // img: Forest,
      img: forest,
      title:"Forest",
      link:"https://www.chips.gov.in/en"
    },
    {
      id:2,
      para:"lorem30",
      // img: Forest,
      img: forest,
      title:"Forest",
      link:"https://www.chips.gov.in/en"
      
  
    },
    {
      id:3,
      para:"lorem20",
      // img: Forest,
      img: forest,
      title:"Forest",
      link:"https://www.chips.gov.in/en"
    },
    {
      id:4,
      para:"lorem30",
      // img: Forest,
      img: forest,
      title:"Forest",
      link:"https://www.chips.gov.in/en"
      
  
    },
   
  ]
  return (
    <div>
      <div className=' h-full flex justify-center mb-10 items-center '>
   <div className=' grid grid-cols-4 gap-20 h-full '>
   {
    cardinfo.map((item)=>{
      return(
          <a href={item.link} target='_blank'>
              <Card imgSrc={item.img}  title={item.title} text={item.para}   />
          </a>
      )
    })
  }
   </div>
     </div>
    </div>
  )
}

export default Project1

