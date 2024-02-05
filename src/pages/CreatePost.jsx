import React, { useState } from "react";
import { Alert, Container } from "react-bootstrap";
 import Button from 'react-bootstrap/Button';
        import Form from 'react-bootstrap/Form';
import PostService from "../services/posts.service";
export default function CreatePost() {
    const[formData, setFormData] = useState({
        title:"", body:'', image:''})
    const[errors, setErrors] = useState({
        title:"", body:'', image:''
    })
    async function onSubmit() {
        // if(formData.title.length===0 || formData.body===0)
        // return alert ("Title and body must be specified");
        try{
            const response = await PostService.create(formData);
            console.log(response);
        }
        catch(e) {
            const _errors = e?.response?.data?.errors;
            if(_errors) {
                const keys = Object.keys(errors);
            // keys.forEach(key=> setErrors({...errors, key:errors[key]}))
            setErrors({
                title: _errors?.title?.join(' ') || "",
                body: _errors?.body?.join(' ') || "",
                image: _errors?.image?.join(' ') || ""
            })
            }
            
        }
        
    }
    return (
       <Container style={{ backgroundColor:"grey", padding:"1rem", marginTop:"10rem" }}>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter post title" value={formData.title} onChange={(e)=>setFormData({...formData, title:e.target.value})} />
         
         {errors.title&& <Alert variant="danger" >{errors.title}</Alert>} 
        </Form.Group>
  
        <Form.Group className="mb-3" >
          <Form.Label>Body</Form.Label>
          <Form.Control type="text" placeholder="Post body"  value={formData.body} onChange={(e)=>setFormData({...formData, body:e.target.value})}/>
          {errors.body&& <Alert variant="danger">{errors.body}</Alert>} 
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" placeholder="Image url"  value={formData.image} onChange={(e)=>setFormData({...formData, image:e.target.value})}/>
          {errors.image&& <Alert variant="danger">{errors.image}</Alert>} 
        </Form.Group>
        <Button variant="primary" type="button" onClick={onSubmit}>
          Create Post
        </Button>
      </Form>
      </Container>
    )
}