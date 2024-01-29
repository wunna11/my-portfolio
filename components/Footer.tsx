import React from "react";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto p-4 flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
        <p>Design and build by{" "}
          <span className="font-bold text-teal-500">Wunna</span>{" "}
          </p>
      </div>
    </footer>
  );
};

export default Footer;
