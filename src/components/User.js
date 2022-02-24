import React from 'react'
import UserList from './UserList'

const User = (props) => {

  let {key ,email , first, last,avatar}=props

  return (
      <>

        <div >
            <UserList key={key} email={email} first={first} last={last} avatar={avatar}/>
        </div>
      </>
  )
}

export default User