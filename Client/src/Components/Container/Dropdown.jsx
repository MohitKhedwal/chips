import React, { useState } from 'react'

import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
function Dropdown({name,paths}) {
    const [open,setOpen]=useState(false)
    // const otherdepartments=[
    //     {
    //         title:"Bhuvan",
    //         url:"#"
    //     },
    //     {
    //         title:"Census",
    //         url:"#"
    //     },{
    //         title:"Bharat Maps",
    //         url:"#"
    //     },{
    //         title:"NSDI",
    //         url:"#"
    //     }
    // ]
  return (
    <div>
       <div className='text-white mt-4 mb-4'>
            
             <button onClick={()=>setOpen((prev)=>(!prev))} className='w-full border-none active:border-white duration-150 flex justify-between' > {name}
           
            
            {
                open?(
                    
                    <AiOutlineCaretUp  color='white' size={25}/>
                ):(
                    <AiOutlineCaretDown  color='white' size={25}/>
                )
            }
            </button>
             <hr  className='text-white border-b-2'/>
             {
                open && (
                    <div className='bg-slate-700 text-white text-m relative top-2 w-full'>
                        {
                            paths.map((val)=>{
                                return (
                                    <h3>
                                        <a href={val.url} className='w-full ml-2 mb-2 p-2'>{val.title}</a>
                                    </h3>
                                )
                            })
                        }
                    </div>
                )
             }
        </div>
    </div>
  )
}

export default Dropdown
 