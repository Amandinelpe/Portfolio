import React from "react";
import { BsArrowDownRightCircle } from "react-icons/bs";
import WildPost from "../assets/WildPost.png";
import WildFestival from "../assets/WildFestival.png";
import Hackathon from "../assets/Hackathon.png";
import KasualGames from "../assets/KasualGames.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: WildPost,
    },
    {
      id: 2,
      src: WildFestival,
    },
    {
      id: 3,
      src: Hackathon,
    },
    {
      id: 4,
      src: KasualGames,
    },
  ];

  return (
    <div name="portfolio" className="bg-beige w-full text-prune md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-72">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-marron text-marron">
            Portfolio
          </p>
          <p className="py-6 flex flex-row gap-4 text-marron">
            Check out some of my work right here
            <BsArrowDownRightCircle size={25} />
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-marron">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-marron">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
