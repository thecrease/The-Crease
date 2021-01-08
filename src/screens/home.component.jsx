import React from 'react';
import Blogs from '../components/Blogs/blogs.component';
import Footer from '../components/Footer/footer.component';
import HeaderComponent from '../components/Headers/header.compoent';
import RegisterPlayers from '../components/RagisterPlayer/ragisterPlayer.component';
import RegisterTeams from '../components/RagisterTeams/ragisterTeams.component';
import Rankings from '../components/Rankings/ranking.component';
import Button from 'react-bootstrap/Button'
import Carosuel from '../components/Carosuel/Carosuel';

const HomeScreen = () => {
  return (
    <>
      <HeaderComponent />
      <Carosuel />
      <Blogs />
      <Rankings />
      <RegisterTeams />
      <RegisterPlayers />
      <div className="banner_app">
        <h3>Download our Android app to get registered now.</h3>
        <Button variant="outline-secondary"><i className="fab fa-google-play"></i> Download</Button>
      </div>
      
      <Footer />
    </>
  );
};

export default HomeScreen;
