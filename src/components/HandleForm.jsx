import React, { useState } from 'react'

const HandleForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [flag, setflag] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your Form has been Submited...")
        setflag(true)
    }

    return (
        <div>
            <h1>Form Handling</h1>

            <form onSubmit={handleSubmit}>
                Name : <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <br />
                Email : <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <br />
                Password : <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <br />
                <input type="submit" />
            </form>
            {
                flag && (
                    <div>
                        <h2>Name : {name}</h2>
                        <h2>Email : {email}</h2>
                        <h2>Password : {password}</h2>
                    </div>
                )}
        </div>
    )
}

export default HandleForm
