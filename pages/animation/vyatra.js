import Image from "next/image";
import Link from "next/link";
import React from "react";
import tajmahal from "./tajmahal.png";

const Vyatra = () => {
  return (
    <div className="min-h-screen bg-[#FDEDE4]  md:border-l-[22px] border-[#853203]">
      <div className="w-[92%] mx-auto">
        <div className="flex flex-col md:flex-row h-screen min-w-full justify-items-end items-center ">
          <div className="md:w-1/2 order-last md:order-none">
            <h1 className="text-[40px] md:text-[50px] 2xl:text-[155px] text-center md:text-left text-[#FF640D]">
              Vyatra
            </h1>
            <p className="text-[16px] md:text-[20px] lg:text-[24px] text-center md:text-left text-black">
              Vyatra offers virtual tours to it’s users. It allows people to
              enjoy travelling to various holu places all around the world from
              the comfort of their home.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={tajmahal}
              alt="Picture of the author"
              // className={styles.imageAnimation}
              className="imageAnimation w-[100%]"
              // layout="fill"
              objectFit="contain"
              // width={1}
              // height={500}
            />
          </div>
        </div>

        <Link href="/animation" passHref>
          <a>
            <h1 className="text-[21px] flex items-center mt-0 sm:mt-32 md:-mt-16  lg:-mt-16 font-bold justify-center md:justify-start ">
              OPEN CASE STUDY
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </h1>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Vyatra;
