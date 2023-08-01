const Person = (props) => {
    return (
        <>
            <h3>Name: {props.person.name}</h3>
            <p>Age: {props.person.age}</p>
        </>
    )
}

export default Person