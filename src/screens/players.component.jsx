import React from 'react';
import { useHistory } from 'react-router-dom';
import HeaderComponent from '../components/Headers/header.compoent';
import PopularTeam from '../components/popularTeams/popularTeams.component';
import Form from './Form'
import Footer from '../components/Footer/footer.component'
import HeroSection from '../components/HeroSection/HeroSection';
const popularTeams = [
  {
    id: 1,
    img: require('../assets/pak-flag.jpg'),
    logo: require('../assets/pak-logo.png'),
    country: 'Pakistan',
    captan: 'Azhar Ali',
    coach: 'Mickey Arther',
    venue: 'Lahore',
    rating: '10.9',
    ranking: '1',
    trophies: '12',
    owner: 'PCB',
    squad: [
      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali (C)',
        rating: '2.7',
      },
      {
        img: require('../assets/allRounder.png'),
        name: 'Ahmad Ali (VC)',
        rating: '2.7',
      },
      {
        img: require('../assets/keeper.png'),
        name: 'Junaid Ali (WK)',
        rating: '2.7',
      },
      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },

      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
      {
        img: require('../assets/ball.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
      {
        img: require('../assets/ball.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
    ],
    topScorer: [
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topScore: '1000',
        avg: '27.10',
        batting: 'RHB',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topScore: '1000',
        avg: '27.10',
        batting: 'RHB',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topScore: '1000',
        avg: '27.10',
        batting: 'RHB',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topScore: '1000',
        avg: '27.10',
        batting: 'RHB',
      },
    ],
    topWicket: [
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topWickets: '100',
        avg: '27.10',
        bowling: 'LAFM',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topWickets: '1000',
        avg: '27.10',
        bowling: 'Spin',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topWickets: '1000',
        avg: '27.10',
        bowling: 'RAF',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topWickets: '1000',
        avg: '27.10',
        bowling: 'RAS',
      },
    ],
  },
  {
    id: 2,
    img: require('../assets/pak-flag.jpg'),
    logo: require('../assets/pak-logo.png'),
    country: 'India',
    captan: 'Azhar Ali',
    coach: 'Mickey Arther',
    venue: 'Lahore',
    rating: '10.9',
    ranking: '1',
    trophies: '12',
    owner: 'PCB',
    squad: [
      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali (C)',
        rating: '2.7',
      },
      {
        img: require('../assets/allRounder.png'),
        name: 'Ahmad Ali (VC)',
        rating: '2.7',
      },
      {
        img: require('../assets/keeper.png'),
        name: 'Junaid Ali (WK)',
        rating: '2.7',
      },
      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },

      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
      {
        img: require('../assets/ball.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
      {
        img: require('../assets/ball.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
    ],
    topScorer: [
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topScore: '1000',
        avg: '27.10',
        batting: 'RHB',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topScore: '1000',
        avg: '27.10',
        batting: 'RHB',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topScore: '1000',
        avg: '27.10',
        batting: 'RHB',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topScore: '1000',
        avg: '27.10',
        batting: 'RHB',
      },
    ],
    topWicket: [
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topWickets: '100',
        avg: '27.10',
        bowling: 'LAFM',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topWickets: '1000',
        avg: '27.10',
        bowling: 'Spin',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topWickets: '1000',
        avg: '27.10',
        bowling: 'RAF',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topWickets: '1000',
        avg: '27.10',
        bowling: 'RAS',
      },
    ],
  },
  {
    id: 3,
    img: require('../assets/pak-flag.jpg'),
    logo: require('../assets/pak-logo.png'),
    country: 'England',
    captan: 'Azhar Ali',
    coach: 'Mickey Arther',
    venue: 'Lahore',
    rating: '10.9',
    ranking: '1',
    trophies: '12',
    owner: 'PCB',
    squad: [
      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali (C)',
        rating: '2.7',
      },
      {
        img: require('../assets/allRounder.png'),
        name: 'Ahmad Ali (VC)',
        rating: '2.7',
      },
      {
        img: require('../assets/keeper.png'),
        name: 'Junaid Ali (WK)',
        rating: '2.7',
      },
      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },

      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
      {
        img: require('../assets/ball.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
      {
        img: require('../assets/ball.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
    ],
    topScorer: [
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topScore: '1000',
        avg: '27.10',
        batting: 'RHB',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topScore: '1000',
        avg: '27.10',
        batting: 'RHB',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topScore: '1000',
        avg: '27.10',
        batting: 'RHB',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topScore: '1000',
        avg: '27.10',
        batting: 'RHB',
      },
    ],
    topWicket: [
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topWickets: '100',
        avg: '27.10',
        bowling: 'LAFM',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topWickets: '1000',
        avg: '27.10',
        bowling: 'Spin',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topWickets: '1000',
        avg: '27.10',
        bowling: 'RAF',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topWickets: '1000',
        avg: '27.10',
        bowling: 'RAS',
      },
    ],
  },
  {
    id: 4,
    img: require('../assets/pak-flag.jpg'),
    logo: require('../assets/pak-logo.png'),
    country: 'Pakistan',
    captan: 'Azhar Ali',
    coach: 'Mickey Arther',
    venue: 'Lahore',
    rating: '10.9',
    ranking: '1',
    trophies: '12',
    owner: 'PCB',
    squad: [
      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali (C)',
        rating: '2.7',
      },
      {
        img: require('../assets/allRounder.png'),
        name: 'Ahmad Ali (VC)',
        rating: '2.7',
      },
      {
        img: require('../assets/keeper.png'),
        name: 'Junaid Ali (WK)',
        rating: '2.7',
      },
      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },

      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
      {
        img: require('../assets/ball.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
      {
        img: require('../assets/ball.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
    ],
    topScorer: [
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topScore: '1000',
        avg: '27.10',
        batting: 'RHB',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topScore: '1000',
        avg: '27.10',
        batting: 'RHB',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topScore: '1000',
        avg: '27.10',
        batting: 'RHB',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topScore: '1000',
        avg: '27.10',
        batting: 'RHB',
      },
    ],
    topWicket: [
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topWickets: '100',
        avg: '27.10',
        bowling: 'LAFM',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topWickets: '1000',
        avg: '27.10',
        bowling: 'Spin',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topWickets: '1000',
        avg: '27.10',
        bowling: 'RAF',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topWickets: '1000',
        avg: '27.10',
        bowling: 'RAS',
      },
    ],
  },
  {
    id: 5,
    img: require('../assets/pak-flag.jpg'),
    logo: require('../assets/pak-logo.png'),
    country: 'India',
    captan: 'Azhar Ali',
    coach: 'Mickey Arther',
    venue: 'Lahore',
    rating: '10.9',
    ranking: '1',
    trophies: '12',
    owner: 'PCB',
    squad: [
      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali (C)',
        rating: '2.7',
      },
      {
        img: require('../assets/allRounder.png'),
        name: 'Ahmad Ali (VC)',
        rating: '2.7',
      },
      {
        img: require('../assets/keeper.png'),
        name: 'Junaid Ali (WK)',
        rating: '2.7',
      },
      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },

      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
      {
        img: require('../assets/ball.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
      {
        img: require('../assets/ball.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
    ],
    topScorer: [
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topScore: '1000',
        avg: '27.10',
        batting: 'RHB',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topScore: '1000',
        avg: '27.10',
        batting: 'RHB',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topScore: '1000',
        avg: '27.10',
        batting: 'RHB',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topScore: '1000',
        avg: '27.10',
        batting: 'RHB',
      },
    ],
    topWicket: [
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topWickets: '100',
        avg: '27.10',
        bowling: 'LAFM',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topWickets: '1000',
        avg: '27.10',
        bowling: 'Spin',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topWickets: '1000',
        avg: '27.10',
        bowling: 'RAF',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topWickets: '1000',
        avg: '27.10',
        bowling: 'RAS',
      },
    ],
  },
  {
    id: 6,
    img: require('../assets/pak-flag.jpg'),
    logo: require('../assets/pak-logo.png'),
    country: 'England',
    captan: 'Azhar Ali',
    coach: 'Mickey Arther',
    venue: 'Lahore',
    rating: '10.9',
    ranking: '1',
    trophies: '12',
    owner: 'PCB',
    squad: [
      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali (C)',
        rating: '2.7',
      },
      {
        img: require('../assets/allRounder.png'),
        name: 'Ahmad Ali (VC)',
        rating: '2.7',
      },
      {
        img: require('../assets/keeper.png'),
        name: 'Junaid Ali (WK)',
        rating: '2.7',
      },
      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },

      {
        img: require('../assets/bat.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
      {
        img: require('../assets/ball.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
      {
        img: require('../assets/ball.png'),
        name: 'Azhar Ali',
        rating: '2.7',
      },
    ],
    topScorer: [
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topScore: '1000',
        avg: '27.10',
        batting: 'RHB',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topScore: '1000',
        avg: '27.10',
        batting: 'RHB',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topScore: '1000',
        avg: '27.10',
        batting: 'RHB',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topScore: '1000',
        avg: '27.10',
        batting: 'RHB',
      },
    ],
    topWicket: [
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topWickets: '100',
        avg: '27.10',
        bowling: 'LAFM',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topWickets: '1000',
        avg: '27.10',
        bowling: 'Spin',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topWickets: '1000',
        avg: '27.10',
        bowling: 'RAF',
      },
      {
        pic: require('../assets/player.jpg'),
        name: 'Ali',
        topWickets: '1000',
        avg: '27.10',
        bowling: 'RAS',
      },
    ],
  },
];

const Teams = () => {
  const history = useHistory();
  const handleTeamClick = (value) => {
    history.push(`/teams/detail:${value.id}`, { teamDetail: value });
  };
  return (
    <>
      <HeaderComponent />
      <HeroSection pageClass="hero_section_players" pageTitle="Players"/>
      <Form from="teams" />
      {/* <PopularTeam
        title="POPULAR INTERNATIONAL TEAMS"
        popularTeams={popularTeams}
        handleTeamClick={handleTeamClick}
      />
      <PopularTeam
        title="POPULAR CLUB TEAMS"
        popularTeams={popularTeams}
        handleTeamClick={handleTeamClick}
      />
      <PopularTeam
        title="POPULAR UNI TEAMS"
        popularTeams={popularTeams}
        handleTeamClick={handleTeamClick}
      /> */}
      <Footer />
    </>
  );
};

export default Teams;
