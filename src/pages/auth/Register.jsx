import React, { useState } from "react";
import { Alert, Container } from "react-bootstrap";
 import Button from 'react-bootstrap/Button';
        import Form from 'react-bootstrap/Form';
import AuthService from "../../services/auth.service";

const defaultData = {name: "", email: "",password:"", password_confirmation:""}

export default function Register() {
    const [message, setMessage] = useState("")
    const[formData, setFormData] = useState(defaultData)
    const[errors, setErrors] = useState(defaultData)
    async function onSubmit() {
        // if(formData.title.length===0 || formData.body===0)
        // return alert ("Title and body must be specified");
        try{
            setErrors(defaultData);
            const response = await AuthService.register(formData);
            console.log(response);
            if(response) {
                setFormData(defaultData);
                setMessage("")
            }
        }
        catch(e) {
            const _errors = e?.response?.data?.errors;
            if(_errors) {
                const keys = Object.keys(errors);
            // keys.forEach(key=> setErrors({...errors, key:errors[key]}))
            setErrors({
                name: _errors?.name?.join(' ') || "",
                email: _errors?.email?.join(' ') || "",
                password: _errors?.password?.join(' ') || "",
                password_confirmation: _errors?.password_confirmation?.join(' ') || ""
            })
            }
            
        }
        
    }
    return (
       <Container style={{ backgroundColor:"grey", padding:"1rem", marginTop:"10rem" }}>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" value={formData.name} onChange={(e)=>setFormData({...formData, name:e.target.value})} />
         
         {errors.name&& <Alert variant="danger" >{errors.name}</Alert>} 
        </Form.Group>
  
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
        <Form.Group className="mb-3" >
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control type="password" placeholder="Password confirmation"  value={formData.password_confirmation} onChange={(e)=>setFormData({...formData, password_confirmation:e.target.value})}/>
          {errors.password_confirmation&& <Alert variant="danger">{errors.password_confirmation}</Alert>} 
        </Form.Group>
     
        {message && (
            <Alert variant="success" >{message}</Alert>
        )}
        <Button variant="primary" type="button" onClick={onSubmit}>
          Register
        </Button>
      </Form>
      </Container>
    )
}