import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import DataCall from "./DataCall";
import AllData from "./AllData";
import { Link } from "react-router-dom";
const RightPane = (props) => {
  // console.log("DATA : ", props.data)
  const [key2, setKey2] = useState("All");
  React.useEffect(() => {
    console.log("the data from parent = ", props.data);
  }, []);
  return (
    <div
      style={{ borderLeft: "1px solid grey", padding: "10px 30px 20px 30px" }}
    >
      <h4 style={{ fontWeight: "bold" }}>Browse List : {props.country}</h4>
      <Tabs
        id="controlled-tab-example2"
        activeKey={key2}
        onSelect={(k) => setKey2(k)}
      >
        <Tab eventKey="All" title="All">
          <Link tp="/player">
            {props.from == "teams" ? (
              <DataCall country={props.country} data={props.check} />
            ) : (
              <AllData data={props.data} />
            )}
          </Link>
        </Tab>
        {/* <Tab eventKey="Tests" title="Tests">
          {props.from == "teams" ? <DataCall /> : "players"}
        </Tab>
        <Tab eventKey="ODIs" title="ODIs">
          {props.from == "teams" ? <DataCall /> : "players"}
        </Tab>
        <Tab eventKey="T20" title="T20">
          {props.from == "teams" ? <DataCall /> : "players"}
        </Tab>
        <Tab eventKey="Contracted Players" title="Contracted Players">
          {props.from == "teams" ? <DataCall /> : "players"}
        </Tab> */}
      </Tabs>
    </div>
  );
};

export default RightPane;
