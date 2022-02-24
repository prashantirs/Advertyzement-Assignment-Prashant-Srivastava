import React from 'react'

const UserList = (props) => {
    let {  email, first, last, avatar } = props
    return (
        <>
            <div className="card" >

                <img src={avatar} style={{ width: '16.3rem' }} className="card-img-top text-sm" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{first} {last}</h5>
                    <p className="card-text">{email} </p>
                    <a href={`mailto: ${email}`} className="btn btn-dark">Email Me!</a>
                </div>
            </div>
        </>
    )
}

export default UserList