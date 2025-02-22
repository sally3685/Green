import { StarsIcon } from 'lucide-react';
import React from 'react';

const Bars = () => {
  return (
    <section className="h-[250x] ">
      <div className="border-black border-y-[1px] text-3xl  mt-12 h-[55px] w-full relative wrapperBars overflow-hidden">
        <div className="w-full h-full flex justify-between items-center">
          <p className="w-full text-center">Eco-Friendly Pest Control</p>
          <img
            src="/leaf.webp"
            alt=""
            className="h-[90%] w-[50px] rounded-lg "
          />
          <p className="w-full text-center">Vertical Farming Solutions</p>
          <p className="w-full text-center">Urban Greenhouse Construction</p>
        </div>
        <div className="w-full left-full absolute h-full flex justify-between items-center top-0">
          <p className="w-full text-center">Eco-Friendly Pest Control</p>
          <img
            src="/leaf.webp"
            alt=""
            className="h-[90%] w-[50px] rounded-lg "
          />
          <p className="w-full text-center">Vertical Farming Solutions</p>
          <p className="w-full text-center">Urban Greenhouse Construction</p>
        </div>
      </div>

      <div className="border-black border-y-[1px] text-3xl  h-[55px] w-full relative wrapperBars2 overflow-hidden">
        <div className="w-full h-full flex justify-between items-center">
          <p className="w-full text-center">Eco-Friendly Pest Control</p>
          <div className=" w-[36%] h-[90%] border-black border-x-[1px] border-y-[1px] text-black flex justify-center items-center gap-2 rounded-3xl px-2 py-1">
            <p className="text-lg relative ">Smart Urban</p>
            <StarsIcon fill="black"></StarsIcon>
          </div>
          <p className="w-full text-center">Vertical Farming Solutions</p>
          <p className="w-full text-center">Urban Greenhouse Construction</p>
        </div>
        <div className="w-full -left-full absolute h-full flex justify-between items-center top-0">
          <p className="w-full text-center">Eco-Friendly Pest Control</p>
          <div className="w-[36%]  h-[80%] border-black border-x-[2px] border-y-[2px] text-black flex justify-center items-center gap-2 rounded-3xl px-2 py-1">
            <p className="text-lg relative ">Smart Urban</p>
            <StarsIcon fill="black"></StarsIcon>
          </div>
          <p className="w-full text-center">Vertical Farming Solutions</p>
          <p className="w-full text-center">Urban Greenhouse Construction</p>
        </div>
      </div>

      <div className="border-black border-y-[1px] text-3xl  h-[55px] w-full relative wrapperBars3 overflow-hidden">
        <div className="w-full h-full flex justify-between items-center">
          <p className="w-full text-center">Eco-Friendly Pest Control</p>
          <img
            src="/grass.webp"
            alt=""
            className="h-[90%] w-[10%] rounded-xl "
          />
          <p className="w-full text-center">Vertical Farming Solutions</p>
          <p className="w-full text-center">Urban Greenhouse Construction</p>
        </div>
        <div className="w-full left-full absolute h-full flex justify-between items-center top-0">
          <p className="w-full text-center">Eco-Friendly Pest Control</p>
          <img
            src="/grass.webp"
            alt=""
            className="h-[90%] w-[10%] rounded-xl "
          />
          <p className="w-full text-center">Vertical Farming Solutions</p>
          <p className="w-full text-center">Urban Greenhouse Construction</p>
        </div>
      </div>
    </section>
  );
};

export default Bars;
