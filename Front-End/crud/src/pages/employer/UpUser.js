import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./UpUser.css";
import { useEffect  } from "react";
import { useNavigate } from "react-router-dom";

const UpUser = () =>{
    const navigate = useNavigate();
    const { id } = useParams();

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
    useEffect(() =>{
        const fetchEmployer = async () =>{
            try {
                const response = await fetch (`http://localhost:8080/api/employer/${id}`);
                const data = await response.json();
                setFormData(data);
                
            } catch (error) {
                console.log("Erreur fetching user:" , error.message);
                
            }
        } 
        fetchEmployer();
    },[id]);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/api/employer/${id}`,{
            method :"PATCH",
            headers:{
                 "Content-Type" : "application/json",
            },
            body:JSON.stringify(formData),
        });
        const data = await response.json();
        console.log("user updated :",data );
        navigate(`/`)
        } catch (error) {
            console.log("Error updating user:",error.message);
            
        }

    }

    return (
        <>
      <div className="center-form">
        <h1>Edit Employer</h1>
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
            Edit Employer
          </Button>
        </Form>
      </div>
    </>
    )
}

export default UpUser;