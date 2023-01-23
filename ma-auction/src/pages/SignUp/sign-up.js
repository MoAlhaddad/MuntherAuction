import React, { useRef, useState } from 'react'
import { Form, Card, Button, Alert } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useNavigate } from'react-router-dom'


export default function SignUp() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate('/cars/1')
    } catch {
      setError('Failed to create an account')
    }
    setLoading(false)
  }

  return (
    <div className='signup-background'>
      
    <Container className=''>
      <div className="TestCard" >
        <>
          <Card className="SignUp-Card">
            <Card.Body>
              <h2 className="text-center mb-4 text-white" style={{backgroundColor: 'transparent'}}>Welcome to Spawnn!</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form style={{backgroundColor: 'transparent'}} onSubmit={handleSubmit}>
                <Form.Group id="email" className="mt-4">
                  <Form.Label >Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} placeholder='Enter your name' required />
                </Form.Group>
                <Form.Group id="password" className="mt-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} placeholder='Enter Password' required />
                </Form.Group>
                <Form.Group id="password-confirm" className="mt-4">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control type="password" ref={passwordConfirmRef} placeholder='Confirm Password' required />
                </Form.Group>
                <Button disabled={loading} className='buttonStyle w-100 mt-3' type="submit">Sign Up</Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2 text-white">
            Already have an account? <Link to='/sign-in'>Log In</Link>
          </div>
        </>
      </div>
    </Container>
    </div>
  )
}
