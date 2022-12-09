import React from "react";
import { BsArrowDownRightCircle } from "react-icons/bs";
import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import JS from "../assets/JS.png";
import REACT from "../assets/REACT.png";
import Node from "../assets/Node.png";
import Express from "../assets/Express.png";
import SQL from "../assets/SQL.png";
import Github from "../assets/Github.png";
import figma from "../assets/figma.png";

const SoftSkills = () => {
  const techs = [
    {
      id: 1,
      src: HTML,
      title: "HTML",
      style: "shadow-orange",
    },
    {
      id: 2,
      src: CSS,
      title: "CSS",
      style: "shadow-bleu",
    },
    {
      id: 3,
      src: JS,
      title: "JavaScript",
      style: "shadow-yellow",
    },
    {
      id: 4,
      src: REACT,
      title: "React",
      style: "shadow-bleuclair",
    },
    {
      id: 5,
      src: Node,
      title: "Node",
      style: "shadow-vert",
    },
    {
      id: 6,
      src: Express,
      title: "Express",
      style: "shadow-yellow2",
    },
    {
      id: 7,
      src: SQL,
      title: "MySQL",
      style: "shadow-sql",
    },
    {
      id: 8,
      src: Github,
      title: "GitHub",
      style: "shadow-github",
    },
    {
      id: 9,
      src: figma,
      title: "Figma",
      style: "shadow-figma",
    },
  ];

  return (
    <div name="soft skills" className="bg-beige w-full h-full">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-marron pt-72">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Soft Skills
          </p>
          <p className="py-6 flex flex-row gap-4">
            These are the technologies I've worked with
            <BsArrowDownRightCircle size={25} />
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 text-prune">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;
