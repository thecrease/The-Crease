import React from 'react';
import { Navbar, Row, Col, Container, Nav, Form, FormControl, Button,InputGroup } from 'react-bootstrap';
import HeaderComponent from '../components/Headers/header.compoent';
import Footer from '../components/Footer/footer.component';
import HeroSection from '../components/HeroSection/HeroSection';
import { useState } from 'react';
const ContactUs = ()=>{
  const [value, setValue] = useState("");
  const handleSubmit = () =>{
    alert(`Thank You ${value} We will get in touch with you asap !`) 
  }
    return (
        <div style={{backgroundColor:"#ebebeb"}}>
          <HeaderComponent/>
          <HeroSection pageClass="hero_section_contact" pageTitle="Contact Us"/>
        <div className="my-5" style={{width:"50%",marginLeft:"25%"}}>
            
            <Form onSubmit={handleSubmit}>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" required />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Name" onChange={(e)=>{setValue(e.target.value)}} required/>
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>Lahore</option>
        <option>Sargodha</option>
        <option>Karachi</option>
        <option>Toba Tek Singh</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" placeholder="Type Your Message Here" />
  </Form.Group>


  <Button variant="primary" type="submit" style={{marginBottom:"5%"}}>
    Submit
  </Button>
</Form>
        </div>
        <Footer/>
        </div>
    )
}

export default ContactUs