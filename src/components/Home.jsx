import React from "react";
import Avatar from "../assets/Avatar.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-white">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-7xl font-bold font-signature text-green mt-20">
            {" "}
            Hi !
          </h1>
          <h2 className="text-4xl sm:text-5xl text-black font-link mt-4">
            Technical Integration Consultante
          </h2>
          <p className="text-black py-4 max-w-md">
            Currently, i love to work on web applications using technologies
            like JavaScript, React, Node, Express, GraphQL, TypeScript, React
            Native and mySQL. I am currently working on technical
            implementations such as : Shopify, WooCommerce, Prestashop, Google
            Tag Manager or even server-to-server.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-br from-white to-green cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Avatar}
            alt="my profile"
            className="rounded-3xl mx-auto w-2/3 md:w-full mt-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
