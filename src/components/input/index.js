import React from 'react'
import { Form, FormControl, FormGroup } from 'react-bootstrap'

const Input = ({bgColor , value , onChange, add}) => {
  return (
    <Form style={{zIndex:'100'}} onSubmit={add}>
        <FormGroup>
            <FormControl style={{backgroundColor: bgColor , fontWeight:'bold'}} type='search' placeholder='Write your note here...' value={value} onChange={onChange}/>
        </FormGroup>
    </Form>
  )
}

export default Input