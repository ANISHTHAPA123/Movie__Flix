
import React,{useState} from 'react'
import { Form,Button,Card,Alert} from 'react-bootstrap'

import {Link, useNavigate} from "react-router-dom";
import { Container } from 'react-bootstrap';
import { useUserAuth } from '../context/UserAuthContext';
const Signup = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const {signUp}=useUserAuth();
    let navigate=useNavigate();
   
    const handleSubmit=async(e)=>{
    e.preventDefault();
    setError("");
    try{
       await signUp(email,password);
       navigate("/");
    }catch(err){
       setError(err.message)
    }
   }; 
 
  return (
    

    <>
    <Container className="d-flex align-items-center justify-content-center " style={{ minHeight: "100vh" }}>
        <div className='w-100' style={{ maxWidth: '400px' }}>
       <Card>
        <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            
            {error&&<Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
            
                <Form.Group  controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" 
                    onChange={(e)=>setEmail(e.target.value)}/>
                </Form.Group>
            
            
                <Form.Group  controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" 
                    onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>
            
            

                <Button className='w-100 bg-success mt-4' type="submit">Sign Up</Button>
              </Form>
           <hr/>
           {/* <GoogleButton className="w-100  mt-4" type="dark" /> */}
             
        </Card.Body>
       </Card>
       <div className='w-100 text-center mt-2'>Already have an account?<Link to="/">Log in</Link></div>
       </div>

      </Container>
    </>
  )
}

export default Signup
 