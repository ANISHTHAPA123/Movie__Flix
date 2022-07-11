
import React,{useState} from 'react'
import { Form, Button, Card,Alert} from 'react-bootstrap'
import {Link,useNavigate} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import"./login.css";
const Login = () => {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/Movielist");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/Movielist");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Container className="d-flex align-items-center justify-content-center header " style={{ minHeight: "100vh" }}>
        <div className='w-100 ' style={{ maxWidth: '400px' }}>
          <Card >
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              {error&&<Alert variant="danger">{error}</Alert>}
              <Form  onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" required 
                   onChange={(e)=>setEmail(e.target.value)} />
                </Form.Group>
              
              
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" required 
                   onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>
              
             

                <Button className='w-100 bg-success mt-4' type="Submit">Sign in</Button>
              </Form>
              <hr />
              <GoogleButton className="w-100  mt-4" type="dark" onClick={handleGoogleSignIn}/>
              <div className='p-4 box mt-3 text-center'>Dont have an account?<Link to="/signup">Sign up</Link></div>
            </Card.Body>
          </Card>
        </div>

      </Container>

      


    </>
  )
}

export default Login
