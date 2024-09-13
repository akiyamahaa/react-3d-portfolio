/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link
      to={link}
      className="neo-brutalism-white neo-btn hover:neo-brutalism-blue group transition-all hover:-translate-y-2"
    >
      {btnText}
      <img
        src={arrow}
        alt="arrow"
        className="w-4 h-4 object-contain transition-all group-hover:ml-4"
      />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi i am <span className="font-semibold">Ak1yama</span> 👋 <br /> KiTE
      Academy
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and picked up many skills along the way. "
      link={"/about"}
      btnText={"Learn more"}
    />
  ),
  3: (
    <InfoBox
      text="Led multiple projects to completion, and learned a lot in the process."
      link={"/projects"}
      btnText={"Visit my portfolio"}
    />
  ),
  4: (
    <InfoBox
      text="Need a project done? Need a website? Need a game? Need an AI model? I am your guy."
      link={"/contacts"}
      btnText={"Let's talk"}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
