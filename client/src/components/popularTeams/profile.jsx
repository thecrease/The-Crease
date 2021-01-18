import React from 'react';

const ProfileDetail = ({ detail }) => {
  return (
    <>
      <div className="border-right-green p-1">
        <div className="d-flex justify-content-center align-items-center">
          <h1>Profile</h1>
        </div>
        <div className="d-flex justify-content-center">
          <div className="w-25">
            <img className="w-100 border-radius-50" src={detail?.logo} />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <p>
            <b>Captan</b>
          </p>
          <p>{detail?.captan}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>
            <b>Coach</b>
          </p>
          <p>{detail?.coach}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>
            <b>Venue</b>
          </p>
          <p>{detail?.venue}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>
            <b>Rating</b>
          </p>
          <p>{detail?.rating}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>
            <b>Ranking</b>
          </p>
          <p>{detail?.ranking}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>
            <b>Trophies</b>
          </p>
          <p>{detail?.trophies}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>
            <b>Owner</b>
          </p>
          <p>{detail?.owner}</p>
        </div>
      </div>
    </>
  );
};

export default ProfileDetail;
