import { useState } from 'react'

const Edit = (props) => {
    const [person, setPerson] = useState({ ...props.person })

    const handleChange = (event) => {
        setPerson({ ...person, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleEdit(person)
    }

    return (
        <>
            <details>
                <summary>Edit Person</summary>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='name' value={person.name} onChange={handleChange} />
                    <br />
                    <br />
                    <input type='number' name='age' value={person.age} onChange={handleChange} />
                    <br />
                    <br />
                    <input type='submit' />
                </form>
            </details>
        </>
    )
}

export default Edit