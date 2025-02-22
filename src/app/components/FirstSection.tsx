import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, StarsIcon } from 'lucide-react';
const FirstSection = () => {
  return (
    <>
      <div className="h-[30%] flex justify-center items-start w-full max-w-[85rem] mx-auto relative ">
        {/* flex justify-center items-center flex-col */}
        <section className=" w-full h-full flex justify-evenly items-center">
          <div className="flex flex-col gap-2 justify-start items-start w-1/3">
            <img
              src="/leaf.webp"
              className="w-[40px] h-[40px] rounded-full scaleUp"
              alt="green"
            />
            <p className="text-xl scaleUpInside">UrbanGreen Tech</p>
          </div>
          <h1 className="text-7xl relative w-[66%] h-[60%]">
            <span
              id="my-text"
              className="absolute before:absolute before:content-[''] before:w-full before:h-full before:bg-white before:top-[107%] before:z-[1]"
            >
              Reimagining Urban Spaces,
            </span>

            <br />

            <span
              id="my-text1"
              className="absolute before:absolute before:content-[''] before:w-full before:h-full before:bg-white before:top-[107%] before:z-[3] z-[2]"
            >
              Greening the World
            </span>
          </h1>
        </section>
      </div>
      <section className="sectionLeft flex w-full h-[35%] justify-between items-center relative mt-10 r-0">
        <div className="bg-[#d6e5be] rounded-[70px]  w-[25%] h-full flex flex-col gap-8 justify-center items-start">
          <div className="flex  justify-end items-center w-full relative px-[40px]">
            <img
              src="/profile1.webp"
              className="w-[50px] h-[50px] rounded-full  -m-2"
              alt=""
            />
            <img
              src="/profile2.webp"
              className="w-[50px] h-[50px] rounded-full -m-2"
              alt=""
            />
            <img
              src="/profile3.webp"
              className="w-[50px] h-[50px] rounded-full -m-2"
              alt=""
            />
          </div>
          <div className="flex w-full gap-2 px-[40px] justify-end items-center relative">
            <p className="text-xl">Team</p>
            <ArrowUpRight></ArrowUpRight>
          </div>
          <div className="flex w-full gap-2 px-[60px] justify-end items-center relative">
            <div className='relative h-[40px] w-[40px] rounded-full bg-white before:absolute before:content-[""] before:w-[35px] before:h-[35px]  before:border-x-[10px] before:border-y-[10px] before:border-[#d6e5be] before:top-1/4 before:rounded-full before:bg-white before:left-1/2'></div>
          </div>
        </div>
        <div className="relative rounded-[70px] w-[65%] h-full ">
          <div className="relative rounded-[70px] w-full h-full overflow-hidden">
            <img
              src="/background.jpg"
              className="relative bg-cover bg-center bg-no-repeat w-full h-full rounded-[70px] imageFirst"
              alt=""
            ></img>
          </div>
          <section className=" absolute flex justify-center items-center gap-[30px] top-0 left-[5%] p-2 ">
            <div className="  h-[90%] border-white border-x-[2px] border-y-[2px] text-white flex justify-center items-center gap-2 rounded-3xl px-2 py-1">
              <p className="text-lg relative">Smart</p>
            </div>
            <div className="  h-[90%] border-white border-x-[2px] border-y-[2px] text-white flex justify-center items-center gap-2 rounded-3xl px-2 py-1">
              <p className="text-lg relative">Sustainable</p>
            </div>
            <div className="  h-[90%] border-white border-x-[2px] border-y-[2px] text-white flex justify-center items-center gap-2 rounded-3xl px-2 py-1">
              <p className="text-lg relative">Innovative</p>
            </div>
          </section>
          <div className="bg-white absolute top-3/4 left-[15%] rounded-[50px] text-center w-[25%] articleFirst">
            <article className="relative rounded-[50px] p-4 text-center w-full articleTextFirst">
              We believe that the future of cities lies in smart, eco-friendly
              solutions that address the pressing challenges of urbanization.
            </article>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-between items-center max-w-[85rem] mx-auto relative">
        <div className="flex flex-col justify-center items-center gap-2 w-[200px] h-[15%] mt-10">
          <StarsIcon fill="black" className="workScaleUp" />
          <p className="filter">Cultivating the Future of Cities</p>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <div className=" exploreScaleUp h-[90%] border-black border-x-[2px] border-y-[2px] text-black flex justify-center items-center gap-2 rounded-3xl px-2 py-1">
            <p className="text-lg relative exploreScaleUpInside">
              Explore More
            </p>
            <ArrowUpRight className="exploreScaleUpInside"></ArrowUpRight>
          </div>
          <div className="workScaleUp w-[150px] h-[90%] bg-[#002e27] text-white text-xl flex justify-center items-center gap-2 rounded-3xl p-2">
            Work with us
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstSection;
