import React from "react"

const Square = ({value, index, handleGamePlay}) => {
  const handleClick =() => {
   handleGamePlay(index)
  }
  const restartGame = () => {

  }
  return (
    <>
      <div className="square" onClick={handleClick}>
        {value}
      
      </div>

      
    </>
  )
}
export default Square
