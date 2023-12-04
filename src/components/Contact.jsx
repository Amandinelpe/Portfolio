import React from "react";
import { BsArrowDownRightCircle } from "react-icons/bs";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-full bg-white p-4 text-green pt-28">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-5xl font-signature inline">Contact</p>
          <p className="py-6 flex flex-row gap-4">
            Submit the form below to get in touch with me
            <BsArrowDownRightCircle
              size={25}
              className="animate-bounce w-6 h-6"
            />
          </p>
        </div>

        <div className=" flex justify-center items-center hover:scale-105 duration-800 rounded-ml py-2 sm:bg-transparent rounded-lg ">
          <form
            action="https://getform.io/f/266c79cb-f455-49b7-95ba-5e5146d5ced4"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-green focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-green focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-green focus:outline-none"
            ></textarea>

            <button className="text-black bg-gradient-to-br from-white to-green px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
