import React from 'react'

function Child(props) {

  function handleClicked(){
    props.textChange('I got Updated From Child');
  }

  return (
    <>
        <button className='btn' onClick={handleClicked}>update</button>
    </>
  )
}

export default Child