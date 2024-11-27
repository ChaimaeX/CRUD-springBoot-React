import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./PostUser.css";
import { useNavigate } from "react-router-dom";

const PostUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    departement: "",
  });

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your submission logic here

    try{
        const response = await fetch("http://localhost:8080/api/employer",{
        method:"POST",
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify(formData)

    });
    const data = await response.json();
    console.log("Employer created: ",data)
    navigate("/")
    }catch(error){
       console.log("erreur creating employer: ",error.message);
       
    }
  };

  return (
    <>
      <div className="center-form">
        <h1>Post New Employer</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
           
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPhone">
            
            <Form.Control
              type="text"
              name="phone"
              placeholder="Enter phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicDepartment">
            
            <Form.Control
              type="text"
              name="departement"
              placeholder="Enter department"
              value={formData.departement}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Post Employer
          </Button>
        </Form>
      </div>
    </>
  );
};

export default PostUser;
