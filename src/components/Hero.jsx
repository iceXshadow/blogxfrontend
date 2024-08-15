import React from 'react';

const Hero = () => {
  return (
    <section className='relative w-full h-[80vh] flex justify-center items-center lg:items-end lg:py-12 bg-inherit overflow-hidden rounded-lg'>
      <div 
        className='absolute inset-0 bg-cover bg-center rounded-lg'
        style={{ backgroundImage: 'url(/hero2.jpg)' }}
      ></div>
      <div className='relative flex flex-col justify-center items-center lg:justify-start lg:items-start gap-2 font-outfit text-center w-4/5 md:w-full px-8'>
        <span className='bg-clip-text text-transparent text-[2.2rem] md:text-[6rem] font-bold bg-gradient-to-r from-slate-200 to-slate-50 leading-none'>
          Frozen in Innovation
        </span>
        <p className='text-[0.9rem] md:text-[1.4rem] font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-50'>
          Exploring the coolest trends and ideas in technology
        </p>
      </div>
    </section>
  );
}

export default Hero;