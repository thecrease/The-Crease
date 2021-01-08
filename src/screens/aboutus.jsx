import React, { Component } from 'react';
import HeaderComponent from '../components/Headers/header.compoent';
import Footer from '../components/Footer/footer.component';
import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap";
import HeroSection from '../components/HeroSection/HeroSection';
import web from "../images/web7.jpg"
import { Link } from 'react-router-dom';
class AboutUS extends Component {
    state = { 
        title: '',
        genre: '',
        numberInStock: '',
        dailyRentalRate: '',
        isOpen: false
        // pageSize = 4
    }
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    render() { 
        return ( 
            <>
                <HeaderComponent />
                <HeroSection pageClass="hero_section_about" pageTitle="About Us"/>
                <Container className="my-5">
                    <Row>
                        <Col md={6} sm={12}>
                            <p style={{textAlign: "justify"}}>With over a billion fans globally, the popularity of cricket is undoubted; particularly in our region (subcontinent), which alone constitutes 90% of them. Regardless of the recent video games obsession in the younger generation, it is safe to say that the popularity of cricket hasn’t declined by any means. Naturally, their passion for cricket isn’t only restricted to watching- but there are millions of club cricketers who dream of playing for their country. Unfortunately, due to an unsound cricket structure at the grass-root level in Pakistan, a lot of talent goes to waste!</p>
                            <p style={{textAlign: "justify"}}>What we offer is a platform where club cricketers can get some validation/recognition and to prove themselves to get selected at a higher level. In addition, we offer a sports news website exclusively for the game of cricket. The site features profiles of players and clubs/teams, online store, rankings, blog articles, and a Career-Guru. Our website will be assisting players in making crucial decision regarding their career!</p>
                            <Link to="/contactus"><Button style={{padding: `${9}px ${30}px`}} variant="outline-dark">Contact Us</Button></Link>
                        </Col>
                        <Col md={6} sm={12}>
                            <img src={web} style={{borderRadius: `${20}px`, height: `${60}vh`, width: `${100}%`}} className="img-fluid" alt="Stadium Pic"/>
                        </Col>
                    </Row>
                </Container>

                <Footer />
            </>
         );
    }
}
 
export default AboutUS;