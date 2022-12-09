import React from "react";

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
          et JavaScript en autodidacte, et ensuite d’intégré une formation à la
          Wild Code School. La Wild Code School propose une formation intense de
          5 mois, avec une approche de l’enseignement innovant reposant sur la
          pratique et les projets de groupes. J’ai pu réaliser 2 projets en
          groupes, ainsi qu’un Hackathon d’une durée de 24h. Un projet 3 est en
          cours, dans lequel nous faisons l’intégralité du projet, de la
          conception au développement.
        </p>
      </div>
    </div>
  );
};

export default About;
