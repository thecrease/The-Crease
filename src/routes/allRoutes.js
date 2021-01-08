import React from 'react';
import { Route } from 'react-router-dom';
import HomeScreen from '../screens/home.component';
import Teams from '../screens/teams.component';
import TeamsDetail from '../screens/teamsDetail.component';
import { routePath } from '../utils/routePath';
import AboutUs from '../screens/aboutus'
import Player from '../screens/player'
import Players from '../screens/players.component';
import Ranking from '../screens/ranking'
import ContactUs from "../screens/ContactUs"


const AllRoutes = () => {
  return (
    <>
      <Route path={routePath.home} exact label="Home" component={HomeScreen} />
      <Route path={routePath.teams} exact label="Teams" component={Teams} />
      <Route path={routePath.players} exact label="Players" component={Players} />
      <Route path={routePath.ranking} exact label="Ranking" component={Ranking} />
      <Route path={routePath.teamsDetail} exact label="TeamsDetail" component={TeamsDetail} />
      <Route path='/player' exact label="Player" component={Player} />
      <Route path='/contactus' exact label="ContactUs" component={ContactUs} />
      <Route path={routePath.aboutus} exact label="AboutUs" component={AboutUs} />
      <Route path="/player" exact label="Player" component={Player} />
    </>
  );
};

export default AllRoutes;
