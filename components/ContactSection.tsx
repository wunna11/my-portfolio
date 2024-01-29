import React from "react";
import { TbMail } from "react-icons/tb";
import { HiOutlinePhone } from "react-icons/hi";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="my-12 pb-12 md:pt-16 md:pb-40">
        <h1 className="text-center font-bold text-4xl">
          Contact
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="p-4 w-96">
            <p>
              Feel free to drop a message or connect through any of these
              channels. I am open to collaborations and always happy to chat!
              Looking forward to hearing from you!
            </p>

            <div className="flex flex-row items-start space-x-2 mb-1 mt-8">
              <a href="https://github.com/" rel="noreferrer" target="_blank">
                <AiOutlineGithub
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                  size={30}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/wa-na-a3baa222b/"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineLinkedin
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                  size={30}
                />
              </a>
            </div>
          </div>

          <div className="p-4">
            <div className="text-right bg-gray-200 border border-teal-600 p-4 rounded-md mb-4">
              <div className="flex justify-center mb-3 text-teal-600">
                <a
                  href="mailto:wana11391@gmail.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <TbMail
                    className="hover:-translate-y-1 transition-transform cursor-pointer text-teal-600"
                    fontSize={30}
                  />
                </a>
              </div>
              <span className="flex justify-center text-gray-500 font-semibold">
                wana11391@gmail.com
              </span>
            </div>

            <div className="text-right bg-gray-200 border border-teal-600 p-4 rounded-md">
              <div className="flex justify-center mb-3 text-teal-600">
                <a
                  href=""
                  rel="noreferrer"
                  target="_blank"
                >
                  <HiOutlinePhone
                    className="hover:-translate-y-1 transition-transform cursor-pointer text-teal-600"
                    fontSize={30}
                  />
                </a>
              </div>
              <span className="flex justify-center text-gray-500 font-semibold">
                09753785174
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
