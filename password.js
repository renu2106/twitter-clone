import React from 'react'

export const password = () => {
    return (
        <form>


            <input type="password" className="p-3 mt-1 mb-2 form-control input-bg" placeholder="Phone number ,username or email" value={password} onChange={e => {
                setEmail(e.target.value)
            }}
            /></form>
    )
}
