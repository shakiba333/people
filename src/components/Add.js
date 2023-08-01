import { useState } from 'react'

const Add = (props) => {
    const [person, setPerson] = useState({ name: '', age: 0 })

    const handleChange = (event) => {
        setPerson({ ...person, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(person)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='name' name='name' onChange={handleChange} />
                <br />
                <br />
                <input type='number' placeholder='age' name='age' onChange={handleChange} />
                <br />
                <br />
                <input type='submit' />
            </form>
        </>
    )
}

export default Add