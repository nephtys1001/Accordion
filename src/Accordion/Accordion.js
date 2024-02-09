import React, { useState } from 'react'
import datas from '../Data/Datas'
import "../Styles/Accordion.css"

function Accordion() {
    const[selected,setSelected]=useState(null)


    function handleSingleSelection(getCurrentID){
        setSelected(getCurrentID)
        if(getCurrentID===selected){
            setSelected(null)
        }

    }
  return (
    <div className='wrapper' >

        <div className='accordion' >
            {
                datas && datas.length > 0 ?
                datas.map(dataItem=> <div className='item' onClick={()=>handleSingleSelection(dataItem.id)}>
                    <div className='title'  >
                        <h3>{dataItem.title}  </h3>
                        <span>{selected===dataItem.id ? "- " : "+"} </span>
                       
                    </div>
                    {
            selected === dataItem.id ?
            <div className='content'>
                {dataItem.answer}
            </div>
            :null
        }

                     </div>)
                     :<div><h1>No Data Found</h1> </div>
            }
        </div>
      
    </div>
  )
}

export default Accordion