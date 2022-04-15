import React from 'react'

const Button = () => {
    const handleReset = () => {
        window.location.reload()
    }
  return (
    <div>
      <button className='btn1' onClick={handleReset}>RESET</button>
    </div>
  )
}

export default Button
