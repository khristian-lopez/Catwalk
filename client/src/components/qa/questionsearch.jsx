import React, {useState}from 'react';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <InputGroup>
    <Form.Control placeholder='Have a question? Search for answers...' onChange={(event) => {

      console.log('E')
      setSearchTerm(event.target.value)}}/>
    </InputGroup>
  )

}

export default Search;