import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import Add from './components/Add'
import Edit from './components/Edit'

function App() {
  const [people, setPeople] = useState([])

  const getPeople = () => {
    axios.get('https://people.fly.dev/people')
      .then((response) => setPeople(response.data), (err) => console.log(err))
      .catch((error) => console.log(error))
  }

  const handleCreate = (createdPerson) => {
    axios.post('https://people.fly.dev/people', createdPerson)
      .then((response) => {
        setPeople([...people, response.data])
      })
  }

  const handleEdit = (editedPerson) => {
    axios.put('https://people.fly.dev/people' + editedPerson._id, editedPerson)
      .then((response) => {
        let newPeople = people.map((person) => {
          return person._id !== editedPerson._id ? person : editedPerson
        })
        setPeople(newPeople)
      })
  }
  const handleDelete = (deletedPerson) => {
    axios.delete('https://people.fly.dev/people' + deletedPerson._id)
      .then((response) => {
        let newPeople = people.filter((person) => {
          return person._id !== deletedPerson._id
        })
        setPeople(newPeople)
      })
  }





  useEffect(() => {
    getPeople()
  }, [])

  return (
    <>
      <h1>All People</h1>
      <Add handleCreate={handleCreate} />
      {people.map((person) => {
        return (
          <>
            <Person person={person} />
            <Edit person={person} handleEdit={handleEdit} />
            <button onClick={() => { handleDelete(person) }}>X</button>
          </>
        )
      })}
    </>
  );
}

export default App;
