import React from 'react';
import { SettingsIcon, Leaf } from 'lucide-react';
import { HomeIcon } from 'lucide-react';
const Nav = () => {
  return (
    <nav className="w-full max-w-[85em] mx-auto h-[80px] flex justify-between items-center relative">
      <section className="logo flex justify-center items-center relative gap-[13px]">
        <div className='relative h-[35px] w-[35px] rounded-full bg-black before:absolute before:content-[""] before:w-[30px] before:h-[30px]  before:border-x-[7px] before:border-y-[7px] before:border-white before:top-1/4 before:rounded-full before:bg-black before:left-1/2'></div>
        <p className="text-xl ">UrbanGreen Tech</p>
      </section>
      <section className="flex justify-center items-center gap-[30px] relative">
        <div className="navItem  h-0 bg-[#d6e5be] flex justify-center items-center gap-2 rounded-3xl px-2 py-1">
          <p className="text-lg relative">Home</p>
          <HomeIcon className="bg-white p-1 rounded-full w-1/3 h-3/4"></HomeIcon>
        </div>
        <div className="navItem  h-0 bg-[#efefef] flex justify-center items-center gap-2 rounded-3xl px-2 py-1">
          <p className="text-lg relative">Service</p>
          <Leaf className="bg-white p-1 rounded-full w-1/3 h-3/4"></Leaf>
        </div>
        <div className="navItem  h-0 bg-[#efefef] flex justify-center items-center gap-2 rounded-3xl px-2 py-1">
          <p className="text-lg relative">Technology</p>
          <SettingsIcon className="bg-white p-1 rounded-full w-1/3 h-3/4"></SettingsIcon>
        </div>
      </section>
      <section>
        <div className="ContactscaleUp w-[150px] h-[90%] bg-[#002e27] rounded-3xl">
          <div className="ContactscaleUpInside w-[150px] h-[90%] bg-[#002e27] text-white text-xl flex justify-center items-center gap-2 rounded-3xl p-2">
            Contact us
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Nav;
