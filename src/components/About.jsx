import React from "react";
import cv from "../assets/CV.pdf";
import { ImFilePdf } from "react-icons/im";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-white text-black -sm:pt-28">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl inline font-signature text-green">About</p>
        </div>

        <p className="text-xl">
          Après avoir exercé en tant qu’Agent de Sécurité Incendie pendant 5
          ans, j’ai décidé de me reconvertir dans un domaine qui était au départ
          mystérieux mais aussi très intéressant pour moi. Dans mon désir de
          mieux appréhender le monde du développement, j'ai intégré avec
          enthousiasme une formation intensive de cinq mois à la Wild Code
          School en septembre 2022. Forte des bases acquises en REACT -
          JavaScript - Node.js, c'est auprès de Affilae que j'ai la chance
          d'implémenter des intégrations techniques, de travailler sur la
          maintenances de script, et également en tant que support technique. De
          plus, j'ai l'occasion de découvrir l'affiliation marketing et son
          milieu.
        </p>
        <a href={cv} target="_blank" rel="noreferrer">
          <button className="group text-black w-fit px-9 py-3 my-2 flex items-center rounded-md bg-gradient-to-br from-white to-green cursor-pointer mt-8">
            CV
            <ImFilePdf size={20} className="ml-3 animate-bounce w-6 h-6" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
