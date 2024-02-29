import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white bottom-0 w-full mt-auto font-MiFuente">
      <div className="bg-gradient-to-b from-zinc-400  to-neutral-50 mx-0 px-2 md:px-4 w-full p-2 md:p-4 py-2 md:py-6">
        <hr className="my-2 md:my-4 border-zinc-700" />

        <div className="sm:flex sm:items-center sm:justify-between mx-2 md:mx-5">
          <span className="text-base md:text-lg text-zinc-700 sm:text-center">
            Roberto Rivas A. © 2024
          </span>

          <div className="flex mt-2 sm:justify-center sm:mt-0 space-x-6 md:space-x-10">
            <a
              href="https://www.linkedin.com/in/roberto-rivas-arteaga-a4a76b108/"
              className="text-lg md:text-3xl text-zinc-700 hover:text-gray-900 transition hover:-translate-y-1 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-linkedin"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M8 11l0 5" />
                <path d="M8 8l0 .01" />
                <path d="M12 16l0 -5" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
              </svg>
              <span className="sr-only">Linkedin</span>
            </a>

            <a
              href="https://www.instagram.com/goberto66/"
              className="text-lg md:text-3xl text-zinc-700 ms-1 md:ms-2 hover:text-gray-900 transition hover:-translate-y-1 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-instagram"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
              </svg>
              <span className="sr-only">Instagram</span>
            </a>

            <a
              href="https://github.com/goberto88"
              className="text-lg md:text-3xl text-zinc-700 ms-1 md:ms-2 hover:text-gray-900 transition hover:-translate-y-1 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-github"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
