import React, { useState } from "react";
import { Alert, Container } from "react-bootstrap";
 import Button from 'react-bootstrap/Button';
        import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router";
import AuthService from "../../services/auth.service";

const defaultData = {email: "",password:""}

export default function Login() {
    const [message, setMessage] = useState("")
    const[formData, setFormData] = useState(defaultData)
    const[errors, setErrors] = useState(defaultData)
    const navigate = useNavigate();
    async function onSubmit() {
        // if(formData.title.length===0 || formData.body===0)
        // return alert ("Title and body must be specified");
        try{
            setErrors(defaultData);
            const response = await AuthService.login(formData);
            console.log(response);
            if(response) {
                setFormData(defaultData);
                setMessage(response.message);
                localStorage.setItem('user', JSON.stringify(response.user));
                localStorage.setItem('token', response.token);
                navigate("/posts")
            }
        }
        catch(e) {
            const _errors = e?.response?.data?.errors;
            if(_errors) {
                const keys = Object.keys(errors);
            // keys.forEach(key=> setErrors({...errors, key:errors[key]}))
            setErrors({
               
                email: _errors?.email?.join(' ') || "",
                password: _errors?.password?.join(' ') || "",
                
            })
            }
            
        }
        
    }
    return (
       <Container style={{ backgroundColor:"grey", padding:"1rem", marginTop:"10rem" }}>
        <Form>
        
  
        <Form.Group className="mb-3" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email"  value={formData.email} onChange={(e)=>setFormData({...formData, email:e.target.value})}/>
          {errors.email&& <Alert variant="danger">{errors.email}</Alert>} 
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  value={formData.password} onChange={(e)=>setFormData({...formData, password:e.target.value})}/>
          {errors.password&& <Alert variant="danger">{errors.password}</Alert>} 
        </Form.Group>
       
     
        {message && (
            <Alert variant="success" >{message}</Alert>
        )}
        <Button variant="primary" type="button" onClick={onSubmit}>
          Login
        </Button>
      </Form>
      </Container>
    )
}