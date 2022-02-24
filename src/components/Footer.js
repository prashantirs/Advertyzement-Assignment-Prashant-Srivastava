import React from 'react'

const Footer = (props) => {

  return (
    <>
        
        <div className="position-relative text-center bottom-0  my-3 ">
            {props.count===0?`Click Get User to see user`:`Made by 🙎‍♂️ Prashant Srivastava`}
        </div>
    </>
  )
}

export default Footer