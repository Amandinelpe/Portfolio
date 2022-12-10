import React from "react";
import cv from "../assets/CV.pdf";
import { ImFilePdf } from "react-icons/im";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-beige text-prune">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-link inline border-b-4 border-marron text-marron">
            About
          </p>
        </div>

        <p className="text-xl">
          Après 5 ans en tant qu’Agent de Sécurité Incendie, j’ai décidé de me
          reconvertir dans un domaine qui était au départ mystérieux mais aussi
          très intéressant pour moi. Souhaitant en savoir plus sur le monde du
          développement, j’ai commencé par me former sur les bases en HTML - CSS
          et JavaScript en autodidacte, et ensuite intégré une formation
          intensive de 5 mois à la Wild Code School en septembre 2022. Ma
          passion pour le développement web commence en 2020 et m'a demandé un
          changement radical de cursus afin de pouvoir pleinement l'exploiter.
          Dès lors, j'ai mis tout en oeuvre pour percer dans cette voie, tout en
          prenant du plaisir sur les divers projets développés depuis le début
          de la formation.
        </p>
        <a href={cv} target="_blank" rel="noreferrer">
          <button className="group text-white w-fit px-9 py-3 my-2 flex items-center rounded-md bg-gradient-to-br from-marron to-beige cursor-pointer mt-8">
            CV
            <ImFilePdf size={20} className="ml-3 animate-bounce w-6 h-6" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
