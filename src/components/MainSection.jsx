import React from "react";
import heroImg from "../assets/images/image-hero-desktop.png";
import { ReactComponent as Databiz } from "../assets/images/client-databi.svg";
import { ReactComponent as Audiophile } from "../assets/images/client-audiophile.svg";
import { ReactComponent as Meet } from "../assets/images/client-meet.svg";
import { ReactComponent as Maker } from "../assets/images/client-maker.svg";
import Button from "./Button.jsx";



const MainSection = () => {
  return (
    <section className={"w-full flex mt-6 h-screen justify-between"}>
      <div className="sm:w-full md:w-1/2 relative text-left mt-12">
        <h1 className="text-5xl xl:text-8xl font-bold mt-24 whitespace-pre-line">
          {"Make\n remote work"}
        </h1>
        <p className="sm:w-4/5 md:w-2/4 xl:w-3/5 text-medium-gray text-lg my-12 whitespace-pre-line">
          {"Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
            "Ad amet, assumenda at beatae deserunt, dolores ducimus lorem ips eligendi.\n" +
          "Illo nobis officia praesentium.\n Qui quibusdam quo reprehenderitsapiente suscipit, tempora ullam voluptatem!"}
        </p>
        <Button isFilled>Learn More</Button>
        <div className="flex justify-around absolute w-full sm:bottom-28 xl:bottom-24">
          <Databiz></Databiz>
          <Audiophile></Audiophile>
          <Meet></Meet>
          <Maker></Maker>
        </div>
      </div>
      <div className={'flex sm:w-1/2 md:w-1/2 xl:w-3/5 mt-6 mb-52'}>
        <img className={'object-contain'}
          src={heroImg} alt="hero" />
      </div>
    </section>
  );
};

export default MainSection;
