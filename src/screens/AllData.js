import React, { useState } from 'react'
import TopWickets from '../components/popularTeams/topWicketTaker'
import TopScorer from '../components/popularTeams/topScorer'
import ProfileDetail from '../components/popularTeams/profile';
import SquardTable from '../components/popularTeams/squadTable';
import { Tabs, Tab } from 'react-bootstrap'
const AllData = (props) => {
    return (
        <div >
            <Tabs defaultActiveKey="Profile Data" id="uncontrolled-tab-example">
                <Tab eventKey="Profile Data" title="Profile Data">
                    <ProfileDetail detail={props?.data} />
                </Tab>
                <Tab eventKey="Top Wicket" title="Top Wicket">
                    <TopWickets topWicket={props?.data?.topWicket} />
                </Tab>
                <Tab eventKey="Top Score" title="Top Score">
                    <TopScorer topScorer={props?.data?.topScorer} />
                </Tab>
                <Tab eventKey="Squad Table" title="Squad Table" >
                    <SquardTable squad={props?.data?.squad} />
                </Tab>
            </Tabs>
        </div >
    );
}

export default AllData