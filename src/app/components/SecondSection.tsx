import { ArrowDownRight, QuoteIcon } from 'lucide-react';
import React from 'react';

const SecondSection = () => {
  return (
    <section className="flex justify-between items-center w-full max-w-[85rem] h-[85%] mt-12 mx-auto">
      <div className="w-1/2 h-full flex justify-center items-center gap-6">
        <div className="h-full w-[100px] flex flex-col justify-between">
          <div className=" h-[100px] w-[100px] rounded-full bg-[#d6e5be] p-1">
            <img src="/circleMoving.svg" className="circle" alt="" />
          </div>

          <div className='relative h-[80px] w-[80px] rounded-full bg-[#d6e5be] before:absolute before:content-[""] before:w-[75px] before:h-[75px]  before:border-x-[20px] before:border-y-[20px] before:border-white before:top-1/4 before:rounded-full before:bg-[#d6e5be] before:left-1/2 logo2'></div>
        </div>
        <div className="relative overflow-hidden rounded-3xl imageTwo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[35%] -left-[1%] absolute -top-[17%] z-[1]"
            viewBox="0 0 199.36 15.4"
          >
            <defs></defs>
            <title>one1</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path className="cls-1" style={{ fill: 'white' }} d="0" />
              </g>
            </g>
          </svg>
          <div className="absolute top-0 w-[60%] flex justify-between items-center text-4xl z-[1] left-[5px] textSvg">
            <p>Explore our solutions</p>
            <ArrowDownRight size="60px" strokeWidth="1"></ArrowDownRight>
          </div>

          <img
            src="/secondBackground.webp"
            alt=""
            className="w-[90%] rounded-3xl imageTwo2"
          />
        </div>
      </div>
      <div className="w-1/2 h-full flex gap-4 justify-center items-center flex-col">
        <div className="w-full flex justify-between items-end staggerScale">
          <span className="h-[2px] w-[26%] bg-black firstBar"></span>
          <p className="text-3xl relative top-[10px] firstOne">01</p>
          <span className="h-[2px] w-[26%] bg-[#a5a5a5] secondBar"></span>
          <p className="text-3xl relative top-[10px] scale-0 secondOne">02</p>
          <span className="h-[2px] w-[26%] bg-[#a5a5a5]"></span>
        </div>
        <div className="w-full justify-between items-center flex ">
          <img
            src="/sideOneFirst.webp"
            alt=""
            className="h-[80%] w-[35%] rounded-3xl staggerScale staggerScaleOne"
          />
          <img
            src="/sideOneSecond.webp"
            alt=""
            className="h-[80%] w-[60%] rounded-3xl staggerScale staggerScaleOne"
          />
        </div>
        <div className="w-full justify-center gap-4 bg-[#d6e5be] items-start flex-col p-4 h-[30%]  rounded-3xl flex relative staggerScale staggerScaleOne">
          {/* 90% Water Savings  The smart irrigation systems implemented by UrbanGreen Tech have proven to reduce water consumption by up to 90% when compared to conventional farming practices.*/}
          <h2 className="text-3xl">80% Energy Efficiency</h2>
          <p className="text-xl w-[90%]">
            UrbanGreen Tech's LED lighting solutions have demonstrated energy
            efficiency gains of up to 80% compared to traditional lighting
            systems.
          </p>
          <ArrowDownRight
            size="40px"
            strokeWidth="1"
            className="absolute right-[2%] top-3/4"
          ></ArrowDownRight>
        </div>
        <div className="w-full justify-center relative right-[20px] items-center flex staggerScale staggerScaleOne">
          <img
            src="/profileFirst.webp"
            alt=""
            className="h-[100%] w-[30%] rounded-full border-x-[15px] border-y-[15px] relative -right-[40px] z-[1] border-[#f1efe6]"
          />
          <div className="bg-[#f1efe6] h-[100%] w-[70%]   p-4 rounded-full flex justify-between items-center relative">
            <QuoteIcon
              size="20px"
              fill="black"
              stroke="none"
              className="h-full w-[10%] left-[8%] relative -top-[30%]"
            ></QuoteIcon>
            <p className="text-xl w-[80%] goUP">
              Our mission is to empower communities, inspire innovation, and
              create an eco-friendly world.
            </p>
            <h3 className="absolute bottom-[10%] left-[15%] font-bold goUP">
              Camilla Hoff, co-founder
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
