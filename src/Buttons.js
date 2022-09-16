import React from 'react'

function Buttons({noOfPages}) {
    let pages = 7;
    function createButton(){
        let buttons = [];
        for(let i=0; i<pages; i++){
            buttons.push(<button key={i} value={i+2} className='btn' onClick={handleApi}>{i+1}</button>)
            
        }
        return buttons;
    }
    function handleApi(e){
        noOfPages(e);
        console.log(e.target)
    }
  return (
    <>
    <div >{createButton()}</div> <br/>
    
    </>
  )
}

export default Buttons