import React, { useState } from 'react'
import { Tabs, Tab, Container } from 'react-bootstrap'
import HeaderComponent from '../components/Headers/header.compoent';
import Odi from '../screens/Odi';
import T20 from '../screens/T20';
import Test from '../screens/Test'
import Team from '../screens/Team'
import Footer from '../components/Footer/footer.component'
import HeroSection from '../components/HeroSection/HeroSection';
import "../screens/ranking.css"
const Ranking = (props) => {
    return (
        <div >
            <HeaderComponent />
            <HeroSection pageClass="hero_section_ranking" pageTitle="Rankings"/>
            <Container>
                <Tabs className="custom_tabs" defaultActiveKey="Odi" id="uncontrolled-tab-example">
                    <Tab className="mb-5" eventKey="Odi" title="Batsman">
                        <Odi />
                    </Tab>
                    <Tab eventKey="T20" className="mb-5" title="Bowler">
                        <T20 />
                    </Tab>
                    <Tab eventKey="Test" className="mb-5" title="All-Rounder">
                        <Test />
                    </Tab>
                    <Tab eventKey="Team" className="mb-5" title="Team">
                        <Team />
                    </Tab>
                </Tabs>
            </Container>
            <Footer />
        </div >
    );
}

export default Ranking